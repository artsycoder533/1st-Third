import styled from "styled-components";

export const StyledArticle = styled.article`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid lightgrey;
    padding: 1rem;

    div {
        height: 200px;
        width: 200px;
    }

    div:nth-of-type(2){
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 2rem;
    }

    img {
        max-width: 100%;
        height: 100%;
        object-fit: center;
    }
`;

export const RemoveButton = styled.button`
    align-self: center;
    margin-left: 2rem;
`;

export const CountButton = styled.button`
    font-size: 1.5rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
`;