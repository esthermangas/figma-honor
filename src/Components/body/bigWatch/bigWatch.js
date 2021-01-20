import React from 'react';
import bigWatch from '../../../assets/roseSmallWatch.png';
import styles from './bigWatch.module.css';
const BigWatch = () => {

    return(
        <div>
            <img src={bigWatch} className={styles.image}/>
        </div>
    );
};

export default BigWatch;
