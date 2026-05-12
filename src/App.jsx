import { useState, useEffect } from 'react';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Header from './components/Header.jsx';
import CartSidebar from './components/CartSidebar.jsx';
import HomePage    from './pages/HomePage.jsx';
import MenuPage    from './pages/MenuPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage   from './pages/AboutPage.jsx';

function AppContent() {
  const [page,      setPage]      = useState('home'); // 'home' | 'menu'
  const [cartOpen,  setCartOpen]  = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <>
      <Header
        page={page}
        onNavigate={setPage}
        onCartOpen={() => setCartOpen(true)}
      />

      {page === 'home'    && <HomePage    onNavigate={setPage} />}
      {page === 'menu'    && <MenuPage    />}
      {page === 'contact' && <ContactPage onNavigate={setPage} />}
      {page === 'about'   && <AboutPage   onNavigate={setPage} />}

      {/* Mobile CTA (home + about + contact) */}
      {page !== 'menu' && (
        <div className="mobile-cta">
          <button
            className="btn btn-primary"
            onClick={() => setPage('menu')}
            style={{ width: '100%', fontSize: '1.1rem', padding: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <ShoppingCart size={20} /> Order Now
          </button>
        </div>
      )}

      {/* WhatsApp float (home only — other pages have their own) */}
      {page === 'home' && (
        <a
          href="https://wa.me/14173655151?text=Hello!%20I%20want%20to%20order%20empanadas"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={26} />
        </a>
      )}

      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)} />}
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
}
