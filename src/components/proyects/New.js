import React, {Fragment, useContext, useState} from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const New = () => {

  // Get form state
  const projectsContext = useContext(ProjectContext);
  const { showForm, errorForm, handleShowForm, addProject, showError } = projectsContext;

  // Project State
  const [project, setProject] = useState({
    name: ''
  });

  // Destructuring name of project
  const { name } = project;

  /**
   * Read name of project
   * @param e
   */
  const onChangeProject = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  };

  /**
   * When user send a project
   */
  const onSubmitProject = e => {
    e.preventDefault();

    // Validate project
    if (name === '') {
      showError(true);
      return;
    }

    // Adding to state
    addProject(project);
    // Clean form
    setProject({
      name: ''
    })
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => handleShowForm()}
      >
        New Project
      </button>

      {
        showForm ?
          (
            <form
              className="formulario-nuevo-proyecto"
              onSubmit={onSubmitProject}
            >
              <input
                type="text"
                className="input-text"
                placeholder="Project Name"
                name="name"
                value={name}
                onChange={onChangeProject}
              />

              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Add Project"
              />
            </form>
          )
        :
          null
      }

      {
        errorForm ?
          <p className="mensaje error">
            Project name is required.
          </p>
        :
          null
      }
    </Fragment>
  )
};

export default New;