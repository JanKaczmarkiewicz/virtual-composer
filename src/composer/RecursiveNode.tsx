import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Id, Node } from "../data/initialData";
import elementsMap from "../elements";
import { State } from "../reducers";

const renderNode = (id: Id) => <ConnectedRecursiveNode id={id} />;

const RecursiveNode: FunctionComponent<NodeBaseProps> = (props) => {
  const { element } = (props as unknown) as NodeProps;
  return (
    <ElementWrapper element={element}>
      {element.childIds.map(renderNode)}
    </ElementWrapper>
  );
};

const ElementWrapper: FunctionComponent<NodeMappedStoreProps> = (props) => {
  const Widget = elementsMap[props.element.type];
  return <Widget element={props.element}>{props.children}</Widget>;
};

type NodeBaseProps = {
  id: Id;
};

type NodeMappedStoreProps = {
  element: Node;
};

type NodeProps = NodeBaseProps & NodeMappedStoreProps;

function mapStateToProps(
  state: State,
  ownProps: NodeBaseProps
): NodeMappedStoreProps {
  return { element: state.elements[ownProps.id] };
}

const ConnectedRecursiveNode = connect(mapStateToProps)(RecursiveNode);

export default ConnectedRecursiveNode;
