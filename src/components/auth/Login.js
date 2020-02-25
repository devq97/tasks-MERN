import React, { useState } from "react";

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

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign In</h1>
        <form>
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
      </div>
    </div>
  )
};

export default Login;