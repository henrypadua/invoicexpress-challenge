import styled from 'styled-components'

export const Container = styled.div`
   margin: 0 auto;
   border: 1px solid #2ec497;
   border-radius: 8px;
   padding: 2rem;
   width: 50vw;

   table {
      border-collapse: collapse;
      width: 100%;

      thead {
         tr {
            height: 50px;
            background-color: #2ec497;

            color: white;
            text-align: center;
         }
      }
      tbody {
         tr {
            &:nth-child(even) {
               background-color: #f2f2f2;
            }

            &:nth-child(odd) {
               background-color: white;
            }

            th,
            td {
               height: 50px;
               text-align: center;
               padding: 1.5rem;
            }
         }
      }
   }
`
