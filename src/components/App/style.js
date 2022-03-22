import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }


    body {
        /* font-family: 'Playfair Display', serif; */
        //min-height: 100vh;
        font-family: 'Roboto', sans-serif;
        
    }

    main {
        min-height: calc(100vh - 60px - 270px);
        display: flex;
        flex-direction: column;
        margin-top: 67px;
        
    }

    h1, h2, h3 {
        font-family: 'Playfair Display', serif;
    }

    a, 
    button {
        font-family: 'Roboto', sans-serif;
    }
`;

export const Center = styled.div`
  max-width: 1400px;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const blink = keyframes`
   from {
        transform: scale(1.2);
    }
    to {
        transform: scale(0.75);
    }
`;

export const StyledHeading = styled.h2`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #800020;
  color: white;
  font-size: 2rem;
`;
