import React, {useContext} from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const Form = () => {

  // getting state
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  // Validate if selected project is empty
  if (!project) return null;

  // Extract selected project with array destructuring
  const [ selectedProject ] = project;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name..."
            name="name"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
    </div>
  )
};

export default Form;