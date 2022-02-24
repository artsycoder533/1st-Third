import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export const Center = styled.div`
    max-width: 1400px;
    width: 90vw;
    margin: 0 auto;
`;