import React, { FunctionComponent, useCallback, useReducer } from "react";
import Renderer from "./composer/Renderer";
import initialData, { ElementDefinition } from "./data/initialData";

const UPDATE_ELEMENT = "UPDATE_ELEMENT";
type State = ElementDefinition;
export type ElementUpdatePayload = {
  sectionName: string;
  name: string;
  value: any;
};

type Action = {
  type: typeof UPDATE_ELEMENT;
  payload: ElementUpdatePayload;
};

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

  const onUpdate = useCallback(
    (payload) => dispatch({ type: UPDATE_ELEMENT, payload }),
    []
  );

  return <Renderer element={state} onUpdate={onUpdate} />;
};

export default App;
