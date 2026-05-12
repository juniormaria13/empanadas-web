import { useState, useEffect } from 'react';
import { X, Plus, Minus, CheckCircle, ShoppingCart, ChevronLeft, ChevronRight, UtensilsCrossed, Flame, Leaf, Zap } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import { empanadasList, menuData } from '../data/menuData.js';

// ─── Order Tray ───────────────────────────────────────────────────────────────
function OrderTray({ combo, empanadas, drinks, sauces, tf }) {
  function flatten(list) {
    const out = [];
    list.forEach(sel => { for (let i = 0; i < sel.qty; i++) out.push(sel); });
    return out;
  }
  const flatEmp   = flatten(empanadas);
  const flatDrink = flatten(drinks);
  const flatSauce = flatten(sauces);

  function Slot({ filled, type, num }) {
    const cls = filled
      ? type === 'emp' ? 'filled-emp' : type === 'drink' ? 'filled-drink' : 'filled-sauce'
      : '';
    return (
      <div className={`combo-tray-slot ${cls}`}>
        {filled ? (
          filled.img ? (
            <>
              <img src={filled.img} alt={tf(filled.name)}
                onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
              <div className="combo-tray-placeholder" style={{ display: 'none' }}>
                <UtensilsCrossed size={14} style={{ color: '#bbb' }} />
              </div>
            </>
          ) : (
            <div className="combo-tray-placeholder">
              <UtensilsCrossed size={14} style={{ color: '#bbb' }} />
            </div>
          )
        ) : (
          <span className="combo-tray-slot-num">{num}</span>
        )}
      </div>
    );
  }

  return (
    <div className="combo-tray">
      <p className="combo-tray-title">Vista previa</p>

      {combo.empanadasCount > 0 && (
        <div style={{ marginBottom: '0.75rem' }}>
          <p className="combo-tray-group-label">Empanadas</p>
          <div className="combo-tray-slots">
            {Array.from({ length: combo.empanadasCount }).map((_, i) => (
              <Slot key={i} filled={flatEmp[i]} type="emp" num={i + 1} />
            ))}
          </div>
        </div>
      )}

      {combo.drinksCount > 0 && (
        <div style={{ marginBottom: '0.75rem' }}>
          <p className="combo-tray-group-label">Bebida</p>
          <div className="combo-tray-slots">
            {Array.from({ length: combo.drinksCount }).map((_, i) => (
              <Slot key={i} filled={flatDrink[i]} type="drink" num={i + 1} />
            ))}
          </div>
        </div>
      )}

      {combo.saucesCount > 0 && (
        <div>
          <p className="combo-tray-group-label">Salsas</p>
          <div className="combo-tray-slots">
            {Array.from({ length: combo.saucesCount }).map((_, i) => (
              <Slot key={i} filled={flatSauce[i]} type="sauce" num={i + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Badge icon inline ────────────────────────────────────────────────────────
function BadgeIcon({ type }) {
  if (type === 'hot')   return <Flame size={9} />;
  if (type === 'veg')   return <Leaf  size={9} />;
  if (type === 'spicy') return <Zap   size={9} />;
  return null;
}

// ─── Selection row ────────────────────────────────────────────────────────────
function SelectionRow({ item, qty, maxReached, onAdd, onRemove, tf }) {
  return (
    <div className="combo-sel-item">
      <div className="combo-sel-img">
        {item.img ? (
          <>
            <img src={item.img} alt={tf(item.name)}
              onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
            <div style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <UtensilsCrossed size={16} style={{ color: '#bbb' }} />
            </div>
          </>
        ) : (
          <UtensilsCrossed size={16} style={{ color: '#bbb' }} />
        )}
      </div>
      <div className="combo-sel-info">
        <div className="combo-sel-name">{tf(item.name)}</div>
        {item.badges?.map(b => (
          <span key={b} className={`badge badge-${b}`}
            style={{ fontSize: '0.65rem', marginRight: '2px', display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
            <BadgeIcon type={b} /> {b.toUpperCase()}
          </span>
        ))}
      </div>
      <div className="combo-sel-qty">
        <button className="combo-sel-qty-btn minus" onClick={onRemove} disabled={qty === 0}>
          <Minus size={10} />
        </button>
        <span className={`combo-sel-num${qty === 0 ? ' zero' : ''}`}>{qty}</span>
        <button className="combo-sel-qty-btn plus" onClick={onAdd} disabled={maxReached}>
          <Plus size={10} />
        </button>
      </div>
    </div>
  );
}

// ─── ComboModal ───────────────────────────────────────────────────────────────
export default function ComboModal({ combo, onClose }) {
  const { t, tf } = useLang();
  const { addCombo } = useCart();

  const steps = [];
  if (combo.empanadasCount > 0) steps.push('empanadas');
  if (combo.drinksCount > 0)    steps.push('drinks');
  if (combo.saucesCount > 0)    steps.push('sauces');

  const [step, setStep] = useState(0);
  const [empanadas, setEmpanadas] = useState([]);
  const [drinks,    setDrinks]    = useState([]);
  const [sauces,    setSauces]    = useState([]);

  const total = list => list.reduce((s, i) => s + i.qty, 0);
  const empTotal   = total(empanadas);
  const drinkTotal = total(drinks);
  const sauceTotal = total(sauces);

  const empDone   = empTotal   === combo.empanadasCount;
  const drinkDone = drinkTotal === combo.drinksCount || combo.drinksCount === 0;
  const sauceDone = sauceTotal === combo.saucesCount  || combo.saucesCount  === 0;
  const allDone   = empDone && drinkDone && sauceDone;

  function updateList(setList, itemId, delta, pool) {
    setList(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing) {
        const newQty = existing.qty + delta;
        if (newQty <= 0) return prev.filter(i => i.id !== itemId);
        return prev.map(i => i.id === itemId ? { ...i, qty: newQty } : i);
      }
      if (delta > 0) {
        const item = pool.find(i => i.id === itemId);
        return [...prev, { ...item, qty: 1 }];
      }
      return prev;
    });
  }

  function remaining(type) {
    if (type === 'empanadas') return combo.empanadasCount - empTotal;
    if (type === 'drinks')    return combo.drinksCount    - drinkTotal;
    if (type === 'sauces')    return combo.saucesCount    - sauceTotal;
    return 0;
  }

  function isDone(s) {
    if (s === 'empanadas') return empDone;
    if (s === 'drinks')    return drinkDone;
    if (s === 'sauces')    return sauceDone;
    return false;
  }

  function handleAddToCart() {
    if (!allDone) return;
    const label = list => list.map(i => `${i.qty}x ${tf(i.name)}`).join(', ');
    addCombo({
      type: 'combo', comboId: combo.id,
      name: `${tf(combo.name)} Combo`,
      price: combo.price, img: null,
      empanadas, drinks, sauces,
      detail: label(empanadas),
    });
    onClose();
  }

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const currentStep = steps[step];
  const curSelected = currentStep === 'empanadas' ? empTotal : currentStep === 'drinks' ? drinkTotal : sauceTotal;
  const curTotal    = currentStep === 'empanadas' ? combo.empanadasCount : currentStep === 'drinks' ? combo.drinksCount : combo.saucesCount;
  const curDone     = isDone(currentStep);

  return (
    <div className="combo-modal-overlay">
      <div className="combo-modal-backdrop" onClick={onClose} />
      <div className="combo-modal">
        <div className="combo-modal-header">
          <div>
            <h2 className="combo-modal-title">{tf(combo.name)}</h2>
            <p className="combo-modal-subtitle">
              {tf(combo.desc)} · <strong>${combo.price.toFixed(2)}</strong>
            </p>
          </div>
          <button className="icon-close-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <div className="combo-step-tabs">
          {steps.map((s, i) => (
            <button key={s}
              className={`combo-step-tab${step === i ? ' active' : ''}${isDone(s) ? ' done' : ''}`}
              onClick={() => setStep(i)}>
              {isDone(s) && <CheckCircle size={12} />}
              {t(`combo.step.${s}`)}
            </button>
          ))}
        </div>

        <div className="combo-modal-body">
          <div className="combo-selection-list">
            <div className="combo-counter-row">
              <span className="combo-counter-label">{t(`combo.step.${currentStep}`)}</span>
              <span className={`combo-counter-badge${curDone ? ' complete' : ''}`}>
                {curDone && <CheckCircle size={12} />}
                {curSelected} / {curTotal}
              </span>
            </div>

            {currentStep === 'empanadas' && empanadasList.map(item => (
              <SelectionRow key={item.id} item={item} tf={tf}
                qty={empanadas.find(i => i.id === item.id)?.qty ?? 0}
                maxReached={remaining('empanadas') <= 0}
                onAdd={() => updateList(setEmpanadas, item.id, 1, empanadasList)}
                onRemove={() => updateList(setEmpanadas, item.id, -1, empanadasList)}
              />
            ))}

            {currentStep === 'drinks' && menuData.drinks.map(item => (
              <SelectionRow key={item.id} item={item} tf={tf}
                qty={drinks.find(i => i.id === item.id)?.qty ?? 0}
                maxReached={remaining('drinks') <= 0}
                onAdd={() => updateList(setDrinks, item.id, 1, menuData.drinks)}
                onRemove={() => updateList(setDrinks, item.id, -1, menuData.drinks)}
              />
            ))}

            {currentStep === 'sauces' && menuData.sauces.map(item => (
              <SelectionRow key={item.id} item={item} tf={tf}
                qty={sauces.find(i => i.id === item.id)?.qty ?? 0}
                maxReached={remaining('sauces') <= 0}
                onAdd={() => updateList(setSauces, item.id, 1, menuData.sauces)}
                onRemove={() => updateList(setSauces, item.id, -1, menuData.sauces)}
              />
            ))}
          </div>

          <OrderTray combo={combo} empanadas={empanadas} drinks={drinks} sauces={sauces} tf={tf} />
        </div>

        <div className="combo-modal-footer">
          <button className="combo-nav-btn" onClick={() => setStep(s => s - 1)} disabled={step === 0}>
            <ChevronLeft size={16} /> {t('btn.back')}
          </button>

          {!allDone && step === steps.length - 1 && (
            <span className="combo-modal-hint">{t('combo.complete')}</span>
          )}

          {step < steps.length - 1 ? (
            <button className="combo-nav-btn" style={{ color: 'var(--primary)', fontWeight: 700 }}
              onClick={() => setStep(s => s + 1)}>
              {t('btn.next')} <ChevronRight size={16} />
            </button>
          ) : (
            <button className="combo-add-btn" onClick={handleAddToCart} disabled={!allDone}>
              <ShoppingCart size={15} /> {t('combo.addToCart')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
