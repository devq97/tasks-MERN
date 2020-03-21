import {
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  LOGOUT,
  GET_USER
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        login: true,
        message: null
      }

    case SIGN_UP_FAIL:
      return {
        ...state,
        token: null,
        message: action.payload
      }

    default:
      return state;
  }
}