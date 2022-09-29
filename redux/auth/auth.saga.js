import AuthService from "../../repositories/AuthenticationRepository";
import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  cancel,
  cancelled,
} from "redux-saga/effects";
import Router from "next/router";
import actionTypes from "./auth.actionTypes";
import {
  loginSuccess,
  logOutSuccess,
  depositHistorySuccess,
  languageChangeSuccess,
} from "./auth.actions";
import { appName } from "../../repositories/genericRepository";
import notification from "../../components/notification/Notification";

function* userSignUpSaga(action) {
  try {
    const { data } = yield call(AuthService.userRegister, action.payload);
    notification.showSuccessAlert("Account Created Successfully");
    Router.push("/login");
    action.callback();
  } catch (error) {
    console.log("Error: ", error);
    notification.showErrorAlert(error);
    action.callback();
  } finally {
    yield cancel();
  }
}

function* loginSaga(action) {
  try {
    let _token;
    let _user;

    const { user, token } = yield call(AuthService.login, action.payload);

    _user = user;
    _token = token;

    yield put(loginSuccess(_user, _token));

    localStorage.setItem(`token`, _token);
    notification.showSuccessAlert("Welcome Back Logged In successfully");
    action.callback();
    Router.push("/dashboard/deposit");
  } catch (error) {
    notification.showErrorAlert(error);
  } finally {
    yield cancel();
  }
}

function* logOutSaga(action) {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    yield call(AuthService.logout);
    localStorage.removeItem(`token`);
    notification.showSuccessAlert("Logout Successfully");
    action.callback();
    Router.push("/login");
    yield put(logOutSuccess());
  } catch (err) {
    notification.showErrorAlert(err);
    console.log(err);
  }
}

function* depositSaga(action) {
  try {
    const { data } = yield call(AuthService.deposit, action.payload);
    notification.showSuccessAlert("Deposit Created Successfully");
    action.callback();
  } catch (error) {
    console.log(error);
    notification.showErrorAlert(error);
    action.callback();
  } finally {
    yield cancel();
  }
}

function* withdrawSaga(action) {
  try {
    const { data } = yield call(AuthService.withdraw, action.payload);
    notification.showSuccessAlert("Withdraw Request Created Successfully");
    action.callback();
  } catch (error) {
    console.log(error);
    notification.showErrorAlert(error);
    action.callback();
  } finally {
    yield cancel();
  }
}
function* depositHistorySaga() {
  try {
    const { data } = yield call(AuthService.depositHistory);
    yield put(depositHistorySuccess(data));
  } catch (error) {
    console.log(error);
    notification.showErrorAlert(error);
  } finally {
    yield cancel();
  }
}

function* profileUpdateSaga(action) {
  try {
    const { message } = yield call(AuthService.profileUpdate, action.payload);
    notification.showSuccessAlert("Profile Updated Successfully");
    action.callback();
  } catch (error) {
    notification.showErrorAlert(error);
    action.callback();
  } finally {
    yield cancel();
  }
}

function* languageChangeSaga(action) {
  try {
    const { message } = yield call(AuthService.languageChange, action.payload);
    yield put(languageChangeSuccess(message));
  } catch (error) {
    console.log(error);
    notification.showErrorAlert(error);
  } finally {
    yield cancel();
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.USER_SIGNUP_REQUEST, userSignUpSaga)]);
  yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
  yield all([takeEvery(actionTypes.DEPOSIT_REQUEST, depositSaga)]);
  yield all([takeEvery(actionTypes.WITHDRAW_REQUEST, withdrawSaga)]);
  yield all([
    takeEvery(actionTypes.DEPOSIT_HISTORY_REQUEST, depositHistorySaga),
  ]);
  yield all([takeEvery(actionTypes.PROFILE_UPDATE, profileUpdateSaga)]);
  yield all([
    takeEvery(actionTypes.LANGUAGE_CHANGE_REQUEST, languageChangeSaga),
  ]);
}
