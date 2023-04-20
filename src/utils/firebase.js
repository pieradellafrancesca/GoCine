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
        const salaVuota = [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ];
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
      const salaVuota = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ];
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
