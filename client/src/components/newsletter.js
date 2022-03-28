import React, { useState } from 'react';
import axios from 'axios';
import styled from '../css/componentsCSS/newsletter.module.css'

const Newsletter = (props) => {
    const [dbError,setDBError] = useState({ })
    var errorSize = Object.keys(dbError).length;
        
    const [email,setEmail] = useState({})
    const [emailError,setEmailError] = useState(false)

    function ValidateEmail(event) {
        setEmail({[event.target.name]:event.target.value})

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
            setEmailError(true)
        }else{
            setEmailError(false)
        }
    }

    const onNewsLetterSumbit = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:8000/api/newsletter${email.email}`)
            .then(res =>  { 
                console.log(res.data)
                // history.push("/pirates"); 
                // axios.post('http://localhost:8000/api/create/newsletter', email)
                // .then(res =>  { 
                //     // history.push("/pirates"); 
                // })
                // .catch(err => {
                //     console.log(err.response)
                //     setDBError(err.response.data.error.errors)
                // });
            })
            .catch(err => {
                console.log(err.response)
                setDBError(err.response.data.error.errors)
            });
    }
    return(
        <>
            <h5>Newsletter</h5>
            <p>Sign up for out monthly newsletter</p>
            <form onSubmit={onNewsLetterSumbit} className={styled.form}>
                {
                    errorSize > 1 ? <><h4>Entries Required: </h4> {Object.keys(props.dbError).join(', ')}</> : ""
                }
                <div>
                    <input type="email" name="email" placeholder="example@email.com" onChange={ValidateEmail} />
                    {
                        emailError ? "" : <span>Please enter an email</span>
                    }
                </div>
                {
                    emailError === true ?  <input type="submit" value="submit" className={styled.submit}/> : <input type="submit" value="submit" className={styled.disabled} disabled />
                }
                    
            </form>
        </>
    )
}

export default Newsletter;