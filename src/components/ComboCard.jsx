import { useLang } from '../context/LanguageContext.jsx';

export default function ComboCard({ combo, onCustomize }) {
  const { tf, t } = useLang();

  return (
    <div className="combo-card">
      <div className="combo-info">
        <h4>{tf(combo.name)}</h4>
        <p>{tf(combo.desc)}</p>
        {combo.save > 0 && (
          <span className="save-badge">{t('save')} ${combo.save.toFixed(2)}</span>
        )}
      </div>
      <div className="combo-action">
        <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem', textAlign: 'right' }}>
          ${combo.price.toFixed(2)}
        </span>
        <button className="btn btn-primary" onClick={() => onCustomize(combo)}
          style={{ padding: '0.55rem 1.1rem', fontSize: '0.9rem' }}>
          {t('btn.select')}
        </button>
      </div>
    </div>
  );
}
