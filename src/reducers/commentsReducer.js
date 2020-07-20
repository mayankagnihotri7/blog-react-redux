import * as actions from "../actions/commentsAction";

const initialState = {
  loading: false,
  hasErrors: false,
  comments: [],
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return { ...state, hasErrors: false, loading: true };
    case actions.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_COMMENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
