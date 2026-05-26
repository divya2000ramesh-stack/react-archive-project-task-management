import { all } from "redux-saga/effects";

import taskSaga from "./taskSagas";
import projectsSaga from "./projectSagas";

export default function* rootSaga() {
  yield all([
    taskSaga(),
    projectsSaga(),
  ]);
}