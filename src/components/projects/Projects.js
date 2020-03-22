import React, {useContext, useEffect} from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Form from "../tasks/Form";
import List from "../tasks/List";
import AuthContext from "../../context/auth/AuthContext";

const Projects = () => {

  // Extract auth info
  const authContext = useContext(AuthContext);
  const { userLogged } = authContext

  useEffect( () => {
    userLogged();
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Header />
        <main>
          <Form />
          <div className="contenedor-tareas">
            <List />
          </div>
        </main>
      </div>
    </div>
  )
};

export default Projects;