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

const initialState = {
  bugs: [],
  filter: 'all',
  searchTerm: '',
  form: {
    title: '',
    description: '',
    severity: 'low',
  },
};

export const bugReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUG:
      return {
        ...state,
        bugs: [action.payload, ...state.bugs],
      };

    case DELETE_BUG:
      return {
        ...state,
        bugs: state.bugs.filter((bug) => bug.id !== action.payload),
      };
      case EDIT_BUG:
        return {
            ...state,
            bugs: state.bugs.map((bug) =>
                bug.id === action.payload.bugId ? { ...bug, ...action.payload.updatedBug } : bug
            ),   
        };
    
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
    
        case CLEAR_SEARCH:
            return {
                ...state,
                searchTerm: '',
            };
    case TOGGLE_BUG_STATUS:
      return {
        ...state,
        bugs: state.bugs.map((bug) =>
          bug.id === action.payload
            ? {
                ...bug,
                status: bug.status === 'open' ? 'closed' : 'open',
              }
            : bug
        ),
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case SET_FORM_TITLE:
      return {
        ...state,
        form: {
          ...state.form,
          title: action.payload,
        },
      };

    case SET_FORM_DESCRIPTION:
      return {
        ...state,
        form: {
          ...state.form,
          description: action.payload,
        },
      };

    case SET_FORM_SEVERITY:
      return {
        ...state,
        form: {
          ...state.form,
          severity: action.payload,
        },
      };

    case RESET_FORM:
      return {
        ...state,
        form: {
          title: '',
          description: '',
          severity: 'low',
        },
      };

    case CLEAR_ALL_BUGS:
        return {
            ...state,
            bugs: [],
            searchTerm: '',
            filter: 'all',
            form:{
                title: '',
                description: '',
                severity: 'low',
            }
        }

    default:
      return state;
  }
};