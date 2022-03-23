import React from 'react';
import { Center } from '../../components/App/style';
import ErrorImg from '../../images/error.svg';
import { Container } from './style';

const Error = () => {
  return (
    <main>
      <Center>
        <Container>
          <h2>Ooops, looks like you took a wrong turn....</h2>
          <img src={ErrorImg}></img>
        </Container>
      </Center>
    </main>
  );
}

export default Error