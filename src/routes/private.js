import React, {useContext, useEffect} from "react";
import { Route, Redirect } from 'react-router-dom';
import AuthContext from "../context/auth/AuthContext";

const Private = ({ component: Component, ...props }) => {

  const authContext = useContext(AuthContext);
  const { login, loading, userLogged } = authContext;

  useEffect( () => {
    userLogged();
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