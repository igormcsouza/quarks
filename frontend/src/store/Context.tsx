import React, { createContext, useReducer } from "react";
import { Action, INITIAL_STATE, reducer, State } from "./reducer";

interface ContextProps {
  state: State;
  dispatch: (action: Action) => void;
}

export const Context = createContext<ContextProps>({} as ContextProps);

const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
