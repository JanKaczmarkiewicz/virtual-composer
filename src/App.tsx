import React, { FunctionComponent, useCallback, useReducer } from "react";
import initialData, { ElementDefinition } from "./data/initialData";

const UPDATE_ELEMENT = "UPDATE_ELEMENT";
type State = ElementDefinition[];
type Action = {
  type: typeof UPDATE_ELEMENT;
  payload: { name: string; value: any };
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

  return <Renderer data={state} onUpdate={onUpdate} />;
};

export default App;
