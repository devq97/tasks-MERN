import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import AlertContext from "../../context/alerts/AlertContext";
import AuthContext from "../../context/auth/AuthContext";

const SignUp = (props) => {

  // Extract Alert context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  // Extract Auth context
  const authContext = useContext(AuthContext);
  const { message, login, signUp } = authContext;

  // Sign_up fail
  useEffect( () => {
    if (login) {
      props.history.push('/projects');
    }

    if (message) {
      showAlert(message.msg, message.category);
    }
  }, [message, login, props.history]);

  //state for sign in
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  // Destructuring user
  const { name, email, password, confirm } = user;

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const onSubmit = e => {
    e.preventDefault();

    // Validate empty fields
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
      showAlert('All fields required', 'alerta-error');
      return;
    }

    // Check validations
    if (password.length < 6) {
      showAlert('Password must be minimum 6 characters', 'alerta-error');
      return;
    }

    if (password !== confirm) {
      showAlert('Passwords must be equals', 'alerta-error');
      return;
    }

    signUp({
      name,
      email,
      password
    });

  };

  return (
    <div className="form-usuario">
      { alert ?
        (
          <div className={`alerta ${alert.category}`}>{alert.msg}</div>
        ) :
          null
      }
      <div className="contenedor-form sombra-dark">
        <h1>Sign Up</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
            />
          </div>

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
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repeat your password"
              value={confirm}
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign Up"
            />
          </div>
        </form>

        <Link to={'/'} className="enlace-cuenta">
          Return to Sign In
        </Link>
      </div>
    </div>
  )
};

export default SignUp;