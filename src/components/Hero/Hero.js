import React from 'react';
import { Button } from '../Button/style';
import { Container, Heading, Subheading, Icon } from './style';



function Hero() {
  return (
      <Container>
          <Heading>Fashion for the Millenial</Heading>
          <Subheading>Trendy Styles. Low Prices.</Subheading>
          <Button>Shop Now
            <Icon />
          </Button>
    </Container>
  )
}

export default Hero