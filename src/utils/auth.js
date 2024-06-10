import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*
Este arquivo contém um conjunto de funções e um hook personalizado (useAuth) relacionados à autenticação de usuários.
A função getUser() é obtém o usuário armazenado no localStorage e retorna, se existir.
O useAuth() utiliza o gerencia o estado do usuário e da mensagem de logout, além de redirecionar o usuário após o logout.
O hook retorna o estado do usuário, a função de logout e a mensagem de logout para serem utilizados em outros componentes.
*/


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
