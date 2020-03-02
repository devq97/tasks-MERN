import React, {useContext} from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const Project = ({project}) => {

  // Get state of projects
  const projectsContext = useContext(ProjectContext);
  const { selectedProject } = projectsContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectedProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  )
};

export default Project;