import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiAlertCircle } from 'react-icons/fi';
import InputMask from 'react-input-mask';
//import InputTags from '../../components/InputTags/index';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/images/logomarca.png';

export default function Register() {
    const [instagram_username, setInstagramUsername] = useState('');
    const [services, setServices] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [delivery, setDelivery] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [error, setError] = useState();

    const handleChecked = ({ target }) => {
        setDelivery(target.checked);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
        )
    }, []);
    
    const history = useHistory();

    const selectedTags = tags => console.log(tags);

    async function handleRegister(e){
        e.preventDefault();

        console.log(selectedTags);

        const data = {
            instagram_username,
            services,
            whatsapp,
            delivery,
            email,
            password,
            latitude,
            longitude,
        };

        try {
            const response = await api.post('/business', data);

            alert(`${response.message}`);

            history.push('/');
        } catch (err) {
            setError(` Erro: ${err.message}!`);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="ByRista"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e seja encontrado pelas pessoas do bairro.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="#FFF" />
                        Já sou cadastrado
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                
                {error && <div className="error">
                    <FiAlertCircle size="16" color="red" />
                    {error}
                </div>}

                <div className="input-block">
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="E-mail completo"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <input 
                    type="password" 
                    name="password"
                    id="password"
                    required
                    placeholder="senha de 6 dígitos"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <input 
                    name="instagram_username" 
                    id="instagram_username" 
                    required
                    value={instagram_username}
                    placeholder="nome do perfil no instagram"
                    onChange={e => setInstagramUsername(e.target.value)}
                    />
                </div>

                {/* <div className="input-block">
                    <InputTags 
                        selectedTags={selectedTags}
                        onChange={e => setServices(selectedTags)}
                    />
                </div> */}
                
                <div className="input-block">
                    <textarea
                    name="services"
                    id="services"
                    required
                    value={services}
                    onChange={e => setServices(e.target.value)}
                    placeholder="informe seus serviços separados por vírgula"
                    />
                </div>
                <div className="input-block">
                    <InputMask 
                    mask="(99) 99999-9999" 
                    maskChar={null} 
                    name="whatsapp"
                    id="whatsapp"
                    required
                    placeholder="Seu WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <input
                    type="checkbox"
                    name="delivery"
                    id="delivery"
                    onChange={handleChecked} 
                    checked={delivery}
                    />
                    <label id="delivery" htmlFor="delivery">
                        Marque se você oferece
                        o serviço de delivery
                    </label>
                    
                </div>

                <div className="input-group">
                    <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input 
                        type="number" 
                        name="latitude" 
                        id="latitude" 
                        required 
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                    </div>

                    <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                    </div>
                </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}