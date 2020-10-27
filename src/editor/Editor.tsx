import React, { CSSProperties, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestNodeEdit, updateNode } from "../actions";
import { State } from "../reducers";

const style: CSSProperties = {
  height: "100%",
  width: 200,
  padding: 20,
};

const Editor: FunctionComponent = () => {
  const editedElement = useSelector((state: State) =>
    state.editedElementId ? state.elements[state.editedElementId] || null : null
  );
  const dispatch = useDispatch();

  return editedElement ? (
    <div style={style}>
      <h1>Edited node: {editedElement.id}</h1>
      {Object.keys(editedElement.attributes).map((attributeKey) => (
        <input
          value={editedElement.attributes[attributeKey as keyof CSSProperties]}
          onChange={(e) =>
            dispatch(
              updateNode({
                attributeValue: e.target.value,
                attributeName: attributeKey,
                nodeId: editedElement.id,
              })
            )
          }
        />
      ))}
      <button
        type="submit"
        onClick={() =>
          dispatch(
            requestNodeEdit({
              nodeId: null,
            })
          )
        }
      >
        Close
      </button>
    </div>
  ) : null;
};

export default Editor;
