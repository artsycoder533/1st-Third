import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: calc(100vh - 60px - 558px);

    img {
        max-width: 100%;
    }
`;