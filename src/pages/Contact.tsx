import { MapPin, Phone, Clock, Send, Globe, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="page-title">Contact & Réservations</h1>
          <div className="divider mx-auto"></div>
          <p className="page-desc">Nous sommes à votre disposition pour toute demande de réservation ou d'information.</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">
          {/* Form Section */}
          <div className="contact-form-section glass">
            <h2>Envoyez-nous un message</h2>
            <p className="form-subtitle">Pour les réservations de groupe de plus de 8 personnes, merci de nous contacter directement par téléphone.</p>
            
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom Complet</label>
                <input type="text" id="name" placeholder="Votre nom" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="votre@email.com" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" placeholder="+213 XX XX XX XX" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject">
                    <option value="reservation">Réservation</option>
                    <option value="event">Événement Privé</option>
                    <option value="info">Demande d'Information</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Votre message..." required></textarea>
              </div>
              
              <button type="button" className="btn btn-primary submit-btn">
                Envoyer <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="contact-info-section">
            <div className="info-cards">
              <div className="info-card glass">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-content">
                  <h3>Notre Adresse</h3>
                  <p>123 Avenue de l'Indépendance<br/>Alger, 16000<br/>Algérie</p>
                </div>
              </div>

              <div className="info-card glass">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-content">
                  <h3>Contact Direct</h3>
                  <p>+213 21 00 00 00<br/>+213 55 00 00 00</p>
                  <p className="email">contact@dareldjazair.com</p>
                </div>
              </div>

              <div className="info-card glass">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <div className="info-content">
                  <h3>Heures d'Ouverture</h3>
                  <ul className="hours-list">
                    <li><span>Lundi - Jeudi</span> <span>12:00 - 23:00</span></li>
                    <li><span>Vendredi - Samedi</span> <span>12:00 - 00:00</span></li>
                    <li><span>Dimanche</span> <span>Fermé</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="social-follow glass">
              <h3>Suivez-nous</h3>
              <p>Rejoignez notre communauté pour découvrir nos nouveautés.</p>
              <div className="social-links-large">
                <a href="#" className="social-btn"><Globe size={24} /></a>
                <a href="#" className="social-btn"><MessageCircle size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
