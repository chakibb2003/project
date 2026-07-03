import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import DishDetails from './pages/DishDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
        <div className="pattern-overlay"></div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/dish/:id" element={<DishDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
