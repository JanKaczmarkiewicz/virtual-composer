import React, { CSSProperties, FunctionComponent } from "react";
import { RendererProps } from "../composer/Renderer";

const style: CSSProperties = {
  backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
};

const Root: FunctionComponent<RendererProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Root;
