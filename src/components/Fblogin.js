import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Fblogin = () => {
  const [auto, setauto] = useState(0);
  let history = useHistory();
  const dispatch = useDispatch();
  const responseFacebook = (response) => {
    setauto(0);
    dispatch({ type: "LOGIN", payload: response.name });
    dispatch({ type: "LOGTOKFB", payload: response.accessToken });
    setauto(10);
    if (auto === 10) {
      history.push("/");
      setauto(0);
    }
  };

  return (
    <FacebookLogin
      appId="2029764417163457"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
};

export default Fblogin;
