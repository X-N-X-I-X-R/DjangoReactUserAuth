import React, { useState } from 'react';
import Login from '../Login';
import RegistrationForm from '../RegistrationForm';
import { useNavigate } from 'react-router-dom';

const Authentication = (props) => { 
    const navigate = useNavigate();
    const [logged, setLogged] = useState(false); // State variable to track if user is logged in or not
    const [username, setUsername] = useState(''); // State variable to store the username
    const [showLogin, setShowLogin] = useState(true); // State variable to determine whether to show login or registration form

    // Function to handle showing the login form
    const handleShowLogin = () => {
        setShowLogin(true);
    };

    // Function to handle showing the registration form
    const handleShowRegister = () => {
        setShowLogin(false);
    };

    // Function to handle user logout
    const doLogout = () => {
        sessionStorage.setItem('token', ''); // Clear the token from session storage
        setLogged(false); // Set logged state to false
        setUsername(''); // Clear the username
        navigate('/logout'); // Navigate to the home page
    };

    return (
        <div>
            {logged && (
                <div style={{ backgroundColor: 'green' }}>
                    {username} is Connected ...
                    <button onClick={doLogout}>Logout</button>
                </div>
            )}

            <div className="App">
                <button onClick={handleShowLogin}>Login</button>
                <button onClick={handleShowRegister}>Register</button>
                {showLogin ? (
                    <Login
                        logged={setLogged}
                        setUsername={setUsername}
                    />
                ) : (
                    <RegistrationForm
                        logged={setLogged}
                        setUsername={setUsername}
                    />
                )}
            </div>
        </div>
    );
};

export default Authentication;
