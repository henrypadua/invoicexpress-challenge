import { useMemo } from 'react'

import { Row } from 'react-table'

import * as S from './DataTableFilter.style'

type SelectColumnFilterProps = {
   column: {
      preFilteredRows: Row[]
      id: number
      filterValue: string
      setFilter(filerValue: string): void
   }
}

export function SelectColumnFilter({
   column: { filterValue, setFilter, preFilteredRows, id }
}: SelectColumnFilterProps) {
   const options = useMemo<string[]>(() => {
      const options = new Set<string>()
      preFilteredRows.forEach((row) => {
         options.add(row.values[id])
      })
      return [...options]
   }, [id, preFilteredRows])

   return (
      <S.Select
         value={filterValue || ''}
         onChange={(e) => {
            setFilter(e.target.value || '')
         }}
         data-testid="select"
      >
         <option value="" data-testid="select-option">
            All
         </option>
         {options.map((option, i) => (
            <option key={i} value={option}>
               {option}
            </option>
         ))}
      </S.Select>
   )
}
