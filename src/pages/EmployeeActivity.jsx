import { Avatar, Button } from "@mantine/core";
import { useMemo } from "react";
import CommonDataTable from "../components/common/DataTable";
import { DateInput } from "@mantine/dates";
import DrawerComponent from "../components/common/Drawer";
import TodayActivity from "../components/modalContent/TodayActivity";
import { useDisclosure } from "@mantine/hooks";

const EmployeeActivity = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const data = [
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
    {
      date: "11/24/2024",
      checkIn: "08:30 AM",
      checkOut: "04:30 PM",
      break: "1 Hours",
      total: "7h 30m",
      action: "10",
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "date", //access nested data with dot notation
        header: "Date",
        size: 25,
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">{cell.getValue()}</div>
          );
        },
      },
      {
        accessorKey: "checkIn",
        header: "Check-In",
        size: 25,
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">{cell.getValue()}</div>
          );
        },
      },
      {
        accessorKey: "checkOut", //normal accessorKey
        header: "Check-Out",
        size: 25,
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">{cell.getValue()}</div>
          );
        },
      },
      {
        accessorKey: "break",
        header: "Break Time",
        size: "25",
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">{cell.getValue()}</div>
          );
        },
      },
      {
        accessorKey: "total",
        header: "Total Work Hours",
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">{cell.getValue()}</div>
          );
        },
      },
      {
        accessorKey: "action",
        header: "Action",
        size: 20,
        enableSorting: false,
        Cell: ({ cell }) => {
          return <Button onClick={open}>View Log</Button>;
        },
      },
    ],
    []
  );
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-2">
          <Avatar size={"xl"}>WJ</Avatar>
          <div>
            <p className="font-bold text-lg xl:text-xl text-zinc-800 font-outfit">
              Williamson Jack
            </p>
            <p className="text-slate-400 text-sm xl:text-lg font-outfit">
              williamsonjack@gmail.com
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-3 lg:mt-0">
          <div className="bg-[#FFFCF0] flex gap-2 p-1 items-center px-4 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 22 22"
            >
              <path
                stroke="#2C2C2F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.183"
                d="M20.5 8.674h-8.278V20.5H20.5zM15.77 11.04h1.182M14.587 13.405h3.548M14.587 15.769h3.548M14.587 18.135h1.183"
              ></path>
              <path
                stroke="#2C2C2F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.183"
                d="M12.222 16.952h-9.54c-.653 0-1.182-.53-1.182-1.182V5.048c0-.653.53-1.183 1.183-1.183h14.27c.652 0 1.182.53 1.182 1.183v3.626M6.721 3.865c.448 0 .858-.253 1.058-.654l.529-1.057c.2-.4.61-.654 1.058-.654h.903c.448 0 .857.253 1.058.654l.529 1.057c.2.401.61.654 1.057.654"
              ></path>
              <path
                stroke="#2C2C2F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.183"
                d="M12.222 11.04H5.048A3.55 3.55 0 0 1 1.5 7.491M5.048 3.865v8.357M14.587 3.865v4.81"
              ></path>
            </svg>
            <p className="font-outfit">Contract</p>
          </div>
          <DateInput
            w={"auto"}
            clearable
            leftSection={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 32 34"
              >
                <path
                  fill="#AC9475"
                  d="M9.2 2a1.2 1.2 0 0 0-2.4 0v2.528c-2.304.184-3.814.635-4.925 1.747C.763 7.385.312 8.897.127 11.2h31.747c-.186-2.304-.637-3.815-1.749-4.925-1.11-1.112-2.622-1.563-4.925-1.749V2a1.2 1.2 0 1 0-2.4 0v2.42c-1.064-.02-2.257-.02-3.6-.02h-6.4c-1.342 0-2.536 0-3.6.02z"
                ></path>
                <path
                  fill="#AC9475"
                  fillRule="evenodd"
                  d="M0 17.2c0-1.343 0-2.536.02-3.6h31.96c.02 1.064.02 2.257.02 3.6v3.2c0 6.033 0 9.05-1.875 10.924S25.234 33.2 19.2 33.2h-6.4c-6.034 0-9.051 0-10.925-1.876C.002 29.45 0 26.434 0 20.4zm24 3.2a1.6 1.6 0 1 0 0-3.201 1.6 1.6 0 0 0 0 3.2m0 6.4a1.6 1.6 0 1 0 0-3.201 1.6 1.6 0 0 0 0 3.2m-6.4-8a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0m0 6.4a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0M8 20.4a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m0 6.4a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
            radius={"xl"}
            size="md"
            placeholder="Filter"
          />
        </div>
      </div>

      <div className="mt-4">
        <CommonDataTable data={data} columns={columns} />
      </div>
      <DrawerComponent
        opened={opened}
        close={close}
        size={"xl"}
        position={"right"}
        content={<TodayActivity close={close} />}
      />
    </div>
  );
};

export default EmployeeActivity;
