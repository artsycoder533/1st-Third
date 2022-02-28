import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import Img from "../../images/heroDesktop.jpg";
import { blink } from "../App/style";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Img}) no-repeat center / cover;
  color: white;

  &::before {
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 5rem;
`;

export const Subheading = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Icon = styled(FiChevronRight)`
  font-size: 1.5rem;
  color: white;
  animation: ${blink} 1s linear infinite;
`;
