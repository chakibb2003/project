import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Minus, Plus, ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { menuItems } from './Menu';
import './DishDetails.css';

const DishDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Scroll to top when dish changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const foundItem = menuItems.find(item => item.id.toString() === id);

  if (!foundItem) {
    return <Navigate to="/menu" replace />;
  }

  const numericPrice = parseInt(foundItem.price.replace(/[^\d]/g, ''));

  // Hydrate with detailed mock data based on the basic menu item
  const dish = {
    id: foundItem.id,
    name: foundItem.name,
    price: foundItem.price,
    numericPrice: numericPrice,
    rating: foundItem.rating,
    reviews: 124,
    category: foundItem.category,
    mainImg: foundItem.img,
    description: foundItem.desc + " Un plat généreux et parfumé qui rassemble la famille autour d'un moment de pur bonheur culinaire.",
    story: foundItem.story || "Transmise de génération en génération, la recette vient directement de nos ancêtres. Chaque ingrédient est travaillé avec patience, tandis que le plat mijote doucement avec un mélange secret d'épices.",
    ingredients: foundItem.ingredients || [
      "Ingrédients frais de saison",
      "Mélange d'épices traditionnel (Ras el Hanout)",
      "Huile d'olive vierge extra",
      "Smen (Beurre clarifié traditionnel)"
    ]
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="dish-details-page">
      <div className="container">
        <Link to="/menu" className="back-link">
          <ArrowLeft size={18} /> Retour au menu
        </Link>

        <div className="dish-layout">
          {/* Left Column - Images */}
          <div className="dish-gallery-section">
            <div className="main-image-wrapper glass">
              <img src={dish.mainImg} alt={dish.name} className="main-image" />
              <div className="image-actions">
                <button className="icon-btn glass"><Heart size={20} /></button>
                <button className="icon-btn glass"><Share2 size={20} /></button>
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="dish-info-section">
            <div className="dish-header">
              <span className="category-label">{dish.category}</span>
              <h1 className="dish-title">{dish.name}</h1>
              
              <div className="dish-meta">
                <div className="rating">
                  <Star size={18} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />
                  <span className="score">{dish.rating}</span>
                  <span className="reviews">({dish.reviews} avis)</span>
                </div>
                <span className="price">{dish.price}</span>
              </div>
            </div>

            <div className="divider"></div>

            <p className="dish-description">{dish.description}</p>

            <div className="dish-actions glass">
              <div className="quantity-selector">
                <button onClick={handleDecrease}><Minus size={18} /></button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}><Plus size={18} /></button>
              </div>
              <button 
                className="btn btn-primary add-to-cart-btn-large"
                onClick={() => addToCart({
                  id: dish.id || '1',
                  name: dish.name,
                  price: dish.numericPrice,
                  quantity: quantity,
                  img: dish.mainImg
                })}
              >
                Ajouter au panier • {(dish.numericPrice * quantity).toLocaleString()} DA
              </button>
            </div>

            <div className="dish-details-tabs">
              <div className="tab-headers">
                <h3 className="active">Histoire du Plat</h3>
              </div>
              <div className="tab-content">
                <p>{dish.story}</p>
              </div>
            </div>

            <div className="ingredients-section">
              <h3>Ingrédients Authentiques</h3>
              <ul className="ingredients-list">
                {dish.ingredients.map((ing, idx) => (
                  <li key={idx}>
                    <span className="bullet"></span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Dishes */}
        <section className="related-dishes">
          <h2 className="section-title">Vous aimerez aussi</h2>
          <div className="divider"></div>
          
          <div className="related-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="related-card glass">
                <img src={item === 1 ? "/tajine_dish_1783095036731.png" : item === 2 ? "/grilled_meat_1783095059633.png" : "/hero_couscous_1783095025547.png"} alt="Related dish" />
                <div className="related-info">
                  <h4>{item === 1 ? "Tajine Lahlou" : item === 2 ? "Mix Grillades" : "Couscous Agneau"}</h4>
                  <span className="related-price">{item === 1 ? "2,800 DA" : item === 2 ? "4,200 DA" : "3,200 DA"}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DishDetails;
