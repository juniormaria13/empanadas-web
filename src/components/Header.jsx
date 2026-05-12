import { useState } from 'react';
import { ShoppingCart, Phone, Menu, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function Header({ page, onNavigate, onCartOpen }) {
  const { t, lang, setLang } = useLang();
  const { totalQty } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  function go(target) {
    onNavigate(target);
    setMobileOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-container">

        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); go('home'); }} className="logo-link">
          <img
            src="/img/logo-pampaemapandas-negro.png"
            alt="Pampa Empanadas"
            className="logo-img"
            onError={e => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'block';
            }}
          />
          <span style={{ display: 'none', color: 'var(--secondary)', fontWeight: 800, fontSize: '1.4rem' }}>
            Pampa
          </span>
        </a>

        {/* Mobile toggle */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop nav */}
        <nav className="nav-links" id="nav-links">
          <a href="#" onClick={e => { e.preventDefault(); go('home'); }}
            className={page === 'home' ? 'active' : ''}>
            Home
          </a>
          <a href="#" onClick={e => { e.preventDefault(); go('menu'); }}
            className={page === 'menu' ? 'active' : ''}>
            {t('nav.menu')}
          </a>
          <a href="#" onClick={e => { e.preventDefault(); go('contact'); }}
            className={page === 'contact' ? 'active' : ''}>
            Contact
          </a>
          <a href="#" onClick={e => { e.preventDefault(); go('about'); }}
            className={page === 'about' ? 'active' : ''}>
            Our Story
          </a>
        </nav>

        {/* Right actions */}
        <div className="header-actions">
          {/* Language toggle */}
          <div className="lang-toggle">
            {['en', 'es'].map(l => (
              <button key={l} className={`lang-btn${lang === l ? ' active' : ''}`} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a href="tel:4173655151" className="header-phone">
            <Phone size={14} /> (417) 365-5151
          </a>

          <div className="cart-icon" onClick={onCartOpen} style={{ cursor: 'pointer' }}>
            <ShoppingCart size={22} />
            <span className="cart-count">{totalQty > 99 ? '99+' : totalQty}</span>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: 'absolute', top: '90px', left: 0, width: '100%',
          background: 'rgba(15,15,15,0.98)', padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1.2rem',
          borderTop: '1px solid rgba(244,180,26,0.2)', zIndex: 999
        }}>
          {[
            { label: 'Home',       target: 'home'  },
            { label: t('nav.menu'), target: 'menu'  },
            { label: 'Our Story',  target: 'about' },
          ].map(({ label, target }) => (
            <a key={target} href="#"
              onClick={e => { e.preventDefault(); go(target); }}
              style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '1.1rem' }}>
              {label}
            </a>
          ))}
          <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: 0 }} />
          <a href="tel:4173655151" style={{ color: 'var(--secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={15} /> (417) 365-5151
          </a>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['en', 'es'].map(l => (
              <button key={l} className={`lang-btn${lang === l ? ' active' : ''}`}
                onClick={() => { setLang(l); setMobileOpen(false); }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
