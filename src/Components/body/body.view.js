import React from 'react';
import classNames from 'classnames';
import {useThemeContext} from "../../themeContext";
import styles from './body.module.css';
import WatchButton from "./watchesButtons";
import roseWatch from '../../assets/roseSmallWatch.png';
import whiteWatch from '../../assets/whiteSmallWatch.png';
import blackWatch from '../../assets/blackSmallWatch.png';
import arrowBlackRight from '../../assets/arrowBlackRight.png';
import arrowWhiteRight from '../../assets/arrowWhiteRight.png';
import arrowDownBlack from '../../assets/arrowDownBlack.png';
import arrowDownWhite from '../../assets/arrowDownWhite.png';
import BigWatch from './bigWatch';

const Body = () => {
    const {state} = useThemeContext();
    const textClass = classNames(styles.textContainer, {
        [styles.textContainerWhite]: state.theme.white,
    });
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={textClass}>
                    <div className={styles.title}>
                        Smartwatch
                    </div>
                    <div className={styles.subtitle}>
                        ELEMENT SERIES
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue sed et leo, dignissim odio justo.
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <WatchButton label="Rose">
                        <img src={roseWatch} className={styles.img} />
                    </WatchButton>
                    <WatchButton label="White">
                        <img src={whiteWatch} className={styles.img} />
                    </WatchButton>
                    <WatchButton label="Dark">
                        <img src={blackWatch} className={styles.img} />
                    </WatchButton>
                </div>
                {!state.theme.white && (
                    <span className={styles.arrowDown}>
                        <img src={arrowDownBlack} className={styles.arrowImg}/>
                    </span>
                )}
                {state.theme.white && (
                    <span className={styles.arrowDown}>
                        <img src={arrowDownWhite} className={styles.arrowImg}/>
                    </span>
                )}
            </div>
            <div className={styles.watchImage}>
                <BigWatch/>
            </div>
            {state.theme.white && (
                <span className={styles.arrowRight}>
                    <img src={arrowBlackRight} className={styles.arrowImgRight}/>
                 </span>
            )}
            {!state.theme.white && (
                <span className={styles.arrowRight}>
                    <img src={arrowWhiteRight} className={styles.arrowImgRight}/>
                </span>
            )}
        </div>
    );
};

export default Body;
