import { SHOW_ALERT, HIDE_ALERT } from "../../types";

/**
 * Switch reducer
 * @param state
 * @param action
 * @returns {*|{alert: null}|{alert: *}}
 */
export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
       alert: action.payload
      };

    case HIDE_ALERT:
      return {
        alert: null
      };

    default:
      return state;
  }
}