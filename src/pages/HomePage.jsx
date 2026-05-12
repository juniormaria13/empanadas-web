import {
  Clock, MapPin, Zap, Star, UtensilsCrossed, Heart,
  ShoppingCart, Smartphone, Camera, Home, Flag, Trophy, Instagram,
} from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import { menuData } from '../data/menuData.js';
import ProductCard from '../components/ProductCard.jsx';

const popularItems = [
  menuData.meat.find(i => i.id === 'carnitas'),
  menuData.meat.find(i => i.id === 'spicy-beef'),
  menuData.meat.find(i => i.id === 'cuban'),
  menuData.sweet.find(i => i.id === 'dulce-de-leche'),
];

function StarRow() {
  return (
    <span style={{ display: 'inline-flex', gap: '2px', color: 'var(--secondary)' }}>
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
    </span>
  );
}

export default function HomePage({ onNavigate }) {
  const { t } = useLang();

  function goMenu(anchor) {
    onNavigate('menu');
    if (anchor) window.setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 150);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <img src="/img/local.jpg" alt="Pampa Empanadas" className="hero-bg"
          style={{ objectPosition: 'center 25%' }}
          onError={e => e.currentTarget.style.display = 'none'} />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 className="hero-title">Authentic Argentine Empanadas</h1>
          <p className="hero-subtitle">Handcrafted with bold traditional flavors · Springfield, MO</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => goMenu('combos')}>
              {t('nav.order')} →
            </button>
            <button className="btn btn-secondary" onClick={() => goMenu(null)}>
              {t('nav.menu')}
            </button>
          </div>
          <div className="quick-info-bar">
            <div className="quick-info-item"><Clock size={15} /> Open Tue–Sun · 11am–8pm</div>
            <div className="quick-info-item"><MapPin size={15} /> 3302 S National Ave F, Springfield MO</div>
            <div className="quick-info-item"><Zap size={15} /> Ready in 15 min · Pickup Available</div>
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="social-proof">
        <div className="container">
          <div className="trust-bar">
            <div className="trust-item">
              <div className="trust-number">
                <Star size={28} fill="currentColor" style={{ color: 'var(--secondary)' }} /> 4.8/5
              </div>
              <div className="trust-label">Rating</div>
            </div>
            <div className="trust-item">
              <div className="trust-number"><UtensilsCrossed size={28} /> 30+</div>
              <div className="trust-label">Flavors</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">
                <Heart size={28} fill="currentColor" style={{ color: 'var(--primary)' }} /> 500+
              </div>
              <div className="trust-label">Happy Customers</div>
            </div>
          </div>

          <div className="section-header">
            <h2 className="section-title">Don't take our word for it</h2>
          </div>

          <div className="testimonials-grid">
            {[
              { text: '"Best empanadas in Missouri! The spicy beef is out of this world."', author: 'Sarah M.' },
              { text: '"Authentic flavors. Takes me right back to Buenos Aires."',           author: 'Carlos R.' },
              { text: '"Fast pickup and always hot. The combos are a great deal!"',          author: 'Emily T.' },
            ].map(({ text, author }) => (
              <div key={author} className="testimonial-card">
                <div className="stars"><StarRow /></div>
                <p className="testimonial-text">{text}</p>
                <div className="testimonial-author">
                  {author} <span className="review-source">Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="section categories">
        <div className="container">
          <div className="categories-grid">
            {[
              { img: '/img/spicy_beef.jpg',    anchor: 'meat',   title: 'Meat Empanadas',   sub: '18 savory options' },
              { img: '/img/ham__cheese.jpg',    anchor: 'cheese', title: 'Cheese Empanadas', sub: 'For cheese lovers' },
              { img: '/img/dulce_de_leche.jpg', anchor: 'sweet',  title: 'Sweet Empanadas',  sub: 'Dessert in every bite' },
              { img: '/img/local.jpg',          anchor: 'combos', title: 'Combo Deals',       sub: 'Save more, eat more' },
            ].map(({ img, anchor, title, sub }) => (
              <button key={anchor} className="category-card"
                style={{ border: 'none', cursor: 'pointer', textAlign: 'left' }}
                onClick={() => goMenu(anchor)}>
                <img src={img} alt={title} className="category-bg"
                  onError={e => e.currentTarget.style.display = 'none'} />
                <div className="category-overlay" />
                <div className="category-content">
                  <h3>{title}</h3>
                  <p>{sub}</p>
                  <span className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>View All</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Most Popular ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Most Popular</h2>
            <p>Our best-selling flavors, handcrafted daily</p>
          </div>
          <div className="products-grid">
            {popularItems.filter(Boolean).map(item => <ProductCard key={item.id} item={item} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="btn btn-primary" onClick={() => goMenu(null)}
              style={{ fontSize: '1rem', padding: '0.8rem 2rem' }}>
              View Full Menu →
            </button>
          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section className="section how-to-order">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <ShoppingCart size={32} /> Order in 3 Easy Steps
            </h2>
            <p>Ready in 15 minutes · Pickup available · No account needed</p>
          </div>
          <div className="steps-grid">
            {[
              { n: 1, Icon: UtensilsCrossed, title: 'Browse the Menu',  desc: 'Explore 30+ handcrafted empanada flavors — savory, sweet, and everything in between.' },
              { n: 2, Icon: Smartphone,      title: 'Place Your Order', desc: 'Call us or order online. No account required — just pick your favorites and go.' },
              { n: 3, Icon: Zap,             title: 'Pick Up & Enjoy',  desc: 'Your order is hot and ready in ~15 minutes at 3302 S National Ave F, Springfield MO.' },
            ].map(({ n, Icon, title, desc }) => (
              <div key={n} className="step-card">
                <div className="step-number">{n}</div>
                <div className="step-icon"><Icon size={44} style={{ color: 'var(--primary)' }} /></div>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn btn-primary" onClick={() => goMenu(null)}
              style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              START YOUR ORDER →
            </button>
          </div>
        </div>
      </section>

      {/* ── Instagram Gallery ── */}
      <section className="section instagram-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Camera size={30} /> Follow Our Journey
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Real food. Real flavors. Straight from our kitchen.</p>
            <a href="https://instagram.com/_pampaempanadas" target="_blank" rel="noopener noreferrer" className="insta-handle">
              @_pampaempanadas
            </a>
          </div>
          <div className="insta-grid">
            {[
              { src: '/img/galeria_letrero.jpg',   Icon: MapPin, label: 'Pampa Empanadas'    },
              { src: '/img/galeria_interior1.jpg', Icon: Home,   label: 'Nuestro local'      },
              { src: '/img/galeria_interior2.jpg', Icon: Trophy, label: 'Fútbol y empanadas' },
              { src: '/img/galeria_interior3.jpg', Icon: Flag,   label: 'Ambiente argentino' },
            ].map(({ src, Icon, label }) => (
              <div key={src} className="insta-item">
                <img src={src} alt={label} onError={e => e.currentTarget.parentElement.style.display = 'none'} />
                <div className="insta-overlay">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Icon size={13} /> {label}
                  </span>
                </div>
              </div>
            ))}
            <div className="insta-item insta-item--wide">
              <img src="/img/local.jpg" alt="Springfield MO" />
              <div className="insta-overlay">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Trophy size={13} /> Visítanos en Springfield, MO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="logo-link" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                <img src="/img/logo-pampaemapandas-negro.png" alt="Pampa Empanadas"
                  className="logo-img logo-img-footer"
                  onError={e => e.currentTarget.style.display = 'none'} />
              </a>
              <p style={{ color: '#999', marginBottom: '1.5rem' }}>
                Authentic Argentine empanadas handcrafted with traditional flavors.
              </p>
              <a href="https://instagram.com/_pampaempanadas" target="_blank" rel="noopener noreferrer"
                style={{ color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Instagram size={18} /> @_pampaempanadas
              </a>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><button onClick={() => goMenu('meat')}   style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}>Meat Empanadas</button></li>
                <li><button onClick={() => goMenu('cheese')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}>Cheese Empanadas</button></li>
                <li><button onClick={() => goMenu('sweet')}  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}>Sweet Empanadas</button></li>
                <li><button onClick={() => goMenu('combos')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}>Combo Deals</button></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact & Hours</h4>
              <ul className="footer-links" style={{ color: '#999' }}>
                <li>3302 S National Ave F</li>
                <li>Springfield, MO 65807</li>
                <li><a href="tel:4173655151" style={{ color: 'white' }}>(417) 365-5151</a></li>
                <li style={{ marginTop: '1rem' }}>Tue–Sun: 11am – 8pm</li>
                <li>Mon: Closed</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 Pampa Empanadas · Springfield, MO</div>
          </div>
        </div>
      </footer>
    </>
  );
}
