import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
import Newsletter from './newsletter';

const Footer = (props) =>{
    return(
        <footer>
            <div className="container">
                <div className="col-4">
                    <h5>iRun</h5>
                    <p>This is a our missiona nd what we stand for and why we do what we do</p>
                    <div className="socialWrp">
                        <a href="" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>

                <div className="col-4">

                </div>

                <div className="col-4"></div>

                <div className="col-4">
                    <Newsletter />
                </div>
            </div>
        </footer>
    )
}

export default Footer;