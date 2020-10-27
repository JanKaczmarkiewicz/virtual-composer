import React, { CSSProperties, FunctionComponent } from "react";
import RecursiveNode from "./composer/RecursiveNode";
import { rootNodeId } from "./data/initialData";
import Editor from "./editor/Editor";

const style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const App: FunctionComponent = () => {
  return (
    <div style={style}>
      <Editor />
      <RecursiveNode id={rootNodeId} />
    </div>
  );
};

export default App;
