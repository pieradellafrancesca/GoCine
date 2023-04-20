export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        tempForm: {
          ...state.tempForm,
          username: action.payload,
        },
      };

    case "SET_EMAIL":
      return {
        ...state,
        tempForm: {
          ...state.tempForm,
          email: action.payload,
        },
      };

    case "SET_PASSWORD":
      return {
        ...state,
        tempForm: {
          ...state.tempForm,
          password: action.payload,
        },
      };

    case "SET_PASSWORD_COPY":
      return {
        ...state,
        tempForm: {
          ...state.tempForm,
          password_copy: action.payload,
        },
      };

    case "SET_FORM_SWITCH":
      return {
        ...state,
        formSwitch: action.payload,
      };

    //---------------------------------------------------//
    // Per Preorder Page
    //---------------------------------------------------//
    case "SET_ROOM":
      return {
        ...state,
        room: action.payload,
      };

    case "SET_ALLSEATS":
      return {
        ...state,
        allSeats: action.payload,
      };
    case "SET_SELECTED_HOUR":
      return {
        ...state,
        selectedHour: action.payload,
      };

    case "SET_MOVIEINFO_TICKET":
      return {
        ...state,
        movieInfo: action.payload,
      };

    case "SET_TICKETDATA_ID":
      return {
        ...state,
        ticketData: {
          ...state.ticketData,
          id: action.payload,
        },
      };

    case "SET_TICKETDATA_DATE":
      return {
        ...state,
        ticketData: {
          ...state.ticketData,
          date: action.payload,
        },
      };
    case "SET_TICKETDATA_SEATNUM":
      return {
        ...state,
        ticketData: {
          ...state.ticketData,
          seatNum: action.payload,
        },
      };
    case "SET_TICKETDATA_MOVIE_TITLE":
      return {
        ...state,
        ticketData: {
          ...state.ticketData,
          movie_title: action.payload,
        },
      };

    case "ADD_TICKET":
      return {
        ...state,
        ticketList: [...state.ticketList, action.payload],
      };

    case "REMOVE_TICKET":
      return {
        ...state,
        ticketList: state.ticketList.filter(
          (ticket) => ticket.seatNum !== action.payload
        ),
      };

    case "RESET_TICKETLIST":
      return {
        ...state,
        ticketList: action.payload,
      };

    case "SET_COUNT":
      return {
        ...state,
        count: action.payload,
      };
  }
};
