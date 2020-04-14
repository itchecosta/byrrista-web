import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import InputMask from 'react-input-mask';

import './styles.css';

import logoImg from '../../assets/images/favicon.png';

function BusinessForm({ onSubmit }) {
  const [instagram_username, setInstagramUsername] = useState('');
    const [services, setServices] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [delivery, setDelivery] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

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

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      instagram_username,
      services,
      whatsapp,
      delivery,
      email,
      password,
      latitude,
      longitude,
    });

    setInstagramUsername('');
    setServices('');
    setWhatsapp('');
    setDelivery('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="ByRista"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleSubmit}>

                <div className="input-block">
                    <label htmlFor="email">E-mail</label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password" 
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="instagram_username">Usuário do Instagram</label>
                    <input 
                    name="instagram_username" 
                    id="instagram_username" 
                    required
                    value={instagram_username}
                    onChange={e => setInstagramUsername(e.target.value)}
                    placeholder="informe o nome do seu perfil"
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="services">Serviços</label>
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
                    <label htmlFor="whatsapp">Whatsapp</label>
                    <InputMask 
                    mask="(99) 99999-9999" 
                    maskChar={null} 
                    name="whatsapp"
                    id="whatsapp"
                    required
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />
                </div>
                <div className="input-block">
                <label htmlFor="delivery">Delivery
                    <input
                    type="checkbox"
                    name="delivery"
                    id="delivery"
                    required
                    value={delivery}
                    onChange={e => setDelivery(e.target.value)}
                    /></label>
                    
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

export default BusinessForm;
