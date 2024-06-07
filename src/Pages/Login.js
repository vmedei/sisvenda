import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Store/UserSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    //redux states
    const {loading, error} = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        let userCredentials={
            email, password
        }
        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload){
                setEmail('');
                setPassword('');
                setSuccessMessage('Login bem-sucedido! Redirecionando...');
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/landing-page');
                }, 2000); // 2 segundos de espera
            }
        })
    }

  return (
    <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label>Email</label>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button type='submit'>
            {loading ? 'Loading...' : 'Login'}
        </button>
        {error && (
            <div>{error}</div>
        )}
        {successMessage && (
            <div>{successMessage}</div>
        )}
    </form>
  )
}

export default Login