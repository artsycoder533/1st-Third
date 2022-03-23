import React from "react";
import { Center } from "../../components/App/style";
import ErrorImg from "../../images/error.svg";
import { Container } from "./style";
import { SecondaryLink } from "../../components/Button/style";

const Error = () => {
  return (
    <main>
      <Center>
        <Container>
          <h2>Ooops, looks like you took a wrong turn....</h2>
          <SecondaryLink to="/">Back to Home</SecondaryLink>
          <img src={ErrorImg}></img>
        </Container>
      </Center>
    </main>
  );
};

export default Error;
