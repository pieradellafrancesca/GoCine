const currentUser = JSON.parse(localStorage.getItem("currentUser"));

export const initialState = {
  formSwitch: false,
  currentUserData: currentUser ? currentUser : null,
  movieID: null,
  nowPlaying: [],
};
