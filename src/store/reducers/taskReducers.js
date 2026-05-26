import * as types from "../types/taskTypes";

const initialState = {
  byId: {},

  allIds: [],

  loading: false,

  error: null,
};

export const taskReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    // FETCH SUCCESS

    case types.FETCH_TASKS_SUCCESS: {
      const byId = {};
      const allIds = [];

      action.payload.forEach(
        (task) => {
          byId[task.id] = task;

          allIds.push(task.id);
        }
      );

      return {
        ...state,
        byId,
        allIds,
      };
    }

    // CREATE SUCCESS

    case types.CREATE_TASK_SUCCESS: {
      const task =
        action.payload;

      return {
        ...state,

        byId: {
          ...state.byId,
          [task.id]: task,
        },

        allIds: [
          task.id,
          ...state.allIds,
        ],
      };
    }
    //update success
     case types.UPDATE_TASK_SUCCESS: {
      const updatedTask =
        action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [updatedTask.id]:
            updatedTask,
        },
      };
    }
//deleet success
 case types.DELETE_TASK_SUCCESS: {
      const deletedId =
        action.payload.id;
      const updatedById = {
        ...state.byId,
      };

      delete updatedById[
        deletedId
      ];

      return {
        ...state,
        byId: updatedById,
        allIds:
          state.allIds.filter(
            (id) =>
              id !== deletedId
          ),
      };
    }
       default:
      return state;
  }
};
