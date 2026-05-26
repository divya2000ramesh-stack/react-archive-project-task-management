import { combineReducers } from "redux";
import { uiReducer } from "./uiReducers";
import { taskReducer } from "./taskReducers";
import { projectsReducer } from "./projectReducers";

// const rootReducer = combineReducers({
//   ui: uiReducer,

//   tasks: taskReducer,
//   
// });
//based on sample json changedd
const entitiesReducer =
  combineReducers({
    tasks: taskReducer,
    projects:projectsReducer,
  });


// ROOT REDUCER

const rootReducer =
  combineReducers({

    entities:entitiesReducer,
    ui: uiReducer,
  });

export default rootReducer;
