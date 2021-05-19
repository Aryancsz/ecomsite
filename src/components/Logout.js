import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";

const clientId =
  "440815012424-civnna41b46mkm5rbjdja879j6jcqnkt.apps.googleusercontent.com";

function Logout() {
  const dispatch = useDispatch();
  const onSuccess = () => {
    alert("Logout made successfully");
    dispatch({ type: "LOGIN", payload: "Login To Start Shopping" });
    dispatch({ type: "LOGTOK", payload: null });
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default Logout;
