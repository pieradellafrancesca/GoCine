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
  }
};
