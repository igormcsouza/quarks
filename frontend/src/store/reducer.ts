export interface State {
  mode: string;
  review: String;
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
  mode: "write",
  review: "",
};

export const actionsTypes = {
  REGISTER_REVIEW: "REGISTER_REVIEW",
  SHOW_RESULT_AND_GET_FEEDBACK: "SHOW_RESULT_AND_GET_FEEDBACK",
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionsTypes.REGISTER_REVIEW:
      return { ...state, review: action.payload.review };
    case actionsTypes.SHOW_RESULT_AND_GET_FEEDBACK:
      return { ...state, mode: "feedback" };
    default:
      return state;
  }
};
