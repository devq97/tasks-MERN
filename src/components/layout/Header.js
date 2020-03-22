import React, {useContext, useEffect} from "react";
import AuthContext from "../../context/auth/AuthContext";

const Header = () => {

  // Extract auth info
  const authContext = useContext(AuthContext);
  const { user, userLogged } = authContext;

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
        <a href="#!">Sign Out</a>
      </nav>

    </header>
  )
};

export default Header;