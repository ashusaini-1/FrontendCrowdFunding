import {
  REGISTER_CAMPAIGN_REQUEST,
  REGISTER_CAMPAIGN_SUCCESS,
  REGISTER_CAMPAIGN_FAIL,
  UPDATE_CAMPAIGN_REQUEST,
  UPDATE_CAMPAIGN_SUCCESS,
  UPDATE_CAMPAIGN_FAIL,
  SINGLE_CAMPAIGN_REQUEST,
  SINGLE_CAMPAIGN_SUCCESS,
  SINGLE_CAMPAIGN_FAIL,
  VIEW_CAMPAIGN_REQUEST,
  VIEW_CAMPAIGN_SUCCESS,
  VIEW_CAMPAIGN_FAIL,
  DELETE_CAMPAIGN_REQUEST,
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_FAIL,
  CLEAR_ERRORS,
} from "../constant/campaignConstant";

export const createCampaignReducer = (state = { campaign: {} }, action) => {
  switch (action.type) {
    case REGISTER_CAMPAIGN_REQUEST:
    case UPDATE_CAMPAIGN_REQUEST:
      return {
        loading: true,
      };

    case REGISTER_CAMPAIGN_SUCCESS:
    case UPDATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        campaign: action.payload,
      };

    case REGISTER_CAMPAIGN_FAIL:
    case UPDATE_CAMPAIGN_FAIL:
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

export const viewCampaignReducer = (state = { campaign: [] }, action) => {
  switch (action.type) {
    case VIEW_CAMPAIGN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case VIEW_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        campaign: action.payload,
      };

    case VIEW_CAMPAIGN_FAIL:
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


export const detailCampaignReducer = (state = { campaign:{}}, action) => {
  switch (action.type) {
    case SINGLE_CAMPAIGN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SINGLE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        campaign: action.payload,
      };

    case SINGLE_CAMPAIGN_FAIL:
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

export const deleteCampaignReducer = (state = { campaign: {} }, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_REQUEST:
      return {
        loading: true,
      };

    case DELETE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        campaign: action.payload,
      };

    case DELETE_CAMPAIGN_FAIL:
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


