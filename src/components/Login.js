import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const clientId =
  "440815012424-civnna41b46mkm5rbjdja879j6jcqnkt.apps.googleusercontent.com";

function Login() {
  const [auto, setauto] = useState(0);
  let history = useHistory();
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    setauto(0);
    dispatch({ type: "LOGIN", payload: res.profileObj.name });
    dispatch({ type: "LOGTOK", payload: res.tokenId });
    setauto(10);
    if (auto === 10) {
      history.push("/");
      setauto(0);
    }
  };
  const onFailure = (res) => {
    console.log("[login Failed] res:", res);
  };
  return (
    <div style={{ margin: "5vh" }}>
      <GoogleLogin
        clientId={clientId}
        buttonText="login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single+host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}
export default Login;
