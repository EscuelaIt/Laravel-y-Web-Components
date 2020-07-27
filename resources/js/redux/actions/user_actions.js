export const LOG_USER = "LOG_USER";

export const logUser = user => {
  return {
    type: LOG_USER,
    user
  };
};

export const getUser = () => (dispatch) => {
  axios.get("/api-user/get").then(res => {
    if (res.status == 200) {
      if (res.data && res.data.data.loggedIn) {
        dispatch(logUser(res.data.data.user));
      }
    }
  });
}

