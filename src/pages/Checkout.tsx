import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { items, total } = useCart();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postal: '',
  });
  const [method, setMethod] = useState<'card' | 'paypal'>('card');
  const [agree, setAgree] = useState(true);
  const [card, setCard] = useState({ number: '', expiry: '', cvc: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    // In a real app, trigger payment processing here
    alert('Thank you! Your order has been placed.');
  };

  return (
    <div className="container mx-auto px-4 py-16 text-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Checkout</h1>
        <span className="text-sm text-slate-500 ml-4 hidden md:inline">Secure • Fast • Easy</span>
      </div>

      {/* Subtle gradient divider to elevate the page visually */}
      <div className="w-full h-1 rounded-full mb-6 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500" />

      {/* Progress indicators (Delivery / Payment / Review) */}
      <div className="hidden md:flex items-center gap-6 mb-8" aria-label="Checkout progress">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-teal-600" />
          <span className="font-semibold text-sm">Delivery</span>
        </div>
        <div className="h-1 w-8 bg-teal-200 rounded-full" aria-hidden />
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-teal-200" />
          <span className="font-semibold text-sm text-slate-500">Payment</span>
        </div>
        <div className="h-1 w-8 bg-teal-200 rounded-full" aria-hidden />
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-slate-200" />
          <span className="font-semibold text-sm text-slate-500">Review</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6">
        {/* Delivery Details - spans two columns on md+ to make room for the summary on the right */}
        <section className="space-y-4 bg-white rounded-2xl p-6 shadow-xl md:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Delivery Details</h3>
            <span className="text-xs text-teal-600 font-medium">Step 1 of 3</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="Alex Paws"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="alex@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Address</label>
            <input
              className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              required
              placeholder="123 Pet Street"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">City</label>
              <input
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                placeholder="Petville"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Postal Code</label>
              <input
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                value={form.postal}
                onChange={(e) => setForm({ ...form, postal: e.target.value })}
                placeholder="12345"
              />
            </div>
          </div>
        </section>

        {/* Order Summary - right column on md+ (spans 1 column) */}
        <section className="bg-white rounded-2xl p-6 shadow-xl md:col-span-1 sticky md:top-20 h-full">
          <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
          <div className="space-y-2 text-sm text-slate-700 max-h-72 overflow-auto pr-2">
            {items.map((it) => (
              <div key={it.product.id} className="flex items-center justify-between">
                <span className="truncate" style={{ maxWidth: '60%' }}>
                  {it.product.title} &times; {it.quantity}
                </span>
                <span>${(it.product.price * it.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <hr className="my-3 border-gray-200" />
          <div className="flex justify-between font-semibold text-sm">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Shipping</span>
            <span>Free over ${Math.max(50, total).toFixed(0)}</span>
          </div>
          <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-center">
            <span className="font-bold">Total</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
        </section>

        {/* Payment Details - spans all 3 columns on md+ (row 2) */}
        <section className="space-y-4 bg-white rounded-2xl p-6 shadow-xl md:col-span-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Payment</h3>
            <span className="text-xs text-teal-600 font-medium">Secure payment</span>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="method" value="card" checked={method === 'card'} onChange={() => setMethod('card')} />
              <span>Credit / Debit Card</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="method" value="paypal" checked={method === 'paypal'} onChange={() => setMethod('paypal')} />
              <span>PayPal</span>
            </label>
          </div>

          {method === 'card' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <input
                placeholder="Card Number"
                className="col-span-2 border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                value={card.number}
                onChange={(e) => setCard({ ...card, number: e.target.value })}
              />
              <input
                placeholder="MM/YY"
                className="border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                value={card.expiry}
                onChange={(e) => setCard({ ...card, expiry: e.target.value })}
              />
              <input
                placeholder="CVC"
                className="border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                value={card.cvc}
                onChange={(e) => setCard({ ...card, cvc: e.target.value })}
              />
            </div>
          )}

          {method === 'paypal' && (
            <div className="text-sm text-slate-700 mt-2 p-2 bg-slate-50 rounded-lg">
              You will be redirected to PayPal to complete your purchase.
            </div>
          )}
        </section>

        {/* Terms & Actions - full width row on all breakpoints */}
        <section className="md:col-span-3 bg-white rounded-2xl p-6 shadow-xl mt-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span>I agree to the terms and conditions</span>
          </label>
          <div className="flex items-center justify-between mt-4">
            <Link to="/" className="text-teal-700 hover:underline">Continue Shopping</Link>
            <button
              className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition transform"
              type="submit"
              disabled={!agree}
            >
              Confirm Purchase
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default CheckoutPage;