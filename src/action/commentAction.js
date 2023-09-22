import {
  ADD_COMMENT_REGISTER,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  VIEW_COMMENT_REGISTER,
  VIEW_COMMENT_SUCCESS,
  VIEW_COMMENT_FAIL,
  REPLY_COMMENT_REGISTER,
  REPLY_COMMENT_SUCCESS,
  REPLY_COMMENT_FAIL,
  CLEAR_ERRORS,
} from "../constant/commentConstant";
import axios from "axios";

const backendApi="https://crowdfunding-hii5.onrender.com"
export const CreateComment = (comment) => async (dispatch) => {
 
  try {
    dispatch({ type: ADD_COMMENT_REGISTER });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(`${backendApi}/api/v1/add/comment`, comment, config);
    
    dispatch({ type: ADD_COMMENT_SUCCESS, payload: data.userComment });
  } catch (error) {
    dispatch({ type: ADD_COMMENT_FAIL, payload: error.response.data.message });
  }
};

export const ViewComment= (id) => async (dispatch) => {

  try {
    dispatch({ type: VIEW_COMMENT_REGISTER });

    const { data } = await axios.get(`${backendApi}/api/v1/view/comment/${id}`);

   
    dispatch({ type: VIEW_COMMENT_SUCCESS, payload: data.comments });
  } catch (error) {
    dispatch({ type: VIEW_COMMENT_FAIL, payload: error.response.data.message });
  }

}

export const ReplyComment = (ids) => async (dispatch) => {

  try {
    dispatch({ type: REPLY_COMMENT_REGISTER });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(`${backendApi}/api/v1/comment/reply`, ids, config);
   
    dispatch({ type: REPLY_COMMENT_SUCCESS, payload: data.userComment });
  } catch (error) {
    dispatch({ type: REPLY_COMMENT_FAIL, payload: error.response.data.message });
  }
};

  
