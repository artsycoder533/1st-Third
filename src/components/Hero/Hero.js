import React from 'react';
import { ButtonLink } from '../Button/style';
import { Container, Heading, Subheading, Icon, HeroWrapper } from './style';
import { Center } from '../App/style';


function Hero() {
  return (
    <Container>
      <Center>
        <HeroWrapper>
          <Heading>Fashion for the Millenial</Heading>
          <Subheading>Trendy Styles. Low Prices.</Subheading>
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