import {
  FETCH_PROJECTS_REQUEST,

  FETCH_PROJECTS_SUCCESS,

  FETCH_PROJECTS_FAILURE,
} from "../types/projectTypes";


const initialState = {
  byId: {},

  allIds: [],

  loading: false,

  error: null,
};

export const projectsReducer = (
  state = initialState,
  action
) => {

  switch (action.type) {

    // REQUEST
    case FETCH_PROJECTS_REQUEST:

      return {
        ...state,
        loading: true,
        error: null,
      };

    // SUCCESS

    case FETCH_PROJECTS_SUCCESS:

      const byId = {};

      const allIds = [];

      action.payload.forEach(
        (project) => {

          byId[project.id] =
            project;

          allIds.push(
            project.id
          );

        }
      );

      return {
        ...state,

        loading: false,

        byId,

        allIds,
      };

    // FAILURE

    case FETCH_PROJECTS_FAILURE:

      return {
        ...state,

        loading: false,

        error:
          action.payload,
      };


    default:
      return state;
  }
};
