import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { DataTable } from '.'
/*In this case I am importing the data directly here because it is static data,
/*if it was via an API as in most cases I would mock up the API.*/
import { columnsDataTable } from '../../server/columns'

const data = [
   {
      status: 'Final',
      type: 'Invoice',
      number: '2019/11',
      client_name: 'Elon Tusk',
      date: '2019-02-26',
      total_w_vat: 123.42
   },
   {
      status: 'Draft',
      type: 'Invoice-Receipt',
      number: 'Draft',
      client_name: 'Rick Sanchez',
      date: '2019-02-01',
      total_w_vat: 13.11
   }
]

describe('Component DataTable', () => {
   it('should be able render data in the table', () => {
      render(<DataTable data={data} columns={columnsDataTable} />)

      screen.getByRole('row', {
         name: 'Final Invoice 2019/11 Elon Tusk 2019-02-26 123.42'
      })
   })
})
