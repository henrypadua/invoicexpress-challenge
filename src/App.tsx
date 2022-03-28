import { useEffect, useMemo, useState } from 'react'

import { DataTable } from './components/DataTable'
import { columnsDataTable } from './server/columns'
import api from './services/api'

type Data = {
   status: string
   type: string
   number: string
   client_name: string
   date: string
   total_w_vat: number
}

export function App() {
   const [data, setData] = useState<Data[]>([])
   useEffect(() => {
      api.get('./data.json').then((res) => {
         setData(res.data.documents)
      })
   }, [])

   const columns = useMemo(() => columnsDataTable, [])

   const documents = useMemo(() => data, [data])

   return (
      <div style={{ marginBottom: '2rem', marginTop: '5rem' }}>
         <DataTable columns={columns} data={documents} />
      </div>
   )
}
