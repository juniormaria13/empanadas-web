import { Plus, Minus, GlassWater } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function DrinkCard({ item }) {
  const { tf, t } = useLang();
  const { items, addItem, increment, decrement } = useCart();

  const cartItem = items.find(i => i.cartId === item.id);
  const qty = cartItem?.qty ?? 0;

  function handleAdd() {
    addItem({ cartId: item.id, id: item.id, name: tf(item.name), price: item.price, img: item.img, type: 'drink' });
  }

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        {item.img
          ? <img src={item.img} alt={tf(item.name)} className="product-img"
              onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
          : null}
        <div className="product-img-placeholder" style={{ display: item.img ? 'none' : 'flex' }}>
          <GlassWater size={32} style={{ color: '#bbb' }} />
        </div>
      </div>
      <div className="product-content">
        <h3 className="product-title" style={{ fontSize: '1rem' }}>{tf(item.name)}</h3>
        <p className="product-desc">{tf(item.desc)}</p>
        <div className="product-footer">
          <span className="product-price">${item.price.toFixed(2)}</span>
          {qty === 0 ? (
            <button className="btn btn-outline" onClick={handleAdd}
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Plus size={14} /> {t('btn.add')}
            </button>
          ) : (
            <div className="product-qty-controls">
              <button className="product-qty-btn minus" onClick={() => decrement(item.id)}><Minus size={12} /></button>
              <span className="product-qty-num">{qty}</span>
              <button className="product-qty-btn plus" onClick={() => increment(item.id)}><Plus size={12} /></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
