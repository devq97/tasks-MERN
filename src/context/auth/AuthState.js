import React, { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";
import axiosClient from "../../middlewares/axios";
import auth from "../../middlewares/auth";

import {
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  LOGOUT,
  GET_USER
} from "../../types";

/**
 * Auth state
 * @param children
 * @returns {*}
 * @constructor
 */
const AuthState = ({children}) => {

  const initialState = {
    token: localStorage.getItem('token'),
    login: null,
    user: null,
    message: null,
    loading: true
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  /**
   * Sing up handler
   * @param data
   * @returns {Promise<void>}
   */
  const signUp = async data => {
    try {

      const response = await axiosClient.post('/api/users', data);

      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: response.data
      });

      userLogged();

    } catch (error) {

      const alert = {
        msg: error.response.data.msg,
        category: 'alerta-error'
      }
      dispatch({
        type: SIGN_UP_FAIL,
        payload: alert
      });

    }
  };

  /**
   * Return user logged
   * @returns {Promise<void>}
   */
  const userLogged = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      auth(token);
    }

    try {

      const response = await axiosClient.get('/api/auth');
      dispatch({
        type: GET_USER,
        payload: response.data
      })

    } catch (error) {
      dispatch({
        type: SIGN_IN_FAIL
      })
    }
  };

  /**
   * Sign in handler
   * @param data
   * @returns {Promise<void>}
   */
  const signIn = async data => {
    try {

      const response = await axiosClient.post('/api/auth', data);
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: response.data
      })

      userLogged();

    } catch (error) {
      let messageError = '';
      if (Array.isArray(error.response.data.msg)) {
        error.response.data.msg.map( error => {
          messageError += error.msg
        });

      } else {
        messageError = error.response.data.msg;
      }

      const alert = {
        msg: messageError,
        category: 'alerta-error'
      }

      dispatch({
        type: SIGN_IN_FAIL,
        payload: alert
      });

    }
  };

  /**
   * Logout
   */
  const logout = () => {
    dispatch({
      type: LOGOUT
    })
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        login: state.login,
        user: state.user,
        message: state.message,
        loading: state.loading,
        signUp,
        signIn,
        userLogged,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );

};

export default AuthState;
