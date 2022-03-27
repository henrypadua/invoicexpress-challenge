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
}

export function DataTablePagination({
   gotoPage,
   previousPage,
   nextPage,
   canPreviousPage,
   canNextPage,
   pageCount,
   pageIndex,
   pageOptions
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
            </strong>
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
