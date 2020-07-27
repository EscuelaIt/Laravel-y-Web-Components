import {
  SEND_FEEDBACK,
  CHANGE_LOGIN_VISIBILITY
} from "../actions/app_actions";


const INITIAL_STATE = {
  loginrMenuOpened: false,
  feedback: null,
};

export const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_FEEDBACK:
      return {
        ...state,
        feedback: action.feedback
      };
    case CHANGE_LOGIN_VISIBILITY:
      return {
        ...state,
        loginrMenuOpened: action.opened
      };
    default:
      return state;
  }
};