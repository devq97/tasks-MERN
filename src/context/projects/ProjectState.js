import React, {useReducer} from 'react';

import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import axiosClient from "../../middlewares/axios";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  PROJECT_SELECTED,
  DELETE_PROJECT,
  PROJECT_ERROR
} from '../../types';

/**
 * Project state
 * @param props
 * @returns {*}
 * @constructor
 */
const ProjectState = props => {

  const initialState = {
    projects: [],
    showForm: false,
    errorForm: false,
    project: null,
    message: null
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
  const getProjects = async () => {

    try {

      const response = await axiosClient.get('/api/projects');
      dispatch({
        type: GET_PROJECTS,
        payload: response.data.projects
      })

    } catch (error) {

      const alert = {
        msg: 'Error',
        category: 'alerta-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })

    }
  };

  /**
   * Add new Project
   * @param project
   */
  const addProject = async project => {

    try {

      const response = await axiosClient.post('/api/projects', project);
      dispatch({
        type: ADD_PROJECT,
        payload: response.data
      })

    } catch (error) {

      const alert = {
        msg: 'Error',
        category: 'alerta-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })

    }
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
   * @param id
   */
  const selectedProject = id => {
    dispatch({
      type: PROJECT_SELECTED,
      payload: id
    })
  };

  /**
   * Delete a project
   * @param id
   */
  const deleteProject = async id => {
    try {

      await axiosClient.delete(`/api/projects/${id}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      })

    } catch (error) {

      const alert = {
        msg: 'Error',
        category: 'alerta-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })

    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        showForm: state.showForm,
        errorForm: state.errorForm,
        project: state.project,
        message: state.message,
        handleShowForm: handleShowForm,
        getProjects: getProjects,
        addProject: addProject,
        showError: showError,
        selectedProject: selectedProject,
        deleteProject: deleteProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )

};

export default ProjectState;