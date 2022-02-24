import styled from 'styled-components';
import { FiChevronRight } from "react-icons/fi";
import Img from '../../images/heroDesktop.jpg';


export const Container = styled.section`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Img}) no-repeat center / cover;
  color: white;

  &::before {
  }
`;

export const Heading = styled.h1`
    font-size: 5rem;
`;

export const Subheading = styled.p`
`;

export const Icon = styled(FiChevronRight)`
    font-size: 1.5rem;
    color: white;
`;