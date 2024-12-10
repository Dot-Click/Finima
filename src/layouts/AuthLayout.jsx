import { Outlet } from "react-router-dom";
import Logo from "../components/common/Logo";
import authVector from "/assets/AuthVector.png";

const AuthLayout = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className=" w-screen lg:w-[60vw] flex justify-center items-center bg-gradient-to-t from-periwinkle-100">
        <Outlet />
      </div>
      <div className="bg-orchid-50 hidden lg:flex w-[40vw]  flex-col items-center justify-center gap-28 p-14">
        <Logo />
        <img alt="login" src={authVector} />
      </div>
    </div>
  );
};

export default AuthLayout;
