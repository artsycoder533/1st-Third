import styled from "styled-components";
import { SecondaryButton } from "../../components/Button/style";

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
    gap: 4rem;
    flex-basis: 50%;
  }
`;

export const Img = styled.img`
    max-width: 100%;
    width: 400px;
`;

export const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const ProductTitle = styled.h2`
    
`;

export const StyledDetails = styled.details`
    max-width: 400px;
    width: 100%;
    cursor: pointer;
`;

export const StyledParagraph = styled.p`
  padding: 1rem 0;
`;

export const BackButton = styled(SecondaryButton)`
  background: white;
  color: #800020;

  &:hover {
    border: 3px solid white;
  }
`;