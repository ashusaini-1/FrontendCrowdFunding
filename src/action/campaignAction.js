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
  SEND_CAMPAIGN_REQUEST,SEND_CAMPAIGN_SUCCESS,SEND_CAMPAIGN_FAIL,
  CLEAR_ERRORS,
} from "../constant/campaignConstant";

import axios from "axios";


const backendApi="https://crowdfunding-hii5.onrender.com"
export const RegisterCampaignes = (campaignData) => async (dispatch) => {
 
  try {
    dispatch({ type: REGISTER_CAMPAIGN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `${backendApi}/api/v1/register/campaign`,
      campaignData,
      config
    );
 
    dispatch({ type: REGISTER_CAMPAIGN_SUCCESS, payload: data.campaign });
  } catch (error) {
    dispatch({
      type: REGISTER_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const UpdateCampaignes = (id, campaignData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CAMPAIGN_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `${backendApi}/api/v1/update/campaign/${id}`,
      campaignData,
      config
    );
    dispatch({ type: UPDATE_CAMPAIGN_SUCCESS, payload: data.campaign });
  } catch (error) {
    dispatch({
      type: UPDATE_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const SingleCampaign = (id) => async (dispatch) => {

  try {
    dispatch({ type: SINGLE_CAMPAIGN_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.get(`${backendApi}/api/v1/campaign/detail/${id}`, config);
 
    dispatch({ type: SINGLE_CAMPAIGN_SUCCESS, payload: data.campaign });
  } catch (error) {
    dispatch({
      type: SINGLE_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const ViewCampaignes = (title="") => async (dispatch) => {
  try {
    dispatch({ type: VIEW_CAMPAIGN_REQUEST });
    const { data } = await axios.get(`${backendApi}/api/v1/view/campaign?title=${title}`);

    dispatch({ type: VIEW_CAMPAIGN_SUCCESS, payload: data.campaign });
  } catch (error) {
    dispatch({
      type: VIEW_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const DeleteCampaign = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CAMPAIGN_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `${backendApi}/api/v1/delete/campaign/${id}`,
      config
    );
    dispatch({ type: DELETE_CAMPAIGN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: DELETE_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};



export const SendMessages = () => async (dispatch) => {

  try {
    dispatch({ type: SEND_CAMPAIGN_REQUEST });

   
    const { data } = await axios.post(
      `${backendApi}/api/v1/send`,
    
    );
    
    dispatch({ type: SEND_CAMPAIGN_SUCCESS, payload: data.campaign });
  } catch (error) {
    dispatch({
      type: SEND_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};
