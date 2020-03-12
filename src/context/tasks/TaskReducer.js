import {
  TASK_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CHANGE_TASK_STATUS
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
    case CHANGE_TASK_STATUS:
      return {
        ...state,
        tasks: state.taskProject.map(task => task.id === action.payload.id ? action.payload : task)
      };

    default:
      return state;
  }
}
