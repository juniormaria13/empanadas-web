import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'pampa-cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(item) {
    setItems(prev => {
      const existing = prev.find(i => i.cartId === item.cartId);
      if (existing) {
        return prev.map(i => i.cartId === item.cartId ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function addCombo(combo) {
    // Combos are always added as new unique entries with a timestamp id
    setItems(prev => [...prev, { ...combo, cartId: `combo-${Date.now()}`, qty: 1 }]);
  }

  function increment(cartId) {
    setItems(prev => prev.map(i => i.cartId === cartId ? { ...i, qty: i.qty + 1 } : i));
  }

  function decrement(cartId) {
    setItems(prev => {
      const item = prev.find(i => i.cartId === cartId);
      if (!item) return prev;
      if (item.qty <= 1) return prev.filter(i => i.cartId !== cartId);
      return prev.map(i => i.cartId === cartId ? { ...i, qty: i.qty - 1 } : i);
    });
  }

  function remove(cartId) {
    setItems(prev => prev.filter(i => i.cartId !== cartId));
  }

  function clear() {
    setItems([]);
  }

  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, addCombo, increment, decrement, remove, clear, totalQty, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
