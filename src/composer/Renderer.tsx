import React, { FunctionComponent } from "react";
import elementsMap from "../elements";



const Renderer: FunctionComponent = () => {
  return (
    
  );
};

const ElementWrapper: FunctionComponent = () => {
  const Widget = elementsMap[props.element.elementType];
  return <Widget {...props} />;
};

export default Renderer;
