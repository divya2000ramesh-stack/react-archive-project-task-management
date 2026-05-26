// Task sagas for handling async operations
// TODO: Implement saga functions for task management

import { call, put, takeEvery, takeLatest, race, delay } from 'redux-saga/effects';
import { mockApi } from '../../api/mockApi';
import * as types from "../types/taskTypes";

// TODO: Import action types and action creators
// import { FETCH_TASKS_REQUEST, CREATE_TASK_REQUEST, ... } from '../actions/taskActions';

// TODO: Implement saga functions
// Requirements:
// 1. Handle fetch tasks with error handling
// 2. Handle create task with optimistic updates
// 3. Handle update task with optimistic updates  
// 4. Handle delete task with optimistic updates
// 5. Implement retry logic for failed requests
// 6. Handle race conditions (cancel previous requests)

// TODO: Implement fetchTasksSaga - use call, put, try-catch
// TODO: Implement createTaskSaga - optimistic updates with rollback
// TODO: Implement updateTaskSaga - similar to create
// TODO: Implement deleteTaskSaga - with confirmation handling

// TODO: Export watcher sagas using takeLatest/takeEvery

function* fetchTasksSaga(
    action
) {
    try {
        const response =
            yield call(
                mockApi.fetchTasks,
                action.payload
            );

        yield put({
            type:
                types.FETCH_TASKS_SUCCESS,

            payload:
                response.data,
        });
    } catch (error) {
        yield put({
            type:
                types.FETCH_TASKS_FAILURE,

            payload:
                error.message,
        });
    }
}

// CREATE TASK

function* createTaskSaga(
    action
) {
    try {
        const response =
            yield call(
                mockApi.createTask,
                action.payload
            );

        yield put({
            type:
                types.CREATE_TASK_SUCCESS,

            payload:
                response.data,
        });

        // CLOSE FORM

        yield put({
            type:
                "CLOSE_TASK_FORM",
        });
        // CLEAR DRAFT
        localStorage.removeItem(
            "taskFormDraft"
        );
    } catch (error) {
        yield put({
            type:
                types.CREATE_TASK_FAILURE,

            payload:
                error.message,
        });
    }
}
// UPDATE

function* updateTaskSaga(
    action
) {
    try {
        const response =
            yield call(
                mockApi.updateTask,

                action.payload.taskId,

                action.payload.updates
            );

        yield put({
            type:
                types.UPDATE_TASK_SUCCESS,

            payload:
                response.data,
        });

        yield put({
            type:
                "CLOSE_TASK_FORM",
        });

    } catch (error) {
        yield put({
            type:
                types.UPDATE_TASK_FAILURE,

            payload:
                error.message,
        });
    }
}

// DELETE
function* deleteTaskSaga(
    action
) {
    try {
        const response =
            yield call(
                mockApi.deleteTask,
                action.payload
            );

        yield put({
            type:
                types.DELETE_TASK_SUCCESS,

            payload:
                response.data,
        });

    } catch (error) {
        yield put({
            type:
                types.DELETE_TASK_FAILURE,

            payload:
                error.message,
        });
    }
}

// WATCHERS
export default function* taskSaga() {
    yield takeLatest(
        types.FETCH_TASKS_REQUEST,

        fetchTasksSaga
    );

    yield takeLatest(
        types.CREATE_TASK_REQUEST,

        createTaskSaga
    );
    yield takeLatest(
        types.UPDATE_TASK_REQUEST,

        updateTaskSaga
    );

    yield takeLatest(
        types.DELETE_TASK_REQUEST,

        deleteTaskSaga
    );
}
