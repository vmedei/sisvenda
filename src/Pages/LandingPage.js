import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css'
import logo from '../components/images/logo_completa1.png'

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
                <div class="bg-landing-page">
                    <button class="btn-landing-page" onClick={handleLogout}>LOGOUT</button>
                    <img class="img-landing-page" src={logo} alt="icone"></img>
                    <div class="card-landing-page">
                        {logoutMessage && (
                            <>
                                <br />
                                <div>{logoutMessage}</div>
                            </>
                        )}

                        <h3>Olá, {user.firstName} {user.lastName}</h3>
                        <div>
                            <p>Seu e-mail é</p>
                            <h4>{user.email}</h4>
                        </div>

                        <Link class="btn" to='/vendas'>GERENCIAR VENDAS</Link>
                    </div>
                </div>
            </>
        ):(
            <>
                <div>Usuário não logado. Favor, realizar login</div>
                <Link to='/login'>LOGIN</Link>
            </>        
        )}
    </>
  )
}

export default LandingPage