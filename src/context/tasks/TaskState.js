import React, {useReducer} from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

import {
  TASK_PROJECT
} from "../../types";

const TaskState = props => {
  const initialState = {
    tasks: [
      { name: 'Choose Platform', status: true, projectID: 1 },
      { name: 'Choose Colors', status: false, projectID: 2 },
      { name: 'Choose Pay Platforms', status: false, projectID: 3 },
      { name: 'Choose Hosting', status: true, projectID: 4 },
      { name: 'Choose Platform', status: true, projectID: 1 },
      { name: 'Choose Colors', status: false, projectID: 2 },
      { name: 'Choose Pay Platforms', status: false, projectID: 3 },
      { name: 'Choose Hosting', status: true, projectID: 4 },
      { name: 'Choose Platform', status: true, projectID: 1 },
      { name: 'Choose Colors', status: false, projectID: 2 },
      { name: 'Choose Pay Platforms', status: false, projectID: 3 },
      { name: 'Choose Hosting', status: true, projectID: 4 },
      { name: 'Choose Hosting', status: true, projectID: 3 },
    ],
    taskProject: null
  }

  // Create Dispatch and State
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Create Functions


  // Get tasks of a project
  const getTasks = projectID => {
    dispatch({
      type: TASK_PROJECT,
      payload: projectID
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        taskProject: state.taskProject,
        getTasks: getTasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;