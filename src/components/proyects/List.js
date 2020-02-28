import React from "react";
import Project from "./Project";

const List = () => {

  const PROJECTS = [
    {name: 'Online Shop'},
    {name: 'Intranet'},
    {name: 'Web Design'}
  ];

  return (
    <ul className="listado-proyectos">
      {PROJECTS.map( project => (
        <Project
          project={project}
        />
      ))}
    </ul>
  )
};

export default List;