import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiAlertCircle } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/images/logomarca.png';
//import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [error, setError] = useState();

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('login', { login, password });
            
            localStorage.setItem('busId', response.data.business._id);
            localStorage.setItem('busName', response.data.business.name);
            
            alert(response.data.message)
            
            history.push('/register');
        } catch(err) {
            console.log(err)
            setError(` Erro: ${err.message}`)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="ByRista"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça o seu Logon</h1>

                    {error && <div className="error">
                        <FiAlertCircle size="16" color="red" />
                        {error}
                    </div>}

                    <input 
                        placeholder="Nome de Usuário ou e-mail" 
                        required
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input 
                        type="password"
                        required
                        placeholder="Sua senha" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size="16" color="#FFF" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={logoImg} alt="ByRista"/>
        </div>
    );
}