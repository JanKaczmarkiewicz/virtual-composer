import React, { CSSProperties, FunctionComponent } from "react";
import { RendererProps } from "../composer/Renderer";

const style: CSSProperties = {
  backgroundColor: "white",
  minHeight: 50,
  display: "flex",
  margin: "5px",
};

const Widget: FunctionComponent<RendererProps> = ({
  children,
  element,
  onUpdate,
}) => {
  const onEditClick = () => {
    onUpdate({ sectionName: element.sectionName });
  };
  return (
    <div style={{ ...style, ...element.attributes }}>
      <pre>{JSON.stringify(element.attributes)}</pre>
      <button onClick={onEditClick}>Edit</button>
    </div>
  );
};

export default Widget;
