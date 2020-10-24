import React, { CSSProperties, FunctionComponent } from "react";
import { RendererProps } from "../composer/Renderer";

const style: CSSProperties = {
  backgroundColor: "white",
  minHeight: 50,
};

const Widget: FunctionComponent<RendererProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Widget;
