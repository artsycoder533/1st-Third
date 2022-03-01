import styled from "styled-components";

export const Container = styled.section`
    margin-top: 8rem;
    display: flex;
    min-height: 100vh;
    justify-content: center;
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
`;

export const Img = styled.img`
    max-width: 100%;
    width: 500px;
`;

export const ProductWrapper = styled.article`
`;