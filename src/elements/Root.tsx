import React, { CSSProperties, FunctionComponent } from "react";
import { RendererProps } from "../composer/Renderer";

const style: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

const Root: FunctionComponent<RendererProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Root;
