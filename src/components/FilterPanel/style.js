import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  width: 100%;
  border: 1px solid lightgrey;
  display: ${({ showFilters }) => (showFilters ? "none" : "block")};
  position: absolute;
  background: white;

  @media all and (min-width: 992px) {
    flex-direction: column;
    display: flex;
    width: 250px;
    position: initial;
  }
`;