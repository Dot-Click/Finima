import { Button, Input, Tabs, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Search, UserRoundPlus } from "lucide-react";
import React, { useMemo } from "react";
import DrawerComponent from "../components/common/Drawer";
import DataTable from "../components/common/DataTable";

const EmployeeManagement = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const data = [
    {
      name: {
        firstName: "Zachary",
        lastName: "Davis",
      },
      address: "261 Battle Ford",
      city: "Columbus",
      state: "Ohio",
    },
    {
      name: {
        firstName: "Robert",
        lastName: "Smith",
      },
      address: "566 Brakus Inlet",
      city: "Westerville",
      state: "West Virginia",
    },
    {
      name: {
        firstName: "Kevin",
        lastName: "Yan",
      },
      address: "7777 Kuhic Knoll",
      city: "South Linda",
      state: "West Virginia",
    },
    {
      name: {
        firstName: "John",
        lastName: "Upton",
      },
      address: "722 Emie Stream",
      city: "Huntington",
      state: "Washington",
    },
    {
      name: {
        firstName: "Nathan",
        lastName: "Harris",
      },
      address: "1 Kuhic Knoll",
      city: "Ohiowa",
      state: "Nebraska",
    },
  ];

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
      },
    ],
    []
  );

  return (
    <div>
      <Tabs
        color="dark"
        variant="pills"
        defaultValue="all"
        className="font-outfit"
      >
        <div className="flex justify-between items-center">
          <Tabs.List>
            <Tabs.Tab value="all">All Employees</Tabs.Tab>
            <Tabs.Tab value="contact">Contact Base</Tabs.Tab>
            <Tabs.Tab value="hourly">Hourly</Tabs.Tab>
            <Tabs.Tab value="full">Full Time Employee</Tabs.Tab>
          </Tabs.List>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-white rounded-full p-1">
              <Input
                placeholder="Search..."
                radius={"xl"}
                variant="unstyled"
                className="px-2"
              />
              <div className="bg-zinc-200 p-2 rounded-full">
                <Search size={20} strokeWidth={1.25} />
              </div>
            </div>
            <Button size="md" onClick={open}>
              <UserRoundPlus className="me-2" size={28} strokeWidth={1.25} />{" "}
              Add New Employee
            </Button>
          </div>
        </div>

        <Tabs.Panel value="all">
          <DataTable columns={columns} data={data} />
        </Tabs.Panel>
        <Tabs.Panel value="contact">contact tab content</Tabs.Panel>
        <Tabs.Panel value="hourly">hourly tab content</Tabs.Panel>
        <Tabs.Panel value="full">full tab content</Tabs.Panel>
      </Tabs>
      <DrawerComponent opened={opened} close={close} />
    </div>
  );
};

export default EmployeeManagement;
