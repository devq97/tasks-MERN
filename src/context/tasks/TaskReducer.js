import {
  TASK_PROJECT
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASK_PROJECT:
      return {
        ...state,
        taskProject: state.tasks.filter( task => task.projectID === action.payload)
      }

    default:
      return state;
  }
}