import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Store/UserSlice';
import { useNavigate } from 'react-router-dom';
import icon from '../components/images/logo_icone.png';
import './Login.css';
import '../App.css'


const Login = () => {

    // states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    //redux states
    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();
        let userCredentials = {
            email, password
        }
        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                setSuccessMessage('Login bem-sucedido! Redirecionando...');
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/landing-page');
                }, 3000); // 2 segundos de espera
            }
        })
    }

    return (
        <div class="bg-login">
            <div class="toptext">
                A <span>solução</span> de seus problemas <br />
                como você precisa.
            </div>
            <div class="card-login">
                <div class="login-title">
                    <img src={icon} alt="icone"></img>
                    <h2>Login</h2>
                </div>
                <form onSubmit={handleLogin} class="form">
                    <label class="label">Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>Senha</label>
                    <input class="input" type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type='submit'>
                        {loading ? 'Carregando...' : 'Login'}
                    </button>
                </form>
                {error && (
                    <div class="msg-erro">{error}</div>
                )}
                {successMessage && (
                    <div class="msg-sucess">{successMessage}</div>
                )}
            </div>
        </div>
    )
}

export default Login
