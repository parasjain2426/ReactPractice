import { combineReducers } from "redux";
import { chartReducer } from "./chartReducer";
import { pageReducer } from "./pageReducer";

export default combineReducers({ pageReducer, chartReducer });
