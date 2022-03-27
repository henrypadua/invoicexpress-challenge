import { useMemo } from 'react'

import { DataTable } from './components/DataTable'
import { SelectColumnFilter } from './components/DataTableFilter/SelectColumnFilter'
import { documents } from './server/data'

export function App() {
   const columns = useMemo(
      () => [
         {
            Header: 'Status',
            accessor: 'status',
            Filter: SelectColumnFilter,
            filter: 'exactText'
         },
         {
            Header: 'Type',
            accessor: 'type',
            Filter: SelectColumnFilter,
            filter: 'exactText'
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
      <div style={{ marginBottom: '2rem' }}>
         <h1>Table</h1>
         <DataTable columns={columns} data={data} />
      </div>
   )
}
