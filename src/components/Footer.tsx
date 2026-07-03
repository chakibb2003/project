import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <img src="/logo.png" alt="Dar El Djazaïr Logo" className="footer-logo-img" />
            <div className="logo-text">
              <h2>Dar El Djazaïr</h2>
              <span className="logo-subtitle">Saveurs d'Algérie</span>
            </div>
          </div>
          <p className="footer-desc">
            Une expérience culinaire luxueuse qui célèbre l'héritage riche et les saveurs authentiques de l'Algérie, dans un cadre moderne et élégant.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Globe size={20} /></a>
            <a href="#" aria-label="Instagram"><MessageCircle size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Liens Rapides</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/menu">Notre Menu</Link></li>
            <li><Link to="/about">Notre Histoire</Link></li>
            <li><Link to="/contact">Réservations</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>123 Avenue de l'Indépendance, Alger</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+213 21 00 00 00</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>contact@dareldjazair.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-hours">
          <h3>Heures d'Ouverture</h3>
          <ul>
            <li><span>Lun - Jeu:</span> <span>12:00 - 23:00</span></li>
            <li><span>Ven - Sam:</span> <span>12:00 - 00:00</span></li>
            <li><span>Dimanche:</span> <span>Fermé</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dar El Djazaïr. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
