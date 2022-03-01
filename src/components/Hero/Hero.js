import React from 'react';
import { ButtonLink } from '../Button/style';
import { Container, Heading, Subheading, Icon, HeroWrapper } from './style';
import { Center } from '../App/style';


function Hero() {
  return (
    <Container>
      <Center>
        <HeroWrapper>
          <Heading>Millenial's One Stop Shop</Heading>
          <Subheading>Trendy. Affordable. Convenient.</Subheading>
          <ButtonLink to="/shop">
            Shop Now
            <Icon />
          </ButtonLink>
        </HeroWrapper>
      </Center>
    </Container>
  );
}

export default Hero