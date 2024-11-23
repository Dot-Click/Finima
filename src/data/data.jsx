import {
  BriefcaseBusiness,
  CalendarClock,
  CircleDollarSign,
  LayoutDashboard,
  Settings,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";

// Any static data you're going to use will be coded here...
export const sideMenu = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard size={28} strokeWidth={1.25} />,
  },
  {
    id: 2,
    name: "Today Activity",
    link: "/today-activity",
    icon: <CalendarClock size={28} strokeWidth={1.25} />,
  },
  {
    id: 3,
    name: "Employee Management",
    link: "/employee-management",
    icon: <UsersRound size={28} strokeWidth={1.25} />,
  },

  {
    id: 4,
    name: "Payroll",
    link: "/payroll",
    icon: <CircleDollarSign size={28} strokeWidth={1.25} />,
  },
  {
    id: 5,
    name: "Settings",
    link: "/settings",
    icon: <Settings size={28} strokeWidth={1.25} />,
  },
];
