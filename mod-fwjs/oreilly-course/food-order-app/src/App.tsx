import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState<boolean>(false)
  
  return (
    <CartProvider>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <Header onShowCart={() => setShowCart(true)} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
