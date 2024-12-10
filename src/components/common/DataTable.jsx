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
  const table = useMantineReactTable({
    columns,
    data,
    // enableRowSelection: selection,
    enableColumnActions: false,
    enableColumnFilters: false,
    // enablePagination: pagination,
    enableSorting: true,
    // manualSorting: true,
    state: { isLoading: isLoading, showSkeletons: isLoading, pagination, sort },
    // paginationDisplayMode: "pages",

    // onSortingChange: setSort,
    onSortingChange: handleSorting,
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
    renderToolbarInternalActions: () => <div></div>,
  });

  return <MantineReactTable table={table} />;
};

export default CommonDataTable;
