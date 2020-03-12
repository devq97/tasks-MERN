import {
  TASK_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK
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

    default:
      return state;
  }
}
