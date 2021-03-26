export interface State {
  mode: string;
}

export interface ActionTypes {
  [key: string]: string;
}

export interface Action {
  // FIXME: type must be one of the options from Actions Type
  type: string;
  payload?: any;
}

export const INITIAL_STATE: State = {
  mode: "Write",
};

export const actionsTypes = {
  AS_WAIT_SEND: "AS_WAIT_SEND",
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};
