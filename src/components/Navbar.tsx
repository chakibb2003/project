import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Dar El Djazaïr Logo" className="logo-img" />
          <div className="logo-text">
            <h1>Dar El Djazaïr</h1>
            <span className="logo-subtitle">Saveurs d'Algérie</span>
          </div>
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
          <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>À Propos</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </div>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Compte">
            <User size={20} />
          </button>
          <Link to="/cart" className="icon-btn cart-btn" aria-label="Panier">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
