import React, { CSSProperties, FunctionComponent } from "react";
import { ElementProps } from ".";

const style: CSSProperties = {
  backgroundColor: "#72BDA3",
  display: "flex",
  flexDirection: "column",
  width: "9.9%",
  margin: "5px",
  minHeight: 50,
};

const Column: FunctionComponent<ElementProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Column;
