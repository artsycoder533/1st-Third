import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    input {
        padding: 0.5rem;
    }

    input:invalid:focus {
        background: #ff7f7f;
    }

    input:valid{
        background: lightgreen;
    }
`;
