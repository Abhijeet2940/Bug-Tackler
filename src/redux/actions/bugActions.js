import {
  ADD_BUG,
  DELETE_BUG,
  EDIT_BUG,
  TOGGLE_BUG_STATUS,
  SET_FILTER,
  SET_FORM_TITLE,
  SET_FORM_DESCRIPTION,
  SET_FORM_SEVERITY,
  RESET_FORM,
  SET_SEARCH_TERM,
  CLEAR_SEARCH,
  CLEAR_ALL_BUGS,
} from '../actionTypes';

// Bug Action Creators
export const addBug = (payload) => ({
  type: ADD_BUG,
  payload,
});
export const editBug = (bugId, updatedBug) => ({
  type: EDIT_BUG,
  payload: { bugId, updatedBug },
});

export const deleteBug = (bugId) => ({
  type: DELETE_BUG,
  payload: bugId,
});

export const toggleBugStatus = (bugId) => ({
  type: TOGGLE_BUG_STATUS,
  payload: bugId,
});

// Filter Action Creators
export const setFilter = (filterType) => ({
  type: SET_FILTER,
  payload: filterType,
});

// Form Action Creators
export const setFormTitle = (title) => ({
  type: SET_FORM_TITLE,
  payload: title,
});

export const setFormDescription = (description) => ({
  type: SET_FORM_DESCRIPTION,
  payload: description,
});

export const setFormSeverity = (severity) => ({
  type: SET_FORM_SEVERITY,
  payload: severity,
});

export const resetForm = () => ({
  type: RESET_FORM,
});

// Search Action Creators
export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

export const clearAllBugs = () => ({
  type: CLEAR_ALL_BUGS,
});
