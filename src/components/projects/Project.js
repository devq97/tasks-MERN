import React, {useContext} from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Project = ({project}) => {

  // Get state of projects
  const projectsContext = useContext(ProjectContext);
  const { selectedProject } = projectsContext;

  // Get state of tasks
  const tasksContext = useContext(TaskContext);
  const { getTasks } = tasksContext;

  // Adding actual project
  const selectProject = id => {
    selectedProject(id);

    getTasks(id);
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  )
};

export default Project;