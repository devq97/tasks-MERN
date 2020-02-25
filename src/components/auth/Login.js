import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  //state for sign in
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  // Destructuring user
  const { email, password } = user;

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const onSubmit = e => {
    e.preventDefault();

    //Validate empty fields
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign In</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign"
            />
          </div>
        </form>

        <Link to={'/new-account'} className="enlace-cuenta">
          Sign Up
        </Link>
      </div>
    </div>
  )
};

export default Login;