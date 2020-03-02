import React, {useReducer} from 'react';
import {v4} from "uuid";

import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  PROJECT_SELECTED
} from '../../types';

const ProjectState = props => {

  const PROJECTS = [
    { id: 1, name: 'Online Shop' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Web Design' }
  ];

  const initialState = {
    projects: [],
    showForm: false,
    errorForm: false,
    project: null
  };

  //Dispatch for execute actions
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  /**
   * CRUD Functions
   */
  const handleShowForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  };

  /**
   * Get projects
   */
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: PROJECTS
    })
  };

  /**
   * Add new Project
   * @param project
   */
  const addProject = project => {
    project.id = v4();

    // Adding the project on state
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  };

  /**
   * Validate form by errors
   */
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM
    })
  };

  /**
   * Select project that user choose
   * @param project
   */
  const selectedProject = id => {
    dispatch({
      type: PROJECT_SELECTED,
      payload: id
    })
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        showForm: state.showForm,
        errorForm: state.errorForm,
        project: state.project,
        handleShowForm: handleShowForm,
        getProjects: getProjects,
        addProject: addProject,
        showError: showError,
        selectedProject: selectedProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )

};

export default ProjectState;