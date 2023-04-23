import { ref, set } from "firebase/database";
import { db } from "../../firebaseConfig";

export const dbMaker = (oldValue, ticketList, idMovie, orario) => {
  let newData = { ...oldValue };
  ticketList.map((ticket) => {
    if (newData[idMovie]) {
      if (newData[idMovie][orario]) {
        newData = {
          ...newData,
          [idMovie]: {
            ...newData[idMovie],
            [orario]: {
              ...newData[idMovie][orario],
              [ticket.seatNum]: true,
            },
          },
        };
      } else {
        const salaVuota = Array(60).fill(false);
        newData = {
          ...newData,
          [idMovie]: {
            ...newData[idMovie],
            [orario]: {
              ...salaVuota,
              [ticket.seatNum]: true,
            },
          },
        };
      }
    } else {
      const salaVuota = Array(60).fill(false);
      newData = {
        ...newData,
        [idMovie]: {
          [orario]: {
            ...salaVuota,
            [ticket.seatNum]: true,
          },
        },
      };
    }
  });

  set(ref(db, "/rooms"), { ...newData });
};

export const userTicket = (oldValue, userId, ticketList) => {
  let newData;
  if (oldValue[userId].tickets) {
    newData = {
      ...oldValue,
      [userId]: {
        ...oldValue[userId],
        tickets: [...oldValue[userId].tickets, ...ticketList],
      },
    };
  } else {
    newData = {
      ...oldValue,
      [userId]: {
        ...oldValue[userId],
        tickets: [...ticketList],
      },
    };
  }

  set(ref(db, "/users"), { ...newData });
};
