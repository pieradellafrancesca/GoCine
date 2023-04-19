export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_FORM_SWITCH":
      return {
        ...state,
        formSwitch: action.payload,
      };
    case "SET_CURRENT_USER_DATA":
      return {
        ...state,
        currentUserData: action.payload,
      };
  }
};
