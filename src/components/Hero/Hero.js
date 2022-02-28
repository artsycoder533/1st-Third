import React from 'react';
import { Button } from '../Button/style';
import { Container, Heading, Subheading, Icon, HeroWrapper } from './style';
import { Center } from '../App/style';


function Hero() {
  return (
    <Container>
      <Center>
        <HeroWrapper>
          <Heading>Fashion for the Millenial</Heading>
          <Subheading>Trendy Styles. Low Prices.</Subheading>
          <Button>
            Shop Now
            <Icon />
          </Button>
        </HeroWrapper>
      </Center>
    </Container>
  );
}

export default Hero