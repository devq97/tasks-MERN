import React, {useReducer} from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

import {
  TASK_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CHANGE_TASK_STATUS
} from "../../types";

const TaskState = props => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Choose Platform', status: true, projectID: 1 },
      { id: 2, name: 'Choose Colors', status: false, projectID: 2 },
      { id: 3, name: 'Choose Pay Platforms', status: false, projectID: 3 },
      { id: 4, name: 'Choose Hosting', status: true, projectID: 4 },
      { id: 5, name: 'Choose Platform', status: true, projectID: 1 },
      { id: 6, name: 'Choose Colors', status: false, projectID: 2 },
      { id: 7, name: 'Choose Pay Platforms', status: false, projectID: 3 },
      { id: 8, name: 'Choose Hosting', status: true, projectID: 4 },
      { id: 9, name: 'Choose Platform', status: true, projectID: 1 },
      { id: 10, name: 'Choose Colors', status: false, projectID: 2 },
      { id: 11, name: 'Choose Pay Platforms', status: false, projectID: 3 },
      { id: 12, name: 'Choose Hosting', status: true, projectID: 4 },
      { id: 13, name: 'Choose Hosting', status: true, projectID: 3 },
    ],
    taskProject: null,
    error: false
  };

  // Create Dispatch and State
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Get tasks of a project
  const getTasks = projectID => {
    dispatch({
      type: TASK_PROJECT,
      payload: projectID
    })
  };

  // Add task to selected project
  const addTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  };

  // Validate error if exists
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  };

  // Delete task
  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  };

  // Change task state
  const changeTaskStatus = task => {
    dispatch({
      type: CHANGE_TASK_STATUS,
      payload: task
    })
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        taskProject: state.taskProject,
        error: state.error,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskStatus
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;
