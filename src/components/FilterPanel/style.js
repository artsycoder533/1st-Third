import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  width: 250px;
  border: 1px solid lightgrey;
  display: none;


  @media all and (min-width: 992px) {
    flex-direction: column; 
    display: flex;
  }
`;