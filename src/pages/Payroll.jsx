import { Button } from "@mantine/core";
import React, { useMemo } from "react";
import CommonDataTable from "../components/common/DataTable";
import { DateInput } from "@mantine/dates";

const Payroll = () => {
  const data = [
    {
      week: "Week 1",
      duration: "11/04/2024 - 11/09/2024",
      action: "10",
    },
    {
      week: "Week 2",
      duration: "11/04/2024 - 11/09/2024",
      action: "10",
    },
    {
      week: "Week 3",
      duration: "11/04/2024 - 11/09/2024",
      action: "10",
    },
    {
      week: "Week 4",
      duration: "11/04/2024 - 11/09/2024",
      action: "10",
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "week", //access nested data with dot notation
        header: "Weeks",
        size: 300,
        Cell: ({ cell }) => {
          return (
            <div className="text-zinc-700 font-outfit">{cell.getValue()}</div>
          );
        },
      },
      {
        accessorKey: "duration",
        header: "Duration",
        size: 300,
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
          return (
            <div className="flex items-center gap-2">
              <Button size="md">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 23 24"
                  className="me-2"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.531"
                    d="M1.375 17.063v1.265a3.797 3.797 0 0 0 3.797 3.797h12.656a3.797 3.797 0 0 0 3.797-3.797v-1.265M16.563 12 11.5 17.063m0 0L6.438 12m5.062 5.063V1.874"
                  ></path>
                </svg>{" "}
                Download CSV
              </Button>
              <Button color="#998366" size="md">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 23 24"
                  className="me-2"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.531"
                    d="M1.375 17.063v1.265a3.797 3.797 0 0 0 3.797 3.797h12.656a3.797 3.797 0 0 0 3.797-3.797v-1.265M16.563 12 11.5 17.063m0 0L6.438 12m5.062 5.063V1.874"
                  ></path>
                </svg>
                Download PDF
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );
  return (
    <div>
      <div className="flex justify-end items-center">
        <DateInput
          w={220}
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

      <div className="mt-4">
        <CommonDataTable data={data} columns={columns} pagination={false} />
      </div>
    </div>
  );
};

export default Payroll;
