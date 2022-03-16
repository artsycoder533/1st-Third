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