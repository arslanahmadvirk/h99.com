import actionTypes from "./auth.actionTypes";

export const initState = {
  isLoggedIn: false,
  user: null,
  token: null,
  depositHistory: null,
};
function AuthReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...{ isLoggedIn: true, user: action.user, token: action.token },
      };
    case actionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        ...{ isLoggedIn: true, user: action.results },
      };
    case actionTypes.DEPOSIT_HISTORY_SUCCESS:
      return {
        ...state,
        ...{ depositHistory: action.data },
      };
    case actionTypes.LOGOUT_SUCCESS:
      return initState;
    default:
      return state;
  }
}

export default AuthReducer;
