import React from 'react';
import styles from './button.module.css';
import {useThemeContext} from '../../themeContext';
import classNames from 'classnames';
const Button = (props) => {
    const {variant, label, onClick} = props;
    const {state} = useThemeContext();
    const buttonClass = classNames(styles.button, {
        [styles.buttonWhite]: state.theme.white,
    });
    const textClass = classNames({
        [styles.buttonText]: !state.theme.white,
        [styles.buttonWhiteText]: state.theme.white,
        [styles.buttonRoseText]: variant === 'rose'
    });
    const buttonStyle = {};

    if(variant === 'rose'){
        buttonStyle.backgroundColor = "#F29494";
    }
    return (
        <div style={buttonStyle} className={buttonClass} onClick={onClick}>
            <div className={textClass} >
                {label}
            </div>
        </div>
    );
};

export default Button;
