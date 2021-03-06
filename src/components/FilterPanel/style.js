import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  width: 100%;
  border: 1px solid lightgrey;
  transform: ${({ showFilters }) => (showFilters ? "scale(1)" : "scale(0)")};
  transition: all 0.4s ease-in-out;
  position: absolute;
  background: white;
  display: block;

  @media all and (min-width: 992px) {
    flex-direction: column;
    display: flex;
    width: 250px;
    position: initial;
    transform: scale(1);
  }
`;