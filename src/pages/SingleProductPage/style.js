import styled from "styled-components";

export const Container = styled.section`
    margin-top: 4rem;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  gap: 2rem;
  flex-grow: 1;
  height: 100%;
  padding: 4rem 0;
`;

export const Img = styled.img`
    max-width: 100%;
    width: 500px;
`;

export const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
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