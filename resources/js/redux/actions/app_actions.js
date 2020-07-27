export const SEND_FEEDBACK = "SEND_FEEDBACK";
export const CHANGE_LOGIN_VISIBILITY = "CHANGE_LOGIN_VISIBILITY";

/**
 * Modelo del feedback
 * {
 *  msg: 'Mensaje de feedback',
 *  status: 'error'
 * }
 */
export const sendFeedback = feedback => {
  return {
    type: SEND_FEEDBACK,
    feedback
  };
};
export const positiveFeedback = msg => {
  return sendFeedback({
    msg,
    status: "success"
  });
};
export const negativeFeedback = msg => {
  //console.log('negative Feedbak in app_actions')
  return sendFeedback({
    msg,
    status: "error"
  });
};
export const neutralFeedback = msg => {
  return sendFeedback({
    msg,
    status: "neutral"
  });
};

export const changeLoginVisibility = opened => {
  return {
    type: CHANGE_LOGIN_VISIBILITY,
    opened
  };
};