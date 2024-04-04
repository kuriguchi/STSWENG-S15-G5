import logo from '../../assets/logo2.svg';
import userIcon from '../../assets/usericon.svg';
import passIcon from '../../assets/passicon.svg';

//import dependencies
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
const Login = () => {
    const [isUserValid, setIsUserValid] = useState(false);
    const [isPassValid, setIsPassValid] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if(isUserValid && isPassValid){
            navigate('/dashboard');
        } else {
            alert('Incorrect User or Password.');
        }
    };

    const validateUser = (e) => {
        const user = e.target.value;

        if(user == 'root'){
            setIsUserValid(true);
        } else {
            setIsUserValid(false);
        }
    };

    const validatePass = (e) => {
        const pass = e.target.value;

        if(pass == 'stswengg5'){
            setIsPassValid(true);
        } else {
            setIsPassValid(false);
        }
    };

    useEffect (() => {
        console.log('VALID USER: ', isUserValid);
        console.log('VALID PASS: ', isPassValid);

    })

    return (
        <main>
            <div className="background-wrapper">
                <div className="login-container">
                    <form action="" className="login-form">
                        <img src={logo} alt="logo" className="logo" />
                        <h2 className="login-heading">CONTROL PANEL SIGN IN</h2>
                        <div className="input-box">
                            <img src={userIcon} className="icon" />
                            <input type="text" placeholder="admin" required onChange={validateUser}/>
                        </div>

                        <div className="input-box">
                            <img src={passIcon} className="icon" />
                            <input type="password" placeholder="passkey" required onChange={validatePass} />
                        </div>
                        <button className="login-button" onClick={handleSubmit}>
                            SIGN IN
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
