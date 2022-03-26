import { Column, useTable } from 'react-table'

import * as S from './DataTable.style'

type DataTableProps = {
   columns: readonly Column<any>[]
   data: readonly any[]
}

export function DataTable({ columns, data }: DataTableProps) {
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
         columns,
         data
      })

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
               {rows.map((row, index) => {
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
      </S.Container>
   )
}
