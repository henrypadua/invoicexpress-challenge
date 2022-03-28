import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { DataTable } from '.'
/*In this case I am importing the data directly here because it is static data,
/*if it was via an API as in most cases I would mock up the API.*/
import { columnsDataTable } from '../../server/columns'
import { documents } from '../../server/data'

describe('Component DataTable', () => {
   it('should be able render data in the table', () => {
      render(<DataTable data={documents} columns={columnsDataTable} />)

      screen.getByRole('row', {
         name: 'Paid Invoice-Receipt 2019/15 Elon Tusk 2019-03-01 1223.42'
      })
   })
})
