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
  RequestNodeEditAction,
  REQUEST_NODE_EDIT,
} from "../actions";
import initialData, { Element, Id, Node } from "../data/initialData";
import { deleteMany, getAllDescendantIds } from "./helpers";

export type State = {
  editedElementId: null | Id;
  elements: { [key: string]: Node };
};

type Action =
  | AddChildAction
  | UpdateNodeAction
  | RemoveChildAction
  | CreateNodeAction
  | RequestNodeEditAction
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

const initialState: State = {
  elements: initialData,
  editedElementId: null,
};

export default (state: State = initialState, action: Action): State => {
  const nodeId = action?.payload?.nodeId as string;
  if (typeof nodeId === "undefined") {
    return state;
  }

  if (action.type === DELETE_NODE) {
    const descendantIds = getAllDescendantIds(state.elements, nodeId);
    return {
      ...state,
      elements: deleteMany(state.elements, [nodeId, ...descendantIds]),
    };
  }

  if (action.type === REQUEST_NODE_EDIT) {
    return {
      ...state,
      editedElementId: nodeId,
    };
  }

  return {
    ...state,
    [nodeId]: node(state.elements[nodeId], action),
  };
};
