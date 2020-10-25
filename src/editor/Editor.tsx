import React, { FunctionComponent } from "react";

const Editor: FunctionComponent = () => {
  return (
    <div>
      {Object.keys(element.attributes).map((attributeKey) => (
        <input
          value={element.attributes[attributeKey]}
          onChange={(e) =>
            onUpdate({
              value: e.target.value,
              name: attributeKey,
              sectionName: element.sectionName,
            })
          }
        />
      ))}
    </div>
  );
};

export default Editor;
