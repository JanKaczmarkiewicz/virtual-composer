import React, { CSSProperties, FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { ElementProps } from ".";
import { requestNodeEdit } from "../actions";

const style: CSSProperties = {
  backgroundColor: "#5E8C61",
  minHeight: 50,
  display: "flex",
  justifyContent: "space-between",
  margin: 20,
};

const Widget: FunctionComponent<ElementProps> = ({ element }) => {
  const dispatch = useDispatch();
  const onEditClick = () => {
    dispatch(requestNodeEdit({ nodeId: element.id }));
  };
  return (
    <div style={{ ...style, ...element.attributes }}>
      <pre style={{ display: "block" }}>
        {JSON.stringify(element.attributes)}
      </pre>
      <button onClick={onEditClick}>Edit</button>
    </div>
  );
};

export default Widget;
