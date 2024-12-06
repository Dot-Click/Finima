import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useState } from "react";

//nested data is ok, see accessorKeys in ColumnDef below
const CommonDataTable = ({
  data,
  columns,
  handleSorting,
  sort,
  totalCount,
  handlePagination,
  pagination,
  isLoading,
  // pagination = true,
  selection = true,
}) => {
  console.log(totalCount);
  const table = useMantineReactTable({
    columns,
    data,
    enableRowSelection: selection,
    enableColumnActions: false,
    enableColumnFilters: false,
    // enablePagination: pagination,
    enableSorting: true,
    manualSorting: true,
    // paginationDisplayMode: "pages",

    onSortingChange: (e) => {
      handleSorting(e);
    },
    manualPagination: true,
    rowCount: totalCount,
    paginationDisplayMode: "pages",
    mantinePaginationProps: {
      marginBotton: "40px",
    },
    positionToolbarAlertBanner: "bottom",
    mantinePaginationProps: {
      color: "dark",
      rowsPerPageOptions: ["5", "10"],
      withEdges: false,
    },
    onPaginationChange: handlePagination,

    mantineTopToolbarProps: {
      style: {
        display: "none",
      },
    },
    state: { sort, pagination },
    renderToolbarInternalActions: () => <div></div>,
  });

  return <MantineReactTable table={table} />;
};

export default CommonDataTable;
