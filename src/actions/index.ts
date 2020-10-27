import { Id } from "../data/initialData";

export const UPDATE_NODE = "UPDATE_CODE";
export type UpdateNodeAction = {
  type: typeof UPDATE_NODE;
  payload: { nodeId: Id; attributeName: string; attributeValue: string };
};
export const updateNode = (
  payload: UpdateNodeAction["payload"]
): UpdateNodeAction => ({
  type: UPDATE_NODE,
  payload,
});

export const CREATE_NODE = "CREATE_NODE";
export type CreateNodeAction = {
  type: typeof CREATE_NODE;
  payload: { nodeId: Id };
};
export const createNode = (
  payload: CreateNodeAction["payload"]
): CreateNodeAction => ({
  type: CREATE_NODE,
  payload,
});

export const DELETE_NODE = "DELETE_NODE";
export type DeleteNodeAction = {
  type: typeof DELETE_NODE;
  payload: { nodeId: Id };
};
export const deleteNode = (
  payload: DeleteNodeAction["payload"]
): DeleteNodeAction => ({
  type: DELETE_NODE,
  payload,
});

export const ADD_CHILD = "ADD_CHILD";
export type AddChildAction = {
  type: typeof ADD_CHILD;
  payload: { nodeId: Id; childId: Id };
};
export const addChild = (
  payload: AddChildAction["payload"]
): AddChildAction => ({
  type: ADD_CHILD,
  payload,
});

export const REMOVE_CHILD = "REMOVE_CHILD";
export type RemoveChildAction = {
  type: typeof REMOVE_CHILD;
  payload: { nodeId: Id; childId: Id };
};
export const removeChild = (
  payload: RemoveChildAction["payload"]
): RemoveChildAction => ({
  type: REMOVE_CHILD,
  payload,
});

export const REQUEST_NODE_EDIT = "REQUEST_NODE_EDIT";
export type RequestNodeEditAction = {
  type: typeof REQUEST_NODE_EDIT;
  payload: { nodeId: Id | null };
};
export const requestNodeEdit = (
  payload: RequestNodeEditAction["payload"]
): RequestNodeEditAction => ({
  type: REQUEST_NODE_EDIT,
  payload,
});
