import React from 'react';
import { FiInstagram, FiPhoneForwarded } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaMotorcycle } from 'react-icons/fa';
import './styles.css';

function BusinessItem({ business }) {

  const message = `Olá ${business.name}, estou entrando em contato pois estou interessado em seus serviços!`;

  return (
    <li className="business-item">
      <header>
        <img src={business.avatar_url} alt={business.name} />
        <div className="user-info">
          <strong>{business.name}</strong>  
          <span>{business.services.join(', ')}</span>
        </div>              
      </header>
      <p>{business.bio}</p>

      <a href={`https://instagram.com/${business.instagram_username}`} title="Acessar perfil no Instagram"> <FaInstagram size={24} color="#27336A" /></a>
      <a href={`whatsapp://send?phone=55${business.whatsapp}&text=${message}`} title="Entre em Contato"> <FaWhatsapp size={24} color="#27336A" /></a>
    </li>
  );
}

export default BusinessItem;
