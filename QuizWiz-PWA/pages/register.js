import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Register(props) {
    const [user, setUser] = useState({})
    const [message, setMessage] = useState('')
    const router = useRouter()
    // Stores user input in the user state
    const handleRegisterChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    // Sends server the credentials that are to be added to DB  
    const handleRegisterButton = () => {
        fetch('http://127.0.0.1:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            // Redirect to login page if server replies success === true 
            .then(result => {
                if (result.success) {
                    router.push('/')
                }
                else {
                    // Display error message from server if success != true
                    setMessage(result.message)
                }
            })
    }

    return (
        <div className='login register column'>
            <div className="login-title">
                <Image className="logo" src="/QuizWizNav3.png" alt="Logo" height={110} width={250} />
            </div>
            <h1>REGISTER</h1>
            <div className="login-Container column">
                <input className="log-RegText" type="text" name="username" onChange={handleRegisterChange} placeholder="User name" />
                <input className="log-RegText" type="password" name="password" onChange={handleRegisterChange} placeholder="Password" />
                {message && <p className="message" >{message}</p>}
                <a className="btn log-btn register-btn" onClick={handleRegisterButton}>Register</a>
                <a href="/" className="btn log-btn">Back To Login</a>
            </div>
        </div>
    )
}

export default Register