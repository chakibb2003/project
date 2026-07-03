import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="page-title">Notre Histoire</h1>
          <div className="divider mx-auto"></div>
          <p className="page-desc">L'héritage d'une tradition culinaire, l'élégance d'une vision moderne.</p>
        </div>
      </div>

      <div className="container">
        {/* Story Section */}
        <section className="about-section">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">L'Héritage Dar El Djazaïr</h2>
              <div className="divider"></div>
              <p>
                Fondé en 2008, Dar El Djazaïr est né d'une passion ardente pour la gastronomie algérienne et d'un désir profond de la partager avec le monde dans un écrin de luxe et de raffinement.
              </p>
              <p>
                Notre nom, "La Maison de l'Algérie", n'a pas été choisi au hasard. Il incarne notre engagement à être les ambassadeurs de l'hospitalité légendaire de notre pays. Chaque détail, de la décoration arabo-mauresque minutieusement pensée aux épices soigneusement sélectionnées, est une célébration de notre riche patrimoine culturel.
              </p>
            </div>
            <div className="about-image glass">
              <img src="/interior_restaurant_1783095048474.png" alt="Interior" />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h2 className="section-title text-center">Notre Parcours</h2>
          <div className="divider mx-auto"></div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <h3>2008</h3>
                <h4>Ouverture de Dar El Djazaïr</h4>
                <p>Inauguration de notre premier restaurant au cœur d'Alger, avec l'ambition de redéfinir la haute gastronomie algérienne.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <h3>2015</h3>
                <h4>Reconnaissance Internationale</h4>
                <p>Dar El Djazaïr remporte le prix d'excellence culinaire et attire les critiques gastronomiques du monde entier.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <h3>2022</h3>
                <h4>Rénovation et Modernisation</h4>
                <p>Un nouveau design intérieur luxueux tout en préservant l'âme traditionnelle, et une carte revisitée par nos chefs étoilés.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chef Section */}
        <section className="chef-section">
          <div className="about-grid reverse">
            <div className="about-image glass">
              <img src="/tajine_dish_1783095036731.png" alt="Chef's Creation" />
            </div>
            <div className="about-content">
              <h2 className="section-title">L'Artisan du Goût</h2>
              <div className="divider"></div>
              <p className="chef-subtitle">Chef Exécutif : Karim Benali</p>
              <p>
                Formé dans les cuisines étoilées de Paris et profondément attaché à ses racines algériennes, le Chef Karim Benali est un maître dans l'art de sublimer les classiques.
              </p>
              <p>
                "Ma vision est simple : prendre les recettes de nos grands-mères, celles qui ont bercé notre enfance, et les élever au rang d'œuvres d'art gastronomiques sans jamais trahir leur authenticité."
              </p>
              <div className="signature">K. Benali</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
