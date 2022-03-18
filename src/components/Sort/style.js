import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-end;
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