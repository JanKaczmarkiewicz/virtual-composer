import React, { FunctionComponent } from "react";
import { RequestElementEditHandler } from "../App";
import { ElementDefinition } from "../data/initialData";
import elementsMap from "../elements";

export type RendererProps = {
  onUpdate: RequestElementEditHandler;
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
  const Widget = elementsMap[props.element.elementType];
  return <Widget {...props} />;
});

export default Renderer;
