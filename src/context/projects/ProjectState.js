import React, {useReducer} from 'react';

import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";

const ProjectState = props => {
  const initialState = {
    showForm: false
  };

  //Dispatch for execute actions
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Functions CRUD

  return (
    <ProjectContext.Provider
      value={{
        showForm: state.showForm
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )

};

export default ProjectState;