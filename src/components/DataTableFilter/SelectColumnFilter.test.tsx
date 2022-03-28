import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Row } from 'react-table'

import { SelectColumnFilter } from './SelectColumnFilter'

const mockedColumn = {
   preFilteredRows: [] as Row[],
   filterValue: '',
   id: 1,
   setFilter: jest.fn()
}

describe('Component SelectColumnFilter', () => {
   it('should be able render select and option filter', async () => {
      const { getByTestId } = render(
         <SelectColumnFilter column={mockedColumn} />
      )

      const select = getByTestId('select')
      const options = getByTestId('select-option')

      expect(select).toBeInTheDocument()
      expect(options).toBeInTheDocument()
   })

   it('should be able to filter by text', async () => {
      const { getByTestId } = render(
         <SelectColumnFilter column={mockedColumn} />
      )

      const select = getByTestId('select')

      await waitFor(() => {
         fireEvent.change(select, { target: { value: '' } })
      })

      expect(mockedColumn.setFilter).toHaveBeenCalledWith('')
   })
})
