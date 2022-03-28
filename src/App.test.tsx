import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { App } from './App'

describe('App test', () => {
   it('should be able render component DataTable', () => {
      render(<App />)

      screen.getByRole('row', {
         name: 'Paid Invoice-Receipt 2019/15 Elon Tusk 2019-03-01 1223.42'
      })
   })
})
