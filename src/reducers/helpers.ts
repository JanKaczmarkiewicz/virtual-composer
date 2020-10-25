import { State } from ".";
import { Id } from "../data/initialData";

const getAllDescendantIds = (state: State, nodeId: Id): Id[] =>
  state[nodeId].childIds.reduce(
    (acc, childId) => [...acc, childId, ...getAllDescendantIds(state, childId)],
    [] as Id[]
  );

const deleteMany = (state: State, ids: Id[]) => {
  const newState = { ...state };
  for (const id of ids) delete newState[id];
  return state;
};

export { deleteMany, getAllDescendantIds };
