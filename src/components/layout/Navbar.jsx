import Notifiaction from "../common/Notifiaction";
import ProfileMenu from "../common/ProfileMenu";
import { Burger, Divider, Tooltip } from "@mantine/core";
import { useLocation } from "react-router-dom";

const Navbar = ({ openedSidebar, open }) => {
  const location = useLocation();
  let routeName = "";
  if (location.pathname?.split("/")[3]?.split("-")?.length === 2) {
    routeName = location.pathname?.split("/")[3]?.split("-");
  } else if (location.pathname?.split("/")[2]) {
    routeName = location.pathname?.split("/")[2]?.split("-");
  } else {
    routeName = location.pathname?.split("/")[1]?.split("-");
  }
  return (
    <div className="bg-white flex justify-between items-center py-1 2xl:py-3 px-6  border-b border-slate-100 h-[14vh] xl:h-[10vh]">
      <div className="flex items-center gap-2">
        <Burger
          opened={openedSidebar}
          onClick={open}
          className="block xl:hidden"
        />
        <Tooltip
          label={
            routeName?.length > 1
              ? `${routeName[0]} ${routeName[1]}`
              : `${routeName[0]}`
          }
        >
          <p className="text-2xl font-semibold font-outfit text-zinc-800 line-clamp-1 capitalize">
            {routeName?.length > 1
              ? `${routeName[0]} ${routeName[1]}`
              : `${routeName[0]}`}
          </p>
        </Tooltip>
      </div>
      <div className="flex gap-4 items-center">
        <Notifiaction />

        <Divider orientation="vertical" className="my-2" />

        <ProfileMenu />
      </div>
    </div>
  );
};

export default Navbar;
