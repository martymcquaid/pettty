import React from 'react';

const ContactPage: React.FC = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); alert('Thanks for reaching out!'); }}>
        <div className="space-y-3">
          <label className="block text-sm">Your Name</label>
          <input className="w-full border rounded px-3 py-2" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} required />
        </div>
        <div className="space-y-3">
          <label className="block text-sm">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} required />
        </div>
        <div className="md:col-span-2 space-y-3">
          <label className="block text-sm">Message</label>
          <textarea className="w-full border rounded px-3 py-2" rows={5} value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} required/>
        </div>
        <div className="md:col-span-2">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;