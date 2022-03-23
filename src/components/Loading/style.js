import styled from "styled-components";
import { keyframes } from "styled-components";

const LoadingDots = keyframes`
0% {
    transform: translateY(20px);
}
    25% {
        transform: translateY(0px);
    }
    50%{
        transform: translateY(20px);
    }
    75%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(20px);
    }
`;

export const Spinner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  text-align: center;
  height: 68vh;
  gap: 1rem;

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #800020;
  }

  div:nth-of-type(1) {
    animation: ${LoadingDots} 1s infinite;
  }

  div:nth-of-type(2) {
    animation: ${LoadingDots} 1s infinite;
    animation-delay: 0.25s;
  }
  div:nth-of-type(3) {
    animation: ${LoadingDots} 1s infinite;
  }
`;
