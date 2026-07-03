import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="/hero_couscous_1783095025547.png" alt="Couscous Royal" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              <span className="gold-text">L'authenticité</span> algérienne<br/> dans chaque bouchée
            </h1>
            <p className="hero-subtitle">
              Découvrez un voyage culinaire luxueux à travers les saveurs traditionnelles de l'Algérie, préparé avec passion et raffinement.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary">Voir le Menu</Link>
              <Link to="/contact" className="btn btn-outline">Réserver une table</Link>
            </div>
          </motion.div>

          <motion.div 
            className="hero-stats glass"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stat-item">
              <span className="stat-value">15+</span>
              <span className="stat-label">Années d'excellence</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">50+</span>
              <span className="stat-label">Plats authentiques</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">4.9</span>
              <span className="stat-label">Étoiles Michelin</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section container">
        <div className="section-header text-center">
          <h2 className="section-title">Nos Spécialités</h2>
          <div className="divider"></div>
        </div>
        
        <div className="categories-grid">
          {['Couscous', 'Tajines', 'Grillades', 'Entrées', 'Desserts'].map((cat, i) => (
            <motion.div 
              className="category-card glass" 
              key={cat}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3>{cat}</h3>
              <ArrowRight className="cat-icon" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured-section container">
        <div className="section-header">
          <h2 className="section-title">Plats Signatures</h2>
          <div className="divider"></div>
          <p className="section-desc">Nos chefs étoilés revisitent les classiques de la gastronomie algérienne avec une touche contemporaine.</p>
        </div>

        <div className="featured-grid">
          <motion.div className="food-card glass" whileHover={{ y: -10 }}>
            <div className="food-img-wrapper">
              <img src="/hero_couscous_1783095025547.png" alt="Couscous Royal" />
              <div className="price-tag">3,500 DA</div>
            </div>
            <div className="food-card-content">
              <h3>Couscous Royal</h3>
              <p>Semoule fine, agneau braisé, poulet fermier, merguez artisanales et légumes de saison.</p>
              <Link to="/dish/1" className="card-link">Découvrir <ArrowRight size={16} /></Link>
            </div>
          </motion.div>

          <motion.div className="food-card glass" whileHover={{ y: -10 }}>
            <div className="food-img-wrapper">
              <img src="/tajine_dish_1783095036731.png" alt="Tajine Lahlou" />
              <div className="price-tag">2,800 DA</div>
            </div>
            <div className="food-card-content">
              <h3>Tajine Lahlou</h3>
              <p>Viande d'agneau fondante, pruneaux, amandes grillées, abricots secs, parfum de fleur d'oranger.</p>
              <Link to="/dish/2" className="card-link">Découvrir <ArrowRight size={16} /></Link>
            </div>
          </motion.div>

          <motion.div className="food-card glass" whileHover={{ y: -10 }}>
            <div className="food-img-wrapper">
              <img src="/grilled_meat_1783095059633.png" alt="Mix Grillades" />
              <div className="price-tag">4,200 DA</div>
            </div>
            <div className="food-card-content">
              <h3>Plateau Grillades</h3>
              <p>Assortiment de viandes marinées aux épices douces, grillées au feu de bois.</p>
              <Link to="/dish/3" className="card-link">Découvrir <ArrowRight size={16} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container story-container">
          <div className="story-image-wrapper">
            <img src="/interior_restaurant_1783095048474.png" alt="Interior" className="story-img" />
            <div className="story-img-overlay"></div>
          </div>
          <div className="story-content">
            <h2 className="section-title">L'Art de Vivre Algérien</h2>
            <div className="divider"></div>
            <p>
              Depuis 2008, Dar El Djazaïr s'engage à offrir une expérience gastronomique inégalée. Chaque plat raconte une histoire, celle de nos mères et grands-mères, transmise de génération en génération.
            </p>
            <p>
              Notre cadre somptueux, inspiré des palais arabo-mauresques, vous invite à un voyage sensoriel où l'élégance architecturale se marie à la perfection avec la générosité de notre cuisine.
            </p>
            <Link to="/about" className="btn btn-outline mt-4">Notre Histoire</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section container">
        <div className="section-header text-center">
          <h2 className="section-title">Paroles de Gastronomes</h2>
          <div className="divider"></div>
        </div>
        
        <div className="testimonials-grid">
          {[1, 2, 3].map((_, idx) => (
            <div className="testimonial-card glass" key={idx}>
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-text">
                "Une expérience culinaire absolument divine. Le couscous est d'une légèreté incroyable et le cadre est tout simplement somptueux. Un vrai joyau à Alger."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Amine K.</h4>
                  <div className="stars">
                    <Star size={14} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />
                    <Star size={14} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />
                    <Star size={14} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />
                    <Star size={14} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />
                    <Star size={14} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
