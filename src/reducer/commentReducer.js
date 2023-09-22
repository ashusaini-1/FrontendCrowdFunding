import {
  ADD_COMMENT_REGISTER,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  VIEW_COMMENT_REGISTER,
  VIEW_COMMENT_SUCCESS,
  VIEW_COMMENT_FAIL,
  CLEAR_ERRORS,
} from "../constant/commentConstant";

export const createCommentReducer = (state = { campaign: {} }, action) => {
  switch (action.type) {
    case ADD_COMMENT_REGISTER:
      return {
        loading: true,
      };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        campaign: action.payload,
      };

    case ADD_COMMENT_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const viewCommentReducer = (state = { comment: [] }, action) => {
  switch (action.type) {
    case VIEW_COMMENT_REGISTER:
      return {
        ...state,
        loading: true,
      };

    case VIEW_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comment: action.payload,
      };

    case VIEW_COMMENT_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
