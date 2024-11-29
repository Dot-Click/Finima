import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

//nested data is ok, see accessorKeys in ColumnDef below
const CommonDataTable = ({
  data,
  columns,
  pagination = true,
  selection = true,
}) => {
  const table = useMantineReactTable({
    columns,
    data,
    enableRowSelection: selection,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: pagination,
    enableSorting: true,

    paginationDisplayMode: "pages",
    mantinePaginationProps: {
      marginBotton: "40px",
    },
    positionToolbarAlertBanner: "bottom",
    mantinePaginationProps: {
      color: "dark",
      // total: totalMembers,
      // page: pagination.pageIndex,  // Current page index
      // onChange: (page) => {
      //     console.log('page ', page)
      //     setPagination((prev) => ({ ...prev, pageIndex: (page - 1) }))
      // },
    },

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
