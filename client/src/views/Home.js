import React from 'react';
import styled from '../css/viewsCSS/Home.module.css';

const Home = (event) => {
    return(
        <>
        <div className={styled.banner}>
            <div className={styled.txtwrp}>
                <h1>iRun</h1>
                <div className={styled.subtitle}>Site about running: fuleing, racing and stuff, reciepces </div>
            </div>    
        </div>
            <div className={styled.container}>
                
            </div>
        </>
    )
}

export default Home;