import { all } from "redux-saga/effects";
import AuthSagas from "./auth/auth.saga";

export default function* rootSaga() {
  yield all([AuthSagas()]);
}
