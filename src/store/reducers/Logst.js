const initState = {
  loginStatus: ["Login To Start Shopping"],
  loginTok: null,
  loginTokfb: null,
};
const Logst = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loginStatus: action.payload };
    case "LOGOUT":
      return { ...state, loginStatus: action.payload };
    case "LOGTOK":
      return { ...state, loginTok: action.payload };
    case "LOGTOKFB":
      return { ...state, loginTokfb: action.payload };
    default:
      return state;
  }
};
export default Logst;
