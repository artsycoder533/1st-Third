import styled from "styled-components";

export const StyledHamburger = styled.button`
    width: 40px;
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 1px solid transparent;
`;

export const Line = styled.span`
    width: 40px;
    height: 5px;
    border-radius: 5px;
    background: black;
`;

export const TopLine = styled(Line)`
    transform: translateY(-10px);

`;

export const BottomLine = styled(Line)`
    transform: translateY(10px);
`;