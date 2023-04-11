import { all, fork } from "redux-saga/effects";
import { watchGetBooks } from "../features/HomePage/HomeBooksSaga";
import { watchGetBookDetails } from "../features/BookDetails/bookDetailsSaga";

const rootSaga = function* () {
  yield all([
    fork(watchGetBooks),
    fork(watchGetBookDetails)
  ]);
};

export default rootSaga;