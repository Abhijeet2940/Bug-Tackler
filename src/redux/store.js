import { createStore } from 'redux';
import { bugReducer } from './reducers/bugReducer';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localstorage';

// Load initial state from localStorage
const savedState = loadFromLocalStorage();

// Default initial state structure
const defaultState = {
  bugs: [],
  filter: 'all',
  searchTerm: '',
  form: {
    title: '',
    description: '',
    severity: 'low',
  },
};

// Merge saved state with default state to ensure all properties exist
const persistedState = savedState ? { ...defaultState, ...savedState } : defaultState;

// Create store with merged persisted state
export const store = createStore(bugReducer, persistedState);

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
