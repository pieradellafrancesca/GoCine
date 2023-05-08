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
    case "SET_MOVIE_ID":
      return {
        ...state,
        movieID: action.payload,
      };
    case "SET_NOW_PLAYING":
      return {
        ...state,
        nowPlaying: action.payload,
      };
  }
};
