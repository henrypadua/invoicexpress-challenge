import { Column, useTable, usePagination } from 'react-table'

import { DataTablePagination } from '../DataTablePagination'
import * as S from './DataTable.style'

type Data = {
   status: string
   type: string
   number: string
   client_name: string
   date: string
   total_w_vat: number
}

type DataTableProps = {
   columns: readonly Column<any>[]
   data: readonly Data[]
}

export function DataTable({ columns, data }: DataTableProps) {
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      state: { pageIndex }
   } = useTable(
      {
         columns,
         data,
         initialState: { pageIndex: 0, pageSize: 7 }
      },
      usePagination
   )

   return (
      <S.Container>
         <table {...getTableProps()}>
            <thead>
               {headerGroups.map((headerGroup, index) => (
                  <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                     {headerGroup.headers.map((column, index) => (
                        <th {...column.getHeaderProps()} key={index}>
                           {column.render('Header')}
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>

            <tbody {...getTableBodyProps()}>
               {page.map((row, index) => {
                  prepareRow(row)
                  return (
                     <tr {...row.getRowProps()} key={index}>
                        {row.cells.map((cell, index) => {
                           return (
                              <td {...cell.getCellProps()} key={index}>
                                 {cell.render('Cell')}
                              </td>
                           )
                        })}
                     </tr>
                  )
               })}
            </tbody>
         </table>

         <DataTablePagination
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
         />
      </S.Container>
   )
}
