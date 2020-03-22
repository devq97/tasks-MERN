import React, {useContext, useEffect} from "react";
import AuthContext from "../../context/auth/AuthContext";

const Header = () => {

  // Extract auth info
  const authContext = useContext(AuthContext);
  const { user, userLogged, logout } = authContext;

  useEffect( () => {
    userLogged();
  }, []);

  return (
    <header className="app-header">
      {
        user ?
          (
            <p className="nombre-usuario">Hello <span>{user.name}</span></p>
          )
        : null
      }

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => logout()}
        >
          Logout
        </button>
      </nav>

    </header>
  )
};

export default Header;