import React, {useReducer} from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

import {
  TASK_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  ADD_TASK_TO_EDIT,
  EDIT_TASK,
  CLEAN_TASK_TO_EDIT
} from "../../types";
import axiosClient from "../../middlewares/axios";

/**
 * Task state
 * @param props
 * @returns {*}
 * @constructor
 */
const TaskState = props => {

  const initialState = {
    taskProject: [],
    error: false,
    taskToEdit: null
  };

  // Create Dispatch and State
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  /**
   * Get tasks of a project
   * @param project
   */
  const getTasks = async project => {

    try {

      const response = await axiosClient.get('/api/tasks', { params: { project } });
      dispatch({
        type: TASK_PROJECT,
        payload: response.data.tasks
      })

    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Add task to selected project
   * @param task
   */
  const addTask = async task => {
    try {

      const response = await axiosClient.post('/api/tasks', task);
      dispatch({
        type: ADD_TASK,
        payload: response.data.task
      });

    } catch (error) {
      console.log(error.response);
    }
  };

  /**
   * Validate error if exists
   */
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  };

  /**
   * Delete task
   * @param id
   */
  const deleteTask = async (id, project) => {
    try {

      await axiosClient.delete(`/api/tasks/${id}`, { params: { project } });
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Edit task
   * @param task
   */
  const editTask = async task => {
    try {
      const response = await axiosClient.put(`/api/tasks/${task._id}`, task);
      dispatch({
        type: EDIT_TASK,
        payload: response.data.task
      });

    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Add task to edit
   * @param task
   */
  const addTaskToEdit = task => {
    dispatch({
      type: ADD_TASK_TO_EDIT,
      payload: task
    })
  };

  /**
   * Clean task to edit
   */
  const cleanTaskToEdit = () => {
    dispatch({
      type: CLEAN_TASK_TO_EDIT
    })
  };

  return (
    <TaskContext.Provider
      value={{
        taskProject: state.taskProject,
        error: state.error,
        taskToEdit: state.taskToEdit,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        addTaskToEdit,
        editTask,
        cleanTaskToEdit
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;
