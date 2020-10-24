import React, { FunctionComponent, useCallback, useReducer } from "react";
import Renderer from "./composer/Renderer";
import initialData, { ElementDefinition } from "./data/initialData";

const UPDATE_ELEMENT = "UPDATE_ELEMENT";
const REQUEST_ELEMENT_EDIT = "REQUEST_ELEMENT_EDIT";

type UpdateElementPayload = {
  sectionName: string;
  name: string;
  value: any;
};

type RequestElementEditPayload = {
  sectionName: string;
};

type State = ElementDefinition;
export type RequestElementEditHandler = (
  payload: RequestElementEditPayload
) => void;
export type UpdateElementHandler = (payload: UpdateElementPayload) => void;
type Action =
  | {
      type: typeof UPDATE_ELEMENT;
      payload: UpdateElementPayload;
    }
  | { type: typeof REQUEST_ELEMENT_EDIT; payload: RequestElementEditPayload };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case UPDATE_ELEMENT:
      return state;

    default:
      return state;
  }
};

const App: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  const onUpdateRequest: RequestElementEditHandler = useCallback(
    (payload) => dispatch({ type: REQUEST_ELEMENT_EDIT, payload }),
    []
  );

  const onUpdate: UpdateElementHandler = useCallback(
    (payload) => dispatch({ type: UPDATE_ELEMENT, payload }),
    []
  );

  return <Renderer element={state} onUpdate={onUpdateRequest} />;
};

export default App;
