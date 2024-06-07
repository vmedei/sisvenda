import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function getUser(){
    let user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
        return user;
    } else {
        user = null;
    }
}

const LandingPage = () => {

    const [user, setUser] = useState(getUser());
    const navigate = useNavigate();
    const [logoutMessage, setLogoutMessage] = useState('');

    useEffect(() => {
        const storedUser = getUser();
        setUser(storedUser);
      }, []);


    const handleLogout = () => {
        setLogoutMessage('Logout! Redirecionando...');
        setTimeout(() => {
            setLogoutMessage('');
            localStorage.removeItem('user');
            setUser(null);
            navigate('/');
        }, 2000); // 2 segundos de espera
    }

  return (
    <>
        {user ? (
            <>
                <h4>Olá, {user.firstName} {user.lastName}</h4>
                <h5>{user.email}</h5>
                <button onClick={handleLogout}>LOGOUT</button>
                {logoutMessage && (
                    <div>{logoutMessage}</div>
                )}
            </>
        ):(
            <Link to='/login'>LOGIN</Link>
        )}
    </>
  )
}

export default LandingPage