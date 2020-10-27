import React, { CSSProperties, FunctionComponent } from "react";
import { ElementProps } from ".";

const style: CSSProperties = {
  backgroundColor: "#94E8B4",
  marginBottom: 5,
  display: "flex",
  flexDirection: "row",
  width: "100%",
  minHeight: 50,
  padding: 20,
};

const Section: FunctionComponent<ElementProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Section;
