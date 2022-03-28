import { useMemo } from 'react'

import { DataTable } from './components/DataTable'
import { columnsDataTable } from './server/columns'
import { documents } from './server/data'

export function App() {
   const columns = useMemo(() => columnsDataTable, [])

   const data = useMemo(() => documents, [])

   return (
      <div style={{ marginBottom: '2rem', marginTop: '5rem' }}>
         <DataTable columns={columns} data={data} />
      </div>
   )
}
