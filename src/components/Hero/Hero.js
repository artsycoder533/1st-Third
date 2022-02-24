import React from 'react';
import { Container, Heading, Subheading, Icon } from './style';


function Hero() {
  return (
      <Container>
          <Heading>This is the Hero</Heading>
          <Subheading>This is the subheading</Subheading>
          <button>Shop Now
            <Icon />
          </button>
    </Container>
  )
}

export default Hero