import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import { menuData } from '../data/menuData.js';
import ProductCard from '../components/ProductCard.jsx';
import DrinkCard from '../components/DrinkCard.jsx';
import ComboCard from '../components/ComboCard.jsx';
import ComboModal from '../components/ComboModal.jsx';

function Section({ id, title, description, children }) {
  return (
    <div id={id} className="menu-section">
      <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <h2 className="section-title" style={{ fontSize: '2rem' }}>{title}</h2>
        {description && <p style={{ color: 'var(--text-light)' }}>{description}</p>}
      </div>
      {children}
    </div>
  );
}

export default function MenuPage() {
  const { t } = useLang();
  const [activeCombo, setActiveCombo] = useState(null);

  const cannedDrinks  = menuData.drinks.filter(d => d.category === 'canned');
  const bottledDrinks = menuData.drinks.filter(d => d.category === 'bottled');

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {/* Menu header banner */}
      <div style={{
        background: 'var(--primary)',
        color: 'white',
        textAlign: 'center',
        padding: '3rem 1rem 2.5rem',
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>Our Menu</h1>
        <p style={{ opacity: 0.85, fontSize: '1.1rem' }}>
          Choose your favorites. No account required to order.
        </p>
      </div>

      {/* Sticky category nav */}
      <nav className="menu-nav" style={{ top: 90 }}>
        {['meat','cheese','sweet','kids','combos','drinks','sauces','desserts'].map(s => (
          <a key={s} href={`#${s}`} className="menu-nav-link"
            onClick={e => { e.preventDefault(); scrollTo(s); }}>
            {t(`cat.${s}`)}
          </a>
        ))}
      </nav>

      {/* Menu content */}
      <div style={{ background: 'var(--bg-color)' }}>
        <div className="container">

          <Section id="meat"     title={t('cat.meat')}     description={t('catdesc.meat')}>
            <div className="products-grid">{menuData.meat.map(i    => <ProductCard key={i.id} item={i} />)}</div>
          </Section>

          <Section id="cheese"   title={t('cat.cheese')}   description={t('catdesc.cheese')}>
            <div className="products-grid">{menuData.cheese.map(i  => <ProductCard key={i.id} item={i} />)}</div>
          </Section>

          <Section id="sweet"    title={t('cat.sweet')}    description={t('catdesc.sweet')}>
            <div className="products-grid">{menuData.sweet.map(i   => <ProductCard key={i.id} item={i} />)}</div>
          </Section>

          <Section id="kids"     title={t('cat.kids')}     description={t('catdesc.kids')}>
            <div className="products-grid">{menuData.kids.map(i    => <ProductCard key={i.id} item={i} />)}</div>
          </Section>

          <Section id="combos"   title={t('cat.combos')}   description={t('catdesc.combos')}>
            <div className="combos-list">
              {menuData.combos.map(c => <ComboCard key={c.id} combo={c} onCustomize={setActiveCombo} />)}
            </div>
          </Section>

          <Section id="drinks"   title={t('cat.drinks')}   description={t('catdesc.drinks')}>
            <div className="drinks-subcat">
              <div className="drinks-subcat-header">
                <h3 className="drinks-subcat-title">{t('drinks.canned')}</h3>
                <span className="drinks-subcat-pill">{t('drinks.canned.desc')} · $2.50</span>
              </div>
              <div className="products-grid">{cannedDrinks.map(i  => <DrinkCard key={i.id} item={i} />)}</div>
            </div>
            <div className="drinks-subcat" style={{ marginTop: '2rem' }}>
              <div className="drinks-subcat-header">
                <h3 className="drinks-subcat-title">{t('drinks.bottled')}</h3>
                <span className="drinks-subcat-pill">{t('drinks.bottled.desc')} · $3.50</span>
              </div>
              <div className="products-grid">{bottledDrinks.map(i => <DrinkCard key={i.id} item={i} />)}</div>
            </div>
          </Section>

          <Section id="sauces"   title={t('cat.sauces')}   description={t('catdesc.sauces')}>
            <div className="products-grid">{menuData.sauces.map(i   => <ProductCard key={i.id} item={i} />)}</div>
          </Section>

          <Section id="desserts" title={t('cat.desserts')} description={t('catdesc.desserts')}>
            <div className="products-grid">{menuData.desserts.map(i => <ProductCard key={i.id} item={i} />)}</div>
          </Section>

        </div>
      </div>

      {/* WhatsApp float */}
      <a href="https://wa.me/14173655151?text=Hello!%20I%20want%20to%20order%20empanadas"
        className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={26} />
      </a>

      {activeCombo && <ComboModal combo={activeCombo} onClose={() => setActiveCombo(null)} />}
    </>
  );
}
