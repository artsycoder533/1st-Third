import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-rows: 200px;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  gap: 1rem;

  @media all and (min-width: 600px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  @media all and (min-width: 992px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 200px;
    border-bottom: 1px solid lightgrey;
    padding: 1rem;
    gap: 1rem;
  }
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
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 1000px) {
    grid-template-columns: 2fr 1fr 0.5fr;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    text-align: center;
    font-weight: bold;
  }
`;

export const RemoveButton = styled(FiTrash2)`
  align-self: flex-end;
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
  text-align: center;

  @media all and (min-width: 1000px) {
    align-self: center;
  }
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



