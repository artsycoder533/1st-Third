import styled from 'styled-components';
import { FiChevronRight } from "react-icons/fi";
import Img from '../../images/heroDesktop.jpg';


export const Container = styled.section`
  min-height: 100vh;
  border: 2px solid blue;
  background-image: url(${Img});

  &::before {
  }
`;

export const Heading = styled.h1`
`;

export const Subheading = styled.p`
`;

export const Icon = styled(FiChevronRight)`
    font-size: 1.5rem;
    color: white;
`;