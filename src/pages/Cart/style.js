import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    h2 {
        margin-top: 2rem;
    }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  background: white;
  border: 2px solid #800020;
  color: #800020;
  margin-right: auto;
  margin-top: 1rem;

  &:hover {
    background: #800020;
    color: white;
  }
`;

