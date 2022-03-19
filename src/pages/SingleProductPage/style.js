import styled from "styled-components";
import { PrimaryButton, SecondaryButton, SpecialButton } from "../../components/Button/style";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 3rem;
  height: 100%;
  padding: 4rem 0;

  @media all and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-basis: 50%;
  }

  details {
    max-width: 500px;
    width: 90vw;
    cursor: pointer;
    padding: 1rem 0;
    transition: all .5s ease-in-out;
    max-height: 50px;
  }

  details[open] {
    max-height: 400px;
    transition: all .5s ease-in-out;
  }
`;

export const Img = styled.img`
    max-width: 100%;
    width: 400px;
`;

export const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }

  @media all and (min-width: 992px){

  }
`;

export const ProductTitle = styled.h2`
    font-family: "Roboto";
`;

export const StyledDetails = styled.details`
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  transition: all 3s ease-in-out;
  max-height: 50px;
 
`;

export const StyledParagraph = styled.p`
  padding: 1rem 0;
  line-height: 1.5;
  width: 100%;
`;

export const BackButton = styled(SecondaryButton)`
  background: white;
  color: #800020;

  &:hover {
    border: 3px solid white;
  }
`;

export const StyledSpan = styled.span`
  padding: 0 0.5rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;
  color: #800020;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    background: orange;
    color: white;
  }
`;

export const AddToCartButton = styled(PrimaryButton)`
  align-self: flex-start;
`;

export const UpdateQuantityButton = styled(SpecialButton)`
  align-self: flex-start;
`;