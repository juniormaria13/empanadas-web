import { Flame, Leaf, Zap } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';

const cfg = {
  hot:   { Icon: Flame, cls: 'badge-hot',   key: 'badge.hot'   },
  veg:   { Icon: Leaf,  cls: 'badge-veg',   key: 'badge.veg'   },
  spicy: { Icon: Zap,   cls: 'badge-spicy', key: 'badge.spicy' },
};

export default function Badge({ type }) {
  const { t } = useLang();
  const c = cfg[type];
  if (!c) return null;
  const { Icon } = c;
  return (
    <span className={`badge ${c.cls}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
      <Icon size={10} /> {t(c.key)}
    </span>
  );
}
