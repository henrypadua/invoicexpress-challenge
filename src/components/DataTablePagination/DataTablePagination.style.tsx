import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   padding: 1.5rem;
   background-color: #f2f2f2;

   button {
      cursor: pointer;
      padding: 1rem;
      color: white;
      font-weight: bold;
      margin: 0.5rem;
      background-color: #2ec497;
      border: none;
      border-radius: 4px;

      transition: all 0.2s ease-in-out;

      :hover {
         filter: brightness(0.8);
      }
   }

   span {
      font-size: 1.7rem;
      text-align: center;
   }
`
