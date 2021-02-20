// store.js
import React, {createContext, useReducer} from 'react';

const initialState = {user: [],
    type:'',
    error: null};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case 'SET_TYPE':
            return {
                ...state,
                type: action.payload
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
