import {
  TASK_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  ADD_TASK_TO_EDIT,
  EDIT_TASK,
  CLEAN_TASK_TO_EDIT
} from "../../types";

/**
 * Switch reducer
 * @param state
 * @param action
 * @returns {*|{taskProject: *}|{tasks: *}|{taskToEdit: *}|{error: boolean, tasks: *[]}|{taskToEdit: null}|{error: boolean}}
 */
export default (state, action) => {
  switch (action.type) {
    case TASK_PROJECT:
      return {
        ...state,
        taskProject: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        taskProject: [action.payload, ...state.taskProject],
        error: false
      };
    case VALIDATE_TASK:
      return {
        ...state,
        error: true
      };
    case DELETE_TASK:
      return {
        ...state,
        taskProject: state.taskProject.filter( task => task._id !== action.payload)
      };
    case EDIT_TASK:
      return {
        ...state,
        taskProject: state.taskProject.map(task => task._id === action.payload._id ? action.payload : task)
      };
    case ADD_TASK_TO_EDIT:
      return {
        ...state,
        taskToEdit: action.payload
      };
    case CLEAN_TASK_TO_EDIT:
      return {
        ...state,
        taskToEdit: null
      };

    default:
      return state;
  }
}
