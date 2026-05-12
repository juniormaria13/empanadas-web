import { MapPin, Phone, MessageCircle, Instagram, CreditCard, Banknote } from 'lucide-react';

export default function ContactPage({ onNavigate }) {
  // Open/Closed logic based on CST (America/Chicago)
  const now = new Date();
  const dayFormatter  = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', weekday: 'long' });
  const hourFormatter = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', hour: 'numeric', hour12: false });
  const currentDay    = dayFormatter.format(now);
  const currentHour   = parseInt(hourFormatter.format(now));
  const isOpen        = currentDay !== 'Monday' && currentHour >= 11 && currentHour < 20;

  function goMenu(anchor) {
    onNavigate('menu');
    if (anchor) window.setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 150);
  }

  return (
    <>
      <section className="section" style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Get in Touch</h1>
            <p>Visit us or reach out for large orders and catering.</p>
          </div>

          <div className="location-wrapper">
            {/* Info column */}
            <div className="location-info">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Visit Us</h2>

              <div className="info-item">
                <MapPin size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong>Address</strong><br />
                  3302 S National Ave F<br />Springfield, MO 65807
                </div>
              </div>

              <div className="info-item">
                <Phone size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong>Phone</strong><br />
                  <a href="tel:4173655151" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                    (417) 365-5151
                  </a>
                </div>
              </div>

              <div className="info-item">
                <MessageCircle size={22} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong>WhatsApp</strong><br />
                  <a href="https://wa.me/14173655151" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--success)', fontWeight: 600 }}>
                    Message Us
                  </a>
                </div>
              </div>

              <div className="info-item">
                <Instagram size={22} style={{ color: 'var(--text-dark)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <strong>Instagram</strong><br />
                  <a href="https://instagram.com/_pampaempanadas" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-dark)', fontWeight: 600 }}>
                    @_pampaempanadas
                  </a>
                </div>
              </div>

              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Hours</h3>

              <div
                className={`status-indicator ${isOpen ? 'status-open' : 'status-closed'}`}
                style={{ marginBottom: '1rem' }}
              >
                {isOpen ? 'OPEN NOW' : 'CLOSED'}
              </div>

              <table className="hours-table">
                <tbody>
                  <tr><td>Tuesday – Friday</td>  <td>11:00 AM – 8:00 PM</td></tr>
                  <tr><td>Saturday – Sunday</td>  <td>11:00 AM – 8:00 PM</td></tr>
                  <tr><td>Monday</td>             <td>CLOSED</td></tr>
                </tbody>
              </table>

              <a
                href="https://maps.google.com/?q=3302+S+National+Ave+F,+Springfield,+MO+65807"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%', marginTop: '1rem' }}
              >
                Get Directions →
              </a>
            </div>

            {/* Map */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.203206637156!2d-93.2806509!3d37.1476142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf63a43dd59d2f%3A0xc3f345c225026909!2s3302%20S%20National%20Ave%20F%2C%20Springfield%2C%20MO%2065807!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pampa Empanadas location"
              />
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
                    <button onClick={() => goMenu(s)}
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
