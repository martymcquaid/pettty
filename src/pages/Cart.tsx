import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, update, remove, total, clear } = useCart();

  const grand = useMemo(() => total, [total]);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty. Browse our categories to add tasty treats for your pet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.product.id} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
              <img src={it.product.image} alt={it.product.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{it.product.title}</div>
                <div className="text-sm text-gray-500">{it.product.brand}</div>
                <div className="mt-2 text-sm">${it.product.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={it.quantity}
                  onChange={(e) => update(it.product.id, Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1"
                />
                <button className="text-red-600" onClick={() => remove(it.product.id)} aria-label="Remove item">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600">Need help? chat with us live or email support.</div>
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <span className="font-semibold">Subtotal</span>
          <span className="text-xl font-bold">${grand.toFixed(2)}</span>
          <Link to="/checkout" className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">Checkout</Link>
          <button onClick={clear} className="px-4 py-2 border rounded">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;