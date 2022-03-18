import styled from "styled-components";
import { SecondaryButton } from "../Button/style";

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 0;


`;

export const SortForm = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;

  select {
    padding: 0.5rem;
    cursor: pointer;
    background: #f5f5f5;
    font-family: 'Roboto'
  }

  select:focus,
  select:hover {
    border: 1px solid #800020;;
  }
`;

export const FilterButton = styled(SecondaryButton)`
  @media all and (min-width: 992px){
    visibility: hidden;
  }
`;