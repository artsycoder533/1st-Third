import React from "react";
import { Spinner } from "./style";
import { Center } from "../App/style";

function Loading() {
  return (
    <main>
      <Spinner>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
    </main>
  );
}

export default Loading;
