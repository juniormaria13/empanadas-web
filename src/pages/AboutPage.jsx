import { Instagram, MessageCircle, CreditCard, Banknote } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  function goMenu() {
    onNavigate('menu');
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <section className="section" style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-header">
            {/* Flag icons using flag emoji kept intentionally — these are country flags, not UI icons */}
            <div className="flags" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🇦🇷 + 🇺🇸</div>
            <h1 className="section-title">Our Story</h1>
          </div>

          <div className="story-snippet" style={{ alignItems: 'flex-start' }}>
            <img src="/assets/store.png" alt="Pampa Empanadas Store" className="story-img"
              onError={e => e.currentTarget.style.display = 'none'} />

            <div className="story-content">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                Born in Argentina, made in Springfield.
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                At Pampa Empanadas, we believe that food is more than just a meal — it's a connection to culture,
                family, and tradition. Our journey started in the heart of Argentina, where empanadas are a staple
                of every gathering, celebration, and Sunday family dinner.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                When we moved to Springfield, Missouri, we brought those cherished family recipes with us. We wanted
                to share the authentic flavors of the Pampas with our new community. Every single empanada is
                handcrafted daily, using fresh ingredients, bold spices, and the perfect golden-brown crust.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Whether you're craving our traditional Spicy Beef, our sweet Dulce De Leche, or something in between,
                we have over 30 flavors waiting for you to discover.
              </p>
              <button className="btn btn-primary" onClick={goMenu}>See Our Menu</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
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
                {['meat','cheese','sweet','combos'].map(s => (
                  <li key={s}>
                    <button onClick={() => { onNavigate('menu'); window.setTimeout(() => document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' }), 150); }}
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}>
                      {s.charAt(0).toUpperCase() + s.slice(1)} Empanadas
                    </button>
                  </li>
                ))}
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
            <div className="payment-icons" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <CreditCard size={22} /><Banknote size={22} />
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp float */}
      <a href="https://wa.me/14173655151?text=Hello!%20I%20want%20to%20order%20empanadas"
        className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={26} />
      </a>
    </>
  );
}
