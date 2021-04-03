export interface State {
  review: String;
  result: String;
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
  review: "",
  result: "",
};

export const actionsTypes = {
  REGISTER_REVIEW: "REGISTER_REVIEW",
  REGISTER_RESULT: "REGISTER_RESULT",
  SHOW_RESULT_AND_GET_FEEDBACK: "SHOW_RESULT_AND_GET_FEEDBACK",
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionsTypes.REGISTER_REVIEW:
      return { ...state, review: action.payload.review };
    case actionsTypes.REGISTER_RESULT:
      return { ...state, result: action.payload.result };
    default:
      return state;
  }
};
