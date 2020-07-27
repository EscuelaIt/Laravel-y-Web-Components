import { LOG_USER } from "../actions/user_actions";

const INITIAL_STATE = {
  loggedIn: false,
  userData: {
    id: 0,
    email: "",
    name: "",
  },
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        loggedIn: true,
        userData: {
          ...action.user
        }
    };
    default:
      return state;
  }
};