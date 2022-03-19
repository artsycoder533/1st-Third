import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

export const StyledArticle = styled.article`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 200px;
    border-bottom: 1px solid lightgrey;
    padding: 1rem;
    
    gap: 1rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledDetails = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: block;
  }
`;

export const RemoveButton = styled(FiTrash2)`
  align-self: center;
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
`;

export const CountButton = styled.button`
    font-size: 1.5rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    border: none;
    background: #800020;
    color: white;
    cursor: pointer;
`;



