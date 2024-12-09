import Logo from "../common/Logo";
import { Burger, Divider, Tooltip } from "@mantine/core";
import { sideMenu } from "../../data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { logout } from "../../redux/slices/auth/thunks";
import { useDispatch } from "react-redux";

const SideBar = ({ toggle, opened, openedSidebar, close }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await dispatch(logout());
    if (res) {
      navigate("/");
    }
  };
  return (
    <div
      className={`bg-white p-3  border-r border-slate-100 h-screen flex flex-col justify-between absolute z-[9999] xl:z-20 xl:sticky xl:translate-x-0   ${
        !openedSidebar
          ? "translate-x-[-300px]  duration-700 "
          : "translate-x-0 duration-700"
      } ${
        opened
          ? "w-[120px] xl:w-[9vw] !transition-all !duration-700"
          : ":w-[300px] xl:w-[20vw]"
      }`}
    >
      <div>
        <div className="flex justify-end">
          <Burger
            opened={openedSidebar}
            onClick={close}
            className="block xl:hidden"
          />
        </div>

        <div className="flex justify-center">
          <Logo isRedirectable />
        </div>
        <div className="flex items-center justify-center my-2">
          <Divider w={"100%"} />
          <p className="flex items-center cursor-pointer" onClick={toggle}>
            {opened ? (
              <ChevronRight size={24} strokeWidth={1.25} />
            ) : (
              <ChevronLeft size={24} strokeWidth={1.25} />
            )}
            {opened ? "Maximize" : "Minimize"}
          </p>
        </div>
        <div>
          {sideMenu?.map((item, i) => (
            <div key={i}>
              {!opened ? (
                <Link
                  to={item?.link}
                  className={`text-md my-2 flex items-center gap-2 p-2 px-4 hover:bg-zinc-800 rounded-lg hover:text-white side-bar-Link ${
                    opened && "justify-center py-4"
                  } ${
                    location?.pathname === item?.link &&
                    "bg-zinc-800 text-white active-Link"
                  }`}
                >
                  {item?.icon}
                  {item?.name}
                </Link>
              ) : (
                <Tooltip label={item?.name} position="right" withArrow>
                  <Link
                    to={item?.link}
                    className={`my-2 flex items-center gap-2 p-2 px-2 xl:px-4 hover:bg-zinc-800 rounded-lg hover:text-white side-bar-Link ${
                      opened && "justify-center py-4"
                    } ${
                      location?.pathname === item?.link &&
                      "bg-zinc-800 text-white active-Link"
                    }`}
                  >
                    {item?.icon}
                  </Link>
                </Tooltip>
              )}
            </div>
          ))}
        </div>
      </div>
      {opened ? (
        <Tooltip label="Logout" position="right">
          <Link
            className={` my-2 flex items-center gap-2  p-2 px-4 hover:bg-zinc-800 rounded-lg hover:text-white side-bar-Link ${
              opened && "justify-center py-4"
            }`}
          >
            <svg
              className="me-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 21"
            >
              <path
                stroke="#2C2C2F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7 16.125c.074 1.852 1.617 3.424 3.684 3.374.481-.012 1.076-.18 2.265-.515 2.861-.807 5.345-2.164 5.941-5.203.11-.557.11-1.186.11-2.444V9.663c0-1.257 0-1.886-.11-2.445-.596-3.038-3.08-4.395-5.941-5.202-1.19-.335-1.784-.503-2.265-.515C8.617 1.451 7.074 3.023 7 4.875M1 10.5h11m-11 0C1 9.8 2.994 8.492 3.5 8M1 10.5c0 .7 1.994 2.008 2.5 2.5"
              ></path>
            </svg>{" "}
          </Link>
        </Tooltip>
      ) : (
        <button
          onClick={handleLogout}
          className={` my-2 flex items-center gap-2  p-2 px-4 hover:bg-zinc-800 rounded-lg hover:text-white side-bar-Link ${
            opened && "justify-center py-4"
          }`}
        >
          <svg
            className="me-2"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 21"
          >
            <path
              stroke="#2C2C2F"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7 16.125c.074 1.852 1.617 3.424 3.684 3.374.481-.012 1.076-.18 2.265-.515 2.861-.807 5.345-2.164 5.941-5.203.11-.557.11-1.186.11-2.444V9.663c0-1.257 0-1.886-.11-2.445-.596-3.038-3.08-4.395-5.941-5.202-1.19-.335-1.784-.503-2.265-.515C8.617 1.451 7.074 3.023 7 4.875M1 10.5h11m-11 0C1 9.8 2.994 8.492 3.5 8M1 10.5c0 .7 1.994 2.008 2.5 2.5"
            ></path>
          </svg>{" "}
          Logout
        </button>
      )}
    </div>
  );
};

export default SideBar;
