import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css'
import '../../App.css'
import logo from '../../components/images/logo_completa1.png'
import { useAuth } from '../../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {

    const { user, handleLogout, logoutMessage } = useAuth();

    return (
        <>
            {user ? (
                <>
                    <div className="bg-page">
                        <button className="btn-logout" onClick={handleLogout}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </button>
                        <img className="img-landing-page" src={logo} alt="icone"></img>
                        <div className="card-landing-page">

                            <h3>Olá, {user.firstName} {user.lastName}</h3>
                            <div>
                                <p>Seu e-mail é</p>
                                <h4>{user.email}</h4>
                            </div>

                            <Link className="btn" to='/vendas'>GERENCIAR VENDAS</Link>
                            <div></div>
                        </div>
                    </div>
                    {logoutMessage && (
                        <div className='msgLogout'>{logoutMessage}</div>
                    )}
                </>
            ) : (
                <>
                    <div className="bg-page">Usuário não logado. Favor, realizar login</div>
                    <Link className="btn link-voltar" to='/login'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </Link>
                </>
            )}
        </>
    )
}

export default LandingPage