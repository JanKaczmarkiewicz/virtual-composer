import React, { CSSProperties, FunctionComponent } from "react";
import { ElementProps } from ".";

const style: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

const Root: FunctionComponent<ElementProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Root;
