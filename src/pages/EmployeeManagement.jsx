import {
  Avatar,
  Button,
  Checkbox,
  Input,
  Menu,
  Tabs,
  Divider,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useMemo, useState } from "react";
import DrawerComponent from "../components/common/Drawer";
import CommonDataTable from "../components/common/DataTable";
import { Dot, EllipsisVertical } from "lucide-react";

const EmployeeManagement = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeTab, setActivetab] = useState("all");

  const data = [
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "working",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "on break",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "checked out",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "working",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "working",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "on break",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "checked out",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "working",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "working",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "on break",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "checked out",
      action: "10",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      role: "Plumber",
      hourly: "10",
      status: "working",
      action: "10",
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Employee Name",
        Cell: ({ cell }) => {
          return (
            <div className="flex gap-2 items-center">
              <Avatar>WS</Avatar>{" "}
              <p className="text-zinc-700 font-outfit">{cell.getValue()}</p>
            </div>
          );
        },
      },
      {
        accessorKey: "email",
        header: "Email",
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">{cell.getValue()}</div>
          );
        },
      },
      {
        accessorKey: "role", //normal accessorKey
        header: "Role",
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">{cell.getValue()}</div>
          );
        },
      },
      {
        accessorKey: "hourly",
        header: "Hourly Rate",
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">${cell.getValue()}</div>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">
              <p
                className={`flex gap-2 items-center p-1 rounded-lg ${
                  cell.getValue() === "working" &&
                  "bg-[#ECFDEC] text-[#16A40F] capitalize font-semibold border border-[#16A40F]"
                } ${
                  cell.getValue() === "on break" &&
                  "bg-[#ECECFD] text-[#5151F0] capitalize font-semibold border border-[#5151F0]"
                }${
                  cell.getValue() === "checked out" &&
                  "bg-[#f5c5c5] text-[#CE1010] capitalize font-semibold border border-[#CE1010]"
                }`}
              >
                <Dot size={30} strokeWidth={3} />
                {cell.getValue()}
              </p>
            </div>
          );
        },
      },
      {
        accessorKey: "action",
        header: "Action",
        Cell: ({ cell }) => {
          return (
            <Menu shadow="lg" width={160} position="bottom-start">
              <Menu.Target>
                <EllipsisVertical size={24} strokeWidth={2} />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item className="!text-zinc-700 !font-semibold !text-center">
                  Edit Employee
                </Menu.Item>
                <Divider />
                <Menu.Item className="!text-blue-800 !font-semibold !text-center">
                  View Detail
                </Menu.Item>
                <Divider />
                <Menu.Item className="!text-red-600 !font-semibold !text-center">
                  Deactivate
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          );
        },
      },
    ],
    []
  );
  return (
    <div>
      <Tabs
        color="dark"
        radius={"md"}
        variant="pills"
        defaultValue="all"
        className="font-outfit text-slate-600"
        onChange={(value) => setActivetab(value)}
      >
        <div className="flex justify-between items-center">
          <Tabs.List>
            <Tabs.Tab value="all">All Employees</Tabs.Tab>
            <Tabs.Tab value="contact">Contact Base</Tabs.Tab>
            <Tabs.Tab value="hourly">Hourly</Tabs.Tab>
            <Tabs.Tab value="full">Full Time Employee</Tabs.Tab>
          </Tabs.List>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-white rounded-full p-1 border border-slate-200">
              <Input
                placeholder="Search..."
                radius={"xl"}
                variant="unstyled"
                className="px-2 font-outfit"
              />
              <div className="bg-zinc-200 p-2 rounded-full cursor-pointer border border-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="#7B7B8B"
                    d="M15.009 13.208h-.949l-.336-.325a7.77 7.77 0 0 0 1.885-5.079 7.804 7.804 0 1 0-7.805 7.805 7.77 7.77 0 0 0 5.08-1.885l.323.336v.949L19.212 21 21 19.211zm-7.205 0a5.396 5.396 0 0 1-5.403-5.404 5.396 5.396 0 0 1 5.403-5.403 5.396 5.396 0 0 1 5.403 5.403 5.396 5.396 0 0 1-5.403 5.403"
                  ></path>
                </svg>
              </div>
            </div>
            <Button size="md" onClick={open} className="font-semibold">
              <svg
                className="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 25 24"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M16.678 24h-2.276v-4.125l2.366-3.872c.157.293.247.624.247.967v6.693c0 .18-.157.337-.337.337m-3.624-3.248a.63.63 0 0 1-.832.219.55.55 0 0 1-.275-.354.58.58 0 0 1 .056-.438l3.304-5.39c.393.147.736.36 1.011.624-1.1 1.793-2.174 3.563-3.264 5.339m.635.292V24H3.647v-2.956l.04.067c.18.298.454.495.792.59.118.023.219.04.337.04.236 0 .455-.056.595-.158.298-.174.512-.455.613-.792a1.17 1.17 0 0 0-.118-.966l-.804-1.31h7.103l-.792 1.287a1.28 1.28 0 0 0-.14.972c.1.337.314.613.612.793.197.118.416.174.635.174.455 0 .893-.236 1.13-.63zm-12.683-5.62a3 3 0 0 1 1.006-.629L5.31 20.18a.55.55 0 0 1 .062.438.608.608 0 0 1-.736.416.56.56 0 0 1-.354-.281c-1.09-1.776-2.175-3.535-3.276-5.327m1.927 4.462V24H.674a.353.353 0 0 1-.354-.354V16.97c0-.337.085-.657.242-.95zm-.219-5.276q.255-.034.517-.034H5.39c.079 0 .157.04.242.079 1.64 1.467 4.433 1.467 6.074 0 .062-.062.14-.079.242-.079h2.157q.255 0 .5.034l-1.96 3.192H4.67zM8.676 13.762c-2.512 0-5.046-1.68-5.046-4.912V7.16h10.075v1.714c0 3.343-2.613 4.889-5.029 4.889M7.131 9.345H5.883a.35.35 0 0 1-.354-.337c0-.174.158-.354.354-.354h1.248c.202 0 .36.157.36.354 0 .202-.158.337-.36.337m4.32 0h-1.247c-.202 0-.36-.157-.36-.337 0-.174.158-.354.36-.354h1.248c.197 0 .354.157.354.354 0 .202-.18.337-.354.337M3.889 3.49C4.383 1.19 6.535 0 8.66 0c2.119 0 4.27 1.191 4.765 3.49zM14.042 6.496H3.31a1.17 1.17 0 0 1-1.168-1.169c0-.635.533-1.169 1.168-1.169h10.733c.635 0 1.17.512 1.17 1.169-.018.674-.535 1.169-1.17 1.169M20.162 24a2.08 2.08 0 0 1-2.08-2.079v-1.523h4.182v1.506c0 1.17-.95 2.096-2.102 2.096m-2.08-4.315V7.625a4.52 4.52 0 0 1-2.416-4c0-1.388.619-2.658 1.686-3.507a.33.33 0 0 1 .354-.039c.118.056.203.18.203.315V3.68h4.512V.377c0-.14.079-.259.197-.32a.38.38 0 0 1 .376.039 4.47 4.47 0 0 1 1.686 3.506c0 1.686-.95 3.231-2.416 4.001v12.082z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M6.676 16.06h-.04c-.196-.023-.314-.197-.297-.4l.36-2.551c.016-.197.196-.32.392-.298.203.017.32.197.298.394l-.354 2.556c-.039.158-.18.298-.36.298M10.66 16.06c-.18 0-.32-.117-.337-.297l-.36-2.534a.365.365 0 0 1 .298-.4.36.36 0 0 1 .4.298l.353 2.535c.023.202-.095.36-.297.399z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Add New Employee
            </Button>
          </div>
        </div>

        <Tabs.Panel value={activeTab}>
          <div className="mt-4">
            <CommonDataTable data={data} columns={columns} />
          </div>
        </Tabs.Panel>
        {/* <Tabs.Panel value="contact">contact tab content</Tabs.Panel>
        <Tabs.Panel value="hourly">hourly tab content</Tabs.Panel>
        <Tabs.Panel value="full">full tab content</Tabs.Panel> */}
      </Tabs>
      <DrawerComponent opened={opened} close={close} />
    </div>
  );
};

export default EmployeeManagement;
