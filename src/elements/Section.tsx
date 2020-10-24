import React, { CSSProperties, FunctionComponent } from "react";
import { RendererProps } from "../composer/Renderer";

const style: CSSProperties = {
  backgroundColor: "blue",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  minHeight: "50px",
  padding: "10px",
};

const Section: FunctionComponent<RendererProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Section;
