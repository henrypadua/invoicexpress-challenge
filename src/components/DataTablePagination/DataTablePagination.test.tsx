import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'

import { DataTablePagination } from '.'

const gotoPage = jest.fn()
const previousPage = jest.fn()
const nextPage = jest.fn()
let canPreviousPage = false
const canNextPage = true
const pageCount = 0
const pageIndex = 0
const pageOptions = [0]

describe('Component DataTablePagination', () => {
   it('DataTablePagination render', () => {
      render(
         <DataTablePagination
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
         />
      )

      expect(render)
   })

   it('should be able to navigate the next page', async () => {
      const { getByText } = render(
         <DataTablePagination
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
         />
      )

      const buttonNext = getByText('Next')

      await waitFor(() => {
         fireEvent.click(buttonNext)
      })

      expect(nextPage).toHaveBeenCalled()
   })

   it('should be able to navigate the previous page', async () => {
      canPreviousPage = true

      const { getByText } = render(
         <DataTablePagination
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
         />
      )

      const buttonPrev = getByText('Prev')

      await waitFor(() => {
         fireEvent.click(buttonPrev)
      })

      expect(previousPage).toHaveBeenCalled()
   })

   it('should be able to navigate the last page', async () => {
      canPreviousPage = true

      const { getByText } = render(
         <DataTablePagination
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
         />
      )

      const buttonLastPage = getByText('Last Page')

      await waitFor(() => {
         fireEvent.click(buttonLastPage)
      })

      expect(gotoPage).toHaveBeenCalledWith(pageCount - 1)
   })

   it('should be able to navigate the first page', async () => {
      canPreviousPage = true

      const { getByText } = render(
         <DataTablePagination
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
         />
      )

      const buttonFirstPage = getByText('First Page')

      await waitFor(() => {
         fireEvent.click(buttonFirstPage)
      })

      expect(gotoPage).toHaveBeenCalledWith(0)
   })

   it('should not be able to navigate the first page', async () => {
      canPreviousPage = false

      render(
         <DataTablePagination
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
         />
      )

      const buttonFirstPage = screen.queryByText('submit')

      expect(buttonFirstPage).not.toBeInTheDocument()
   })
})
