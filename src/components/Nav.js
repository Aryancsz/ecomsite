import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";

import { useHistory } from "react-router-dom";

const Nav = () => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  const { loginStatus } = useSelector((state) => state.Logst);
  let history = useHistory();
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="nav__left">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div>
            <Link to="/login">
              <button className="login-button">{loginStatus}</button>
            </Link>
          </div>
          <div className="nav__right">
            <Link to="/cart">
              <div className="basket">
                <BsFillBagFill className="cart-icon" />
                <span>{totalQuantities}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
