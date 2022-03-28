import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Row } from 'react-table'

import { DefaultColumnFilter } from './DefaultColumnFilter'

const mockedColumn = {
   preFilteredRows: {} as Row[],
   filterValue: '',
   setFilter: jest.fn()
}

describe('Component DefaultColumnFilter', () => {
   it('should be able render input filter', async () => {
      const { getByPlaceholderText } = render(
         <DefaultColumnFilter column={mockedColumn} />
      )
      const inputDefault = getByPlaceholderText(
         'Search in undefined records...'
      )

      expect(inputDefault).toBeInTheDocument()
   })

   it('should be able to filter by text', async () => {
      const { getByPlaceholderText } = render(
         <DefaultColumnFilter column={mockedColumn} />
      )
      const inputDefault = getByPlaceholderText(
         'Search in undefined records...'
      )
      await waitFor(() => {
         fireEvent.change(inputDefault, { target: { value: 'Elon Tusk' } })
      })

      expect(mockedColumn.setFilter).toHaveBeenCalledWith('Elon Tusk')
   })
})
