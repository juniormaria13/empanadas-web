import { X, Trash2, Plus, Minus, ShoppingCart, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import { useCart } from '../context/CartContext.jsx';

function ItemImg({ src, alt }) {
  if (!src) {
    return (
      <div className="cart-item-placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <UtensilsCrossed size={22} style={{ color: '#bbb' }} />
      </div>
    );
  }
  return (
    <>
      <img src={src} alt={alt}
        onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
      <div className="cart-item-placeholder" style={{ display: 'none', alignItems: 'center', justifyContent: 'center' }}>
        <UtensilsCrossed size={22} style={{ color: '#bbb' }} />
      </div>
    </>
  );
}

function CartItemRow({ item }) {
  const { increment, decrement, remove } = useCart();
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <ItemImg src={item.img} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-name">{item.name}</div>
        {item.type === 'combo' && item.detail && (
          <div className="cart-item-detail">{item.detail}</div>
        )}
        <div className="cart-item-price">${(item.price * item.qty).toFixed(2)}</div>
      </div>
      <div className="cart-item-actions">
        <button className="cart-remove-btn" onClick={() => remove(item.cartId)}>
          <Trash2 size={14} />
        </button>
        {item.type !== 'combo' && (
          <div className="cart-qty">
            <button className="cart-qty-btn minus" onClick={() => decrement(item.cartId)}><Minus size={10} /></button>
            <span className="cart-qty-num">{item.qty}</span>
            <button className="cart-qty-btn plus" onClick={() => increment(item.cartId)}><Plus size={10} /></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CartSidebar({ onClose }) {
  const { t } = useLang();
  const { items, clear, totalPrice, totalQty } = useCart();

  function handleWhatsApp() {
    const lines = items.map(i => `${i.qty}x ${i.name} - $${(i.price * i.qty).toFixed(2)}`);
    lines.push(`\nTotal: $${totalPrice.toFixed(2)}`);
    const msg = encodeURIComponent(`Hello! I'd like to order:\n\n${lines.join('\n')}`);
    window.open(`https://wa.me/14173655151?text=${msg}`, '_blank');
  }

  return (
    <div className="cart-sidebar-overlay">
      <div className="cart-sidebar-backdrop" onClick={onClose} />
      <div className="cart-sidebar">
        <div className="cart-sidebar-header">
          <h2>
            <ShoppingCart size={20} style={{ color: 'var(--primary)' }} />
            {t('cart.title')}
            {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          </h2>
          <button className="icon-close-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={52} style={{ color: '#e0e0e0' }} />
              <strong style={{ color: 'var(--text-light)' }}>{t('cart.empty')}</strong>
              <span style={{ fontSize: '0.85rem' }}>{t('cart.empty.sub')}</span>
            </div>
          ) : (
            items.map(item => <CartItemRow key={item.cartId} item={item} />)
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">{t('cart.total')}</span>
              <span className="cart-total-amount">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="cart-whatsapp-btn" onClick={handleWhatsApp}>
              <MessageCircle size={18} /> {t('cart.checkout')}
            </button>
            <button className="cart-clear-btn" onClick={clear}>
              <Trash2 size={14} /> {t('cart.clear')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
