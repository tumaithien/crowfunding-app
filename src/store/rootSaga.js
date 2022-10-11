import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/auth-saga";
import newSaga from "./campaign/saga";
export default function* rootSaga() {
  yield all([fork(authSaga), fork(newSaga)]);
}
