import { createContext, useContext, useState } from 'react';
import { translations } from '../i18n/translations.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  function t(key, vars = {}) {
    let str = translations[lang]?.[key] ?? translations['en']?.[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(`{${k}}`, v);
    });
    return str;
  }

  // Helper: get bilingual field (name, desc objects)
  function tf(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] ?? obj['en'] ?? '';
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tf }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
