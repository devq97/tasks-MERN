import React, { useReducer } from "react";
import AlertReducer from "./AlertReducer";
import AlertContext from "./AlertContext";

import { SHOW_ALERT, HIDE_ALERT } from "../../types";

/**
 * State for handling alerts
 * @param props
 * @returns {*}
 * @constructor
 */
const AlertState = props => {

  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  /**
   * Show alert
   * @param msg
   * @param category
   */
  const showAlert = (msg, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        msg,
        category
      }
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT
      });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );

};

export default AlertState;
