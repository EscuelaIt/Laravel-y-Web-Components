import {
  SEND_FEEDBACK,
} from "../actions/app_actions";


const INITIAL_STATE = {
  feedback: null,
};

export const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_FEEDBACK:
      return {
        ...state,
        feedback: action.feedback
      };
    default:
      return state;
  }
};