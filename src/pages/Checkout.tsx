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
  const [method, setMethod] = useState('card');
  const [agree, setAgree] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    alert('Thank you! Your order has been placed.');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <section className="space-y-4 bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-semibold">Delivery Details</h3>
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input className="w-full border rounded px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div>
            <label className="block text-sm mb-1">Address</label>
            <input className="w-full border rounded px-3 py-2" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">City</label>
              <input className="w-full border rounded px-3 py-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm mb-1">Postal Code</label>
              <input className="w-full border rounded px-3 py-2" value={form.postal} onChange={(e) => setForm({ ...form, postal: e.target.value })} />
            </div>
          </div>
        </section>

        <section className="space-y-4 bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-semibold">Payment</h3>
          <div className="flex items-center gap-3">
            <input type="radio" name="method" value="card" checked={method==='card'} onChange={()=>setMethod('card')} />
            <span>Credit / Debit Card</span>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" name="method" value="paypal" checked={method==='paypal'} onChange={()=>setMethod('paypal')} />
            <span>PayPal</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="text-sm text-gray-600 mb-2">Order Summary</div>
            {items.map((it) => (
              <div key={it.product.id} className="flex justify-between text-sm mb-1">
                <span>{it.product.title} x{it.quantity}</span>
                <span>${(it.product.price * it.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </section>
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-md">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
            <span>I agree to the terms and conditions</span>
          </label>
          <div className="flex items-center justify-between mt-4">
            <Link to="/" className="text-teal-700 hover:underline">Continue Shopping</Link>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full" type="submit" disabled={!agree}>
              Confirm Purchase
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;