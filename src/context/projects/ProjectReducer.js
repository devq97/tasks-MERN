import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  PROJECT_SELECTED
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        showForm: true
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        showForm: false,
        errorForm: false
      };

    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true
      };

    case PROJECT_SELECTED:
      return {
        ...state,
        errorForm: true
      };

    default:
      return state
  }
}