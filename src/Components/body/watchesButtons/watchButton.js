import React from 'react';
import classNames from 'classnames';
import styles from './watchButton.module.css';
import {useThemeContext} from '../../../themeContext';

const WatchButton = (props) => {
    const {children, label} = props;
    const {state} = useThemeContext();
    const buttonClass = classNames(styles.darkRoot, {
        [styles.whiteRoot]: state.theme.white,
    });
    return (
       <div className={buttonClass}>
           <span className={styles.title}>
               {label}
           </span>
           <div className={styles.subtitle}>
               Element
           </div>
           {children}
       </div>
    );
};

export default WatchButton;
