import React from 'react';
import styles from './napBar.module.css';
import { ReactComponent as LogoDark } from '../../assets/logoDark.svg';
import { ReactComponent as MenuIconDark} from '../../assets/menuIconDark.svg';
import {ReactComponent as MenuIconWhite} from '../../assets/menuIconWhite.svg';
import {ReactComponent as LogoWhite} from '../../assets/logoWhite.svg';
import Button from '../button';
import {useThemeContext} from '../../themeContext';
import themeActions from '../../themeContext/types';
import classNames from 'classnames';

const NapBar = () => {
    const {state, dispatch} = useThemeContext();
    const menuIconClass = classNames({
        [styles.menuIconContainer]: !state.theme.white,
        [styles.menuIconContainerWhite]: state.theme.white
    });
    const handleChangeToDark = () => {
        dispatch({type: themeActions.THEME__DARK})
    };
    const handleChangeToWhite = () => {
        dispatch({type: themeActions.THEME__WHITE})
    };
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.menuIcon}>
                    <div className={menuIconClass}>
                        {!state.theme.white && (
                            <div onClick={handleChangeToWhite}>
                                <MenuIconDark/>
                            </div>)}
                        {state.theme.white && (
                            <div onClick={handleChangeToDark}>
                                <MenuIconWhite/>
                            </div>)}
                    </div>
                </div>
                <div className={styles.logoIcon}>
                    {!state.theme.white && (<LogoDark/>)}
                    {state.theme.white && (<LogoWhite/>)}
                </div>
                <div className={styles.buttonsContainer}>
                    <Button label="Home"/>
                    <Button label="Smartphone"/>
                    <Button label="Store"/>
                    <Button label="Buy Now" variant="rose"/>
                </div>
            </div>
        </div>
    )
};

export default NapBar;
