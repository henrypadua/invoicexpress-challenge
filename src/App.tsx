import { useMemo } from 'react'

import { DataTable } from './components/DataTable'
import { documents } from './server/data'

export function App() {
   const columns = useMemo(
      () => [
         {
            Header: 'Status',
            accessor: 'status'
         },
         {
            Header: 'Type',
            accessor: 'type'
         },
         {
            Header: 'Number',
            accessor: 'number'
         },
         {
            Header: 'Client Name',
            accessor: 'client_name'
         },
         {
            Header: 'Date',
            accessor: 'date'
         },
         {
            Header: 'Total',
            accessor: 'total_w_vat'
         }
      ],
      []
   )

   const data = useMemo(() => documents, [])

   return (
      <div>
         <h1>Table</h1>
         <DataTable columns={columns} data={data} />
      </div>
   )
}
