import pluralize from 'pluralize'
import { Row } from 'react-table'

import * as S from './DataTableFilter.style'

type DefaultColumnFilterProps = {
   column: {
      preFilteredRows: Row[]
      filterValue: string
      setFilter(filerValue: string): void
   }
}

export function DefaultColumnFilter({
   column: { filterValue, preFilteredRows, setFilter }
}: DefaultColumnFilterProps) {
   const count = preFilteredRows.length

   return (
      <S.Input
         value={filterValue || ''}
         onChange={(e) => {
            setFilter(e.target.value || '')
         }}
         placeholder={`Search in ${pluralize('record', count, true)}...`}
      />
   )
}
