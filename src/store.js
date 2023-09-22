import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer,allUsersReducer, loadUserReducer } from "./reducer/userReducer";
import { createCampaignReducer, deleteCampaignReducer, detailCampaignReducer, viewCampaignReducer } from "./reducer/campaignReducer";
import { createCommentReducer, viewCommentReducer } from "./reducer/commentReducer";


const reducer = combineReducers({
    user:userReducer,
    users:allUsersReducer,
    loadUser:loadUserReducer,
    createCampaign:createCampaignReducer,
    view:viewCampaignReducer,
    detail:detailCampaignReducer,
    delete:deleteCampaignReducer,
    createComment:createCommentReducer,
    viewComment:viewCommentReducer,

})


let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;