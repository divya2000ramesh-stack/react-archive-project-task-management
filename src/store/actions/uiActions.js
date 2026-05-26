// UI action creators
// TODO: Implement UI state management actions

//
// UI action creators
// TODO: Implement UI state management actions
import * as types from "../types/uiTypes";

// Task Form
export const openTaskForm = (
  mode,
  taskId
) => ({
  type: types.OPEN_TASK_FORM,
  payload: {
    mode,
    taskId: taskId || null,
  },
});

export const closeTaskForm = () => ({
  type: types.CLOSE_TASK_FORM,
});

// TODO: Implement action creators for UI state
// Requirements:
// 1. Task form management (open/close, mode)
// 2. Filter management
// 3. Loading states
// 4. Error handling

// TODO: Create action creators for form state, filters, loading, errors