import * as types from "../types/uiTypes";
import * as typesTask from "../types/taskTypes"

const initialState = {
  taskForm: {
    isOpen: false,
    mode: "create",
    taskId: null,
  },

   filters: {
    projectId: null,

    assigneeId: null,

    status: "all",

    taskType: "all",

    search: "",
  },

   loading: {
    tasks: false,
  },

  errors: {
    tasks: null,
    form:null
  }
};

export const uiReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.OPEN_TASK_FORM:
      return {
        ...state,
        taskForm: {
          isOpen: true,
          mode: action.payload.mode,
          taskId:
            action.payload.taskId,
        },
      };

    case types.CLOSE_TASK_FORM:
      return {
        ...state,
        taskForm: {
          ...state.taskForm,
          isOpen: false,
        },
      };

   
    case types.CLEAR_FILTERS:
      return {
        ...state,
        filters: {},
      };

      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload]: null,
        },
      };
    default:
      return state;
  }
};