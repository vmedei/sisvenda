import React from 'react';
import icon from '../../components/images/logo_icone.png';
import './Login.css';
import { useLogin } from './LoginUtils';

/* 
Esta página de login utiliza um hook personalizado (useLogin) para gerenciar o estado do formulário, realizar a autenticação do usuário e exibir mensagens de erro ou sucesso.
*/

const Login = () => {
    const { email, setEmail, password, setPassword, loading, error, handleLogin, successMessage } = useLogin();

    return (

        <div className="bg-login">

            <div className="toptext">
                A <span>solução</span> de seus problemas <br />
                como você precisa.
            </div>

            <div className="card-login">

                <div className="login-title">
                    <img src={icon} alt="icone"></img>
                    <h2>Login</h2>
                </div>

                <form onSubmit={handleLogin} className="form">
                    <label className="label">Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>Senha</label>
                    <input className="input" type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type='submit'>
                        {loading ? 'Carregando...' : 'Login'}
                    </button>
                </form>
                
                {error && (
                    <div className="msg-erro">{error}</div>
                )}
                {successMessage && (
                    <div className="msg-sucess">{successMessage}</div>
                )}
            </div>
        </div>
    )
}

export default Login;
