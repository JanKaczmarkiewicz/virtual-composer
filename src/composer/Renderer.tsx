import React, { FunctionComponent } from "react";
import { ElementUpdatePayload } from "../App";
import { Element, ElementDefinition } from "../data/initialData";
import elements from "../elements";

export type ElementUpdateHandler = (payload: ElementUpdatePayload) => void;

export type RendererProps = {
  onUpdate: ElementUpdateHandler;
  element: ElementDefinition;
};

const Renderer: FunctionComponent<RendererProps> = ({ onUpdate, element }) => {
  return (
    <ElementWrapper element={element} onUpdate={onUpdate}>
      {element.content.map((contentElement) => (
        <Renderer
          key={contentElement.sectionName}
          element={contentElement}
          onUpdate={onUpdate}
        />
      ))}
    </ElementWrapper>
  );
};

const ElementWrapper: FunctionComponent<RendererProps> = React.memo<
  RendererProps
>((props) => {
  const Widget = elements[props.element.elementType];
  return <Widget {...props} />;
});

export default Renderer;
