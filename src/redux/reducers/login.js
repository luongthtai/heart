const initState = {
  isLogin: false,
};

function isLogin(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: true,
      };

    case "LOGOUT":
      return {
        isLogin: false,
      };
      
    default:
      return state;
  }
}

export default isLogin;
