import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import React from "react";

const DataTable = ({ columns, data }) => {
  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });
  return (
    <div>
      <MantineReactTable table={table} />
    </div>
  );
};

export default DataTable;
