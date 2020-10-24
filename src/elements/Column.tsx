import React, { CSSProperties, FunctionComponent } from "react";
import { RendererProps } from "../composer/Renderer";

const style: CSSProperties = {
  backgroundColor: "blue",
  display: "flex",
  flexDirection: "column",
  width: "30%",
  margin: "5px",
  minHeight: 50,
};

const Column: FunctionComponent<RendererProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Column;
