import React from 'react';
import { Spinner } from './style';
import { Center } from '../App/style';

function Loading() {
  return (
    <Center>
      <Spinner>Loading.....</Spinner>
    </Center>
  );
}

export default Loading