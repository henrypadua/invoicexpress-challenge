import pluralize from 'pluralize'
import { Row } from 'react-table'

import * as S from './DataTablePagination.style'

type DataTablePaginationProps = {
   gotoPage: (page: number) => void
   previousPage: () => void
   nextPage: () => void
   canPreviousPage: boolean
   canNextPage: boolean
   pageCount: number
   pageIndex: number
   pageOptions: number[]
   page: Row<object>[]
   preFilteredRows: Row<object>[]
}

export function DataTablePagination({
   gotoPage,
   previousPage,
   nextPage,
   canPreviousPage,
   canNextPage,
   pageCount,
   pageIndex,
   pageOptions,
   page,
   preFilteredRows
}: DataTablePaginationProps) {
   return (
      <S.Container>
         <div>
            {canPreviousPage && (
               <>
                  <button onClick={() => gotoPage(0)}>{'<<'}</button>
                  <button onClick={() => previousPage()}>{'<'}</button>
               </>
            )}
         </div>

         <span>
            Page{' '}
            <strong>
               {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
            <div>
               Showing {pluralize('record', page.length, true)} of{' '}
               {pluralize('record', preFilteredRows.length, true)}
            </div>
         </span>

         <div>
            {canNextPage && (
               <>
                  <button onClick={() => nextPage()}>{'>'}</button>
                  <button onClick={() => gotoPage(pageCount - 1)}>
                     {'>>'}
                  </button>
               </>
            )}
         </div>
      </S.Container>
   )
}
