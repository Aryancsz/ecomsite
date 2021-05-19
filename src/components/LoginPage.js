import Login from "./Login";
import Logout from "./Logout";
import { useSelector, useDispatch } from "react-redux";
import Fblogin from "./Fblogin";

const LoginPage = () => {
  const { loginTok } = useSelector((state) => state.Logst);
  const { loginTokfb } = useSelector((state) => state.Logst);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "LOGTOKFB", payload: null });
  };
  return (
    <div className="loginPage">
      <div className={loginTok ? "disable login lobut" : null}>
        <Login />
      </div>
      <div className={!loginTok ? "disable logout lobut" : null}>
        <Logout />
      </div>
      <div className={loginTokfb ? "disable logout lobut" : null}>
        <Fblogin />
      </div>
      <div className={!loginTokfb ? "disable logout lobut" : null}>
        Logged in with Facebook
      </div>
      <div className={!loginTokfb ? "disable logoutb lobut" : null}>
        <button className="logoutb" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
