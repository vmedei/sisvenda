import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function getUser() {
    let user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
        return user;
    } else {
        user = null;
    }
}

export function logoutUser() {
    localStorage.removeItem('user');
}

export function useAuth() {
    const navigate = useNavigate();
    const [user, setUser] = useState(getUser());
    const [logoutMessage, setLogoutMessage] = useState('');

    const handleLogout = () => {
        setLogoutMessage('Logout! Redirecionando...');
        setTimeout(() => {
            setLogoutMessage('');
            logoutUser();
            setUser(null);
            navigate('/');
        }, 2000); // 2 segundos de espera
    };

    return { user, handleLogout, logoutMessage };
}
