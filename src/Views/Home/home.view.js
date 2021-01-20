import React from 'react';
import NapBar from '../../Components/napBar';
import Body from '../../Components/body';
import styles from './home.module.css';

const Home = () => {
    return(
        <div className={styles.root}>
            <NapBar/>
            <Body/>
        </div>
    );
};

export default Home;
