import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    transform: translateY(-5px);
  }
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
    font-size: 1.1rem;
`;

export const CardLink = styled(Link)`
    text-decoration: none;
    color: black;

    
`;