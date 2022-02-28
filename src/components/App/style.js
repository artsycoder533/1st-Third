import styled, {createGlobalStyle, keyframes} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Playfair Display', serif;
    }
`;

export const Center = styled.div`
    max-width: 1400px;
    width: 90vw;
    margin: 0 auto;
`;

export const blink = keyframes`
   from {
        transform: scale(1.2);
    }
    to {
        transform: scale(0.75);
    }
`;