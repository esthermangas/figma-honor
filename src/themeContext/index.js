import React, { createContext, useContext } from 'react';
import useThemeReducer from './reducer';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useThemeReducer();
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const { state, dispatch } = useContext(ThemeContext);

    return {
        state,
        dispatch,
    };
};
