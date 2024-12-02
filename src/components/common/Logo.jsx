import { Link } from "react-router-dom";
import logo from "/assets/Logo.png";
const Logo = ({ isRedirectable }) => {
  return (
    <Link to={isRedirectable && "/dashboard"}>
      <img
        alt="logo"
        src={logo}
        className={`${
          isRedirectable ? "cursor-pointer" : "cursor-default"
        } w-[100px] lg:w-[150px] xl:w-[180px]`}
      />
    </Link>
  );
};

export default Logo;
