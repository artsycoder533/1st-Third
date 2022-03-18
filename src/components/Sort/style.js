import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const SortForm = styled.form`
   display: flex;
   gap: 1rem;
   align-items: center;

   select {
       padding: 0.5rem;

       option {
           padding: 0.5rem;
       }
   }
`;