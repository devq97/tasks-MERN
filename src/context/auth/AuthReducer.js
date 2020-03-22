import {
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  LOGOUT,
  GET_USER
} from "../../types";

/**
 * Switch reducer
 * @param state
 * @param action
 * @returns {{login: boolean, message: null, loading: boolean}|{login: boolean, loading: boolean, user: *}|{login: null, message: *, loading: boolean, user: null, token: null}|*}
 */
export default (state, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        login: true,
        message: null,
        loading: false
      }
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        login: null,
        message: action.payload,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        login: true,
        user: action.payload,
        loading: false
      }

    default:
      return state;
  }
}