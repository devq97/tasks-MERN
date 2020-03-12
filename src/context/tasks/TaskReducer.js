import {
  TASK_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CHANGE_TASK_STATUS,
  ADD_TASK_TO_EDIT,
  EDIT_TASK,
  CLEAN_TASK_TO_EDIT
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASK_PROJECT:
      return {
        ...state,
        taskProject: state.tasks.filter( task => task.projectID === action.payload)
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
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
        tasks: state.tasks.filter( task => task.id !== action.payload)
      };
    case EDIT_TASK:
    case CHANGE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
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
