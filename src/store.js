import { createStore } from "redux";
import { chartReducer } from "./reducers/chartReducer";

export const store = createStore(chartReducer);