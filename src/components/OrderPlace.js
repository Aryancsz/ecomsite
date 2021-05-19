import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderPlace = () => {
  const { loginTok } = useSelector((state) => state.Logst);
  const { loginTokfb } = useSelector((state) => state.Logst);
  const { products } = useSelector((state) => state.CartReducer);
  const { loginStatus } = useSelector((state) => state.Logst);

  const Validate = () => {
    if (loginTok?.length > 5 && products.length > 0) {
      return `Thank you for shopping with us.
       Mr.${loginStatus} your order has been Placed successfully`;
    } else if (loginTokfb?.length > 5 && products.length > 0) {
      return `Thank you for shopping with us.
       Mr.${loginStatus} your order has been Placed successfully`;
    } else {
      return "Please sign in to place order";
    }
  };

  return (
    <div className="Orders">
      <div className="mess">{Validate()}</div>
      <Link
        to="/login"
        className={loginTok || loginTokfb ? "disable login" : null}
      >
        <button className="login-button loginend">Sign In</button>
      </Link>
      <Link to="/" className={loginTok || loginTokfb ? null : "disable"}>
        <button className="login-button conshop">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default OrderPlace;
