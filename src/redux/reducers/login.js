const initState = {
  isLogin: false,
};

function isLogin(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: true
      }
    default:
      return state;
  }
}

export default isLogin