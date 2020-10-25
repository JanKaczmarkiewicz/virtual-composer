import React, { FunctionComponent } from "react";
import Renderer from "./composer/Renderer";
import Editor from "./editor/Editor";

const App: FunctionComponent = () => {
  return (
    <>
      <Editor />
      <Renderer />
    </>
  );
};

export default App;
