import { useReducer } from 'react';
import monthAction from './types';

const initialState = {
    theme: {
        white: false,
    }
};

const monthReducer = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
        case monthAction.THEME__WHITE:
            newState.theme.white = true;
            return newState;
        case monthAction.THEME__DARK:
            newState.theme.white = false;
            return newState;
        default:
            return state;
    }
};

export default () => useReducer(monthReducer, initialState);
