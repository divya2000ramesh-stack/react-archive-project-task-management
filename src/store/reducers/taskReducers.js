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
       default:
      return state;
  }
};
