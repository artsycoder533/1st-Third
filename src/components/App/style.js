import styled, {createGlobalStyle, keyframes} from "styled-components";

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
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
        
    }

    main {
        min-height: 100vh;
        //border: 2px solid red;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h1, h2, h3 {
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