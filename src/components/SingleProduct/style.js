import styled from "styled-components";

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const Img = styled.img`
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
`;

export const CardTitle = styled.h3`
    text-align: center;
`;

export const Price = styled.p`
    font-weight: bold;
`;