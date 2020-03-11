import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Form from "../tasks/Form";
import List from "../tasks/List";

const Projects = () => {
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