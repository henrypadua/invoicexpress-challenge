import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor } from '@testing-library/react'

import { App } from './App'

jest.mock('axios', () => ({ ...jest.requireActual('axios'), get: jest.fn() }))

describe('App test', () => {
   it('should be able render component DataTable', async () => {
      await waitFor(() => {
         render(<App />)
      })

      await waitFor(() => {
         screen.getByRole('row', {
            name: 'Final Invoice 2019/11 Elon Tusk 2019-02-26 123.42'
         })
      })
   })
})
