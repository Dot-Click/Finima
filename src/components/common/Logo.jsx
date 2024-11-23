import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/Logo.png";
const Logo = ({ isRedirectable }) => {
  return (
    <Link to={isRedirectable && "/home"}>
      <img src={logo} width={180} />
    </Link>
  );
};

export default Logo;
