import { combineReducers } from "redux";
import dataReducer  from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";
import modeReducer from "../slices/modeSlice";

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer,
    mode: modeReducer,
});

export default rootReducer;
