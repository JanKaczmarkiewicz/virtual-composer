import {
  AddChildAction,
  UpdateNodeAction,
  RemoveChildAction,
  CreateNodeAction,
  DeleteNodeAction,
  ADD_CHILD,
  CREATE_NODE,
  DELETE_NODE,
  REMOVE_CHILD,
  UPDATE_NODE,
} from "../actions";
import { Element, Node } from "../data/initialData";
import { deleteMany, getAllDescendantIds } from "./helpers";

export type State = {
  [key: string]: Node;
};

type Action =
  | AddChildAction
  | UpdateNodeAction
  | RemoveChildAction
  | CreateNodeAction
  | DeleteNodeAction;

const node = (node: Node, action: Action): Node => {
  switch (action.type) {
    case CREATE_NODE:
      return {
        id: action.payload.nodeId,
        attributes: {},
        type: Element.WIDGET,
        childIds: [],
      };

    case UPDATE_NODE:
      return {
        ...node,
        attributes: {
          ...node.attributes,
          [action.payload.attributeName]: action.payload.attributeValue,
        },
      };

    case ADD_CHILD:
      return { ...node, childIds: [...node.childIds, action.payload.childId] };

    case REMOVE_CHILD:
      return {
        ...node,
        childIds: node.childIds.filter((id) => id !== action.payload.childId),
      };
    default:
      return node;
  }
};

export default (state: State = {}, action: Action) => {
  const { nodeId } = action.payload;
  if (typeof nodeId === "undefined") {
    return state;
  }

  if (action.type === DELETE_NODE) {
    const descendantIds = getAllDescendantIds(state, nodeId);
    return deleteMany(state, [nodeId, ...descendantIds]);
  }

  return {
    ...state,
    [nodeId]: node(state[nodeId], action),
  };
};
