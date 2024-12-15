import React, { useMemo } from 'react';
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { IPerson } from '../types/Types';
import { PersonalData } from '../data/PersonalData';

function TableBasic() {
  const columns = useMemo<MRT_ColumnDef<IPerson>[]>(() => [
    {
      accessorKey: 'name',
      header: 'NAME',
      muiTableHeadCellProps: { style: { color: 'purple' } },
      enableHiding: false,
    },
    {
      accessorKey: 'age',
      header: 'AGE',
      muiTableHeadCellProps: { style: { color: 'purple' } },
      enableHiding: false,
    },
    {
      accessorKey: 'country',
      header: 'COUNTRY',
      muiTableHeadCellProps: { style: { color: 'purple' } },
      enableHiding: false,
    },
  ], []);

  return (
    <MaterialReactTable
      columns={columns}
      data={PersonalData}
      enableRowSelection={true} 
      enableColumnOrdering={false} //change to true if we want to relocate columns
      enableGlobalFilter={true} //to be able to search(true)
      initialState={{
        pagination: {
          pageSize: 7,
          pageIndex: 0,
        },
      }}
    />
  );
}

export default TableBasic;
