import { SelectColumnFilter } from '../components/DataTableFilter/SelectColumnFilter'

export const columnsDataTable = [
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
]
