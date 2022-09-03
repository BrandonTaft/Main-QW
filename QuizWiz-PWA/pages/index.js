import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Login(props) {
    const [credentials, setCredentials] = useState({})
    const [message, setMessage] = useState('')
    const router = useRouter()
    const handleLoginChange = (e) => {
        // Stores user input in credentials state
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const handleLoginButton = () => {
        // Submit credentials state to server for authentication
        fetch('http://127.0.0.1:8080/api/login', {
            method: 'POST',
            origin: '*',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(response => response.json())
            // If authenticated, server responds with success == true
            .then(result => {
                if (result.success == true) {
                    // Get token & user data and put it in local storage
                    const token = result.token;
                    localStorage.setItem('jsonwebtoken', token)
                    localStorage.setItem('user_Id', result.user_id)
                    localStorage.setItem('name', result.name)
                    localStorage.setItem('high_score', result.high_score)
                    // Route user to their profile page
                    router.push('profile')
                }
                // Display error message sent from server if success != true
                else {
                    setMessage(result.message)
                }
            })
    };

    return (
        // Render Display
        <div className='login column'>
            <div className="login-title">
                <Image className="logo" src="/QuizWizNav3.png" alt="Logo" height={110} width={250} />
            </div>
            <div className="login-Container column">
                <input className="log-RegText" type="text" name="username" onChange={handleLoginChange} placeholder="User name" />
                <input className="log-RegText" type="password" name="password" onChange={handleLoginChange} placeholder="Password" />
                {message && <p className="message" >{message}</p>}
                <a className="btn log-btn" onClick={handleLoginButton}>Login</a>
                <a href="/register" className="btn log-btn">Register Here</a>
            </div>
            <div className="icon-container" style={{ textAlign: "center" }}>
                <a id="google-btn" className="passport-btn" href="https://damp-spire-28696.herokuapp.com/auth/google">
                    <Image src='/icons/google.png' alt="Login With Google" height={50} width={50} />
                    <div className='btn-text'>Login With Google</div>
                </a>
                <a id="facebook-btn" className="passport-btn" href="https://damp-spire-28696.herokuapp.com/auth/facebook">
                    <Image src='/icons/facebook.png' alt="Login With Facebook" height={50} width={50} />
                    <div className='btn-text'>Login With Facebook</div>
                </a>
                <a id="github-btn" className="passport-btn" href="https://damp-spire-28696.herokuapp.com/auth/github">
                    <Image src='/icons/github.png' alt="Login With Github" height={50} width={50} />
                    <div className='btn-text'>Login With Github</div>
                </a>
            </div>
        </div>
    )
};

export default Login