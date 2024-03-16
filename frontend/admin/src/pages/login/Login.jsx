import logo from '../../assets/logo2.svg';
import userIcon from '../../assets/usericon.svg';
import passIcon from '../../assets/passicon.svg';

import './Login.css';
const Login = () => {
    return (
        <main>
            <div className="background-wrapper">
                <div className="login-container">
                    <form action="" className="login-form">
                        <img src={logo} alt="logo" className="logo" />
                        <h2 className="login-heading">CONTROL PANEL SIGN IN</h2>
                        <div className="input-box">
                            <img src={userIcon} className="icon" />
                            <input type="text" placeholder="admin" required />
                        </div>

                        <div className="input-box">
                            <img src={passIcon} className="icon" />
                            <input type="password" placeholder="passkey" required />
                        </div>
                        <button type="submit" className="login-button">
                            SIGN IN
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
