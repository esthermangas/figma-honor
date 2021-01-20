import React from 'react';
import styles from './App.module.css';
import Home from './Views/Home';
import {useThemeContext} from './themeContext';
import classNames from 'classnames';

function App() {
    const {state} = useThemeContext();
    const appClasses = classNames(styles.app, {
        [styles.appWhite]: state.theme.white
    });
  return (
          <div className={appClasses}>
              <Home/>
          </div>
  );
}

export default App;
