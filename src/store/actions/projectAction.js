import {
  FETCH_PROJECTS_REQUEST,

  FETCH_PROJECTS_SUCCESS,

  FETCH_PROJECTS_FAILURE,
} from "../types/projectTypes";


// REQUEST

export const fetchProjectsRequest =
  () => ({
    type:
      FETCH_PROJECTS_REQUEST,
  });


// SUCCESS

export const fetchProjectsSuccess =
  (projects) => ({
    type:
      FETCH_PROJECTS_SUCCESS,

    payload: projects,
  });


// FAILURE

export const fetchProjectsFailure =
  (error) => ({
    type:
      FETCH_PROJECTS_FAILURE,

    payload: error,
  });