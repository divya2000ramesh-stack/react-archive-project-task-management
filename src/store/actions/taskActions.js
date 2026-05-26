// Task action creators
// TODO: Implement action creators for task management
import * as types from "../types/taskTypes";

export const fetchTasks = (
  filters = {}
) => ({
  type:
    types.FETCH_TASKS_REQUEST,

  payload: filters,
});

export const createTask = (
  data
) => ({
  type:
    types.CREATE_TASK_REQUEST,

  payload: data,
});

export const updateTask = (
  taskId,
  updates
) => ({
  type:
    types.UPDATE_TASK_REQUEST,

  payload: {
    taskId,
    updates,
  },
});

// ====================
// DELETE
// =========

export const deleteTask = (
  taskId
) => ({
  type:
    types.DELETE_TASK_REQUEST,

  payload: taskId,
});
// TODO: Implement action creators
// Requirements:
// 1. Fetch tasks with optional filters
// 2. Create task with optimistic updates
// 3. Update task with optimistic updates
// 4. Delete task with optimistic updates
// 5. Handle success/failure cases

// TODO: Create action creators for each operation (request/success/failure)
// TODO: Add optimistic update actions for create/update/delete