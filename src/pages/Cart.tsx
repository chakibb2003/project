import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const deliveryFee = 400;
  const total = cartTotal + (cartItems.length > 0 ? deliveryFee : 0);

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title text-center">Votre Commande</h1>
        <div className="divider mx-auto"></div>

        {cartItems.length > 0 ? (
          <div className="cart-layout">
            <div className="cart-items-section">
              <div className="cart-header">
                <h3>Articles ({cartItems.length})</h3>
              </div>
              
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item glass">
                    <img src={item.img} alt={item.name} className="cart-item-img" />
                    
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <span className="cart-item-price">{item.price.toLocaleString()} DA</span>
                    </div>

                    <div className="cart-item-controls">
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16} /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16} /></button>
                      </div>
                      
                      <div className="item-total">
                        {(item.price * item.quantity).toLocaleString()} DA
                      </div>

                      <button 
                        className="remove-btn" 
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Supprimer"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cart-summary-section">
              <div className="summary-card glass">
                <h3>Résumé de la commande</h3>
                
                <div className="summary-row">
                  <span>Sous-total</span>
                  <span>{cartTotal.toLocaleString()} DA</span>
                </div>
                <div className="summary-row">
                  <span>Frais de livraison</span>
                  <span>{deliveryFee.toLocaleString()} DA</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-row total">
                  <span>Total</span>
                  <span>{total.toLocaleString()} DA</span>
                </div>

                <button className="btn btn-primary checkout-btn">
                  Procéder au paiement <ArrowRight size={18} />
                </button>

                <div className="secure-checkout">
                  <ShieldCheck size={16} />
                  <span>Paiement 100% sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart text-center glass">
            <h2>Votre panier est vide</h2>
            <p>Découvrez notre menu et laissez-vous tenter par nos spécialités.</p>
            <Link to="/menu" className="btn btn-primary mt-4">Découvrir le menu</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
