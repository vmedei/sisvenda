import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Store/UserSlice';

export const useLogin = () => {
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
                }, 2200); // 2 segundos de espera
            }
        })
    }

    return { email, setEmail, password, setPassword, loading, error, handleLogin, successMessage };
}
