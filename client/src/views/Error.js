import React from 'react';
import { Link } from 'react-router-dom';
import confused from '../img/running-fail.gif'

import styled from '../css/viewsCSS/Error.module.css'

const Error = (props) => {
    return(
        <div className={styled.failWrp}>
            <h1>Hmm...</h1>
            <h3>We've failed</h3>
            <img src={confused} alt="confused gif" />
            <p>Looks like this page doesn't exsist </p>
            <Link to="/" className="button-lg">Home</Link>
        </div>
    )
}

export default Error;