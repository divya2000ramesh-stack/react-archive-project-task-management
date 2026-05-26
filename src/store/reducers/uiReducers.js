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

        users: false,

        projects: false,
    },

    errors: {
        tasks: null,

        users: null,
        project: null,
        form: null
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

        case types.SET_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.payload.key]:
                        action.payload.message,
                },
            };

        case types.CLEAR_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.payload]: null,
                },
            };

        // LOADING TRUE
        
        case typesTask.FETCH_TASKS_REQUEST:
        case typesTask.CREATE_TASK_REQUEST:
        case typesTask.UPDATE_TASK_REQUEST:
        case typesTask.DELETE_TASK_REQUEST:
            return {
                ...state,

                loading: {
                    ...state.loading,
                    tasks: true,
                },

                errors: {
                    ...state.errors,

                    tasks: null,
                },
            };


        // LOADING FALSE SUCCESS
        case typesTask.FETCH_TASKS_SUCCESS:
        case typesTask.CREATE_TASK_SUCCESS:
        case typesTask.UPDATE_TASK_SUCCESS:
        case typesTask.DELETE_TASK_SUCCESS:
            return {
                ...state,

                loading: {
                    ...state.loading,

                    tasks: false,
                },
            };

        // FAILURE
       
        case typesTask.FETCH_TASKS_FAILURE:
        case typesTask.CREATE_TASK_FAILURE:
        case typesTask.UPDATE_TASK_FAILURE:
        case typesTask.DELETE_TASK_FAILURE:
            return {
                ...state,

                loading: {
                    ...state.loading,

                    tasks: false,
                },

                errors: {
                    ...state.errors,
                    tasks:
                        action.payload,
                },
            };

        default:
            return state;
    }
};