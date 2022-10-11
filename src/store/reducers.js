import { combineReducers } from "redux";
import authReducer from "./auth/auth-slice";
import slice from "./campaign/slice";

export const reducer = combineReducers({
  auth: authReducer,
  campaign: slice,
});
