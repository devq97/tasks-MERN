import React, {useContext, useEffect} from "react";
import { Route, Redirect } from 'react-router-dom';
import AuthContext from "../context/auth/AuthContext";

/**
 * HOC to protect routes
 * @param Component
 * @param props
 * @returns {*}
 * @constructor
 */
const Private = ({ component: Component, ...props }) => {

  const authContext = useContext(AuthContext);
  const { login, loading, userLogged } = authContext;

  /**
   * Get user logged
   */
  useEffect( () => {
    userLogged();
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render= {
        props => !login && !loading ?
          (
            <Redirect to='/' />
          )
        :
          (
            <Component {...props} />
          )
      }
    />
  )
};

export default Private;