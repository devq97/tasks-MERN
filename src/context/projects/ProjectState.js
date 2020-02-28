import React, {useReducer} from 'react';

import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import { FORM_PROJECT } from '../../types';


const ProjectState = props => {
  const initialState = {
    PROJECTS: [
      { id: 1, name: 'Online Shop' },
      { id: 2, name: 'Intranet' },
      { id: 3, name: 'Web Design' }
    ],
    showForm: false
  };

  //Dispatch for execute actions
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Functions CRUD
  const handleShowForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.PROJECTS,
        showForm: state.showForm,
        handleShowForm: handleShowForm
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )

};

export default ProjectState;