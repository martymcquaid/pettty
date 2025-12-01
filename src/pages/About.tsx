import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold mb-4">About Pet Stuff</h1>
      <p className="mb-4">
        Pet Stuff is a boutique online pet shop dedicated to helping pets live happy, healthy lives. We curate high-quality foods, toys, and care items from trusted brands across dogs, cats, birds, fish, reptiles, and small animals.
      </p>
      <p className="mb-4">Mission: Make responsible pet ownership easy and joyful with a trustworthy store, friendly service, and fast shipping.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {[
          { name: 'Quality Commitments', text: 'We test products and vet suppliers to ensure safety and effectiveness.' },
          { name: 'Customer Care', text: 'Friendly, responsive support with care for both pets and humans.' },
          { name: 'Sustainability', text: 'We prioritize eco-friendly packaging and ethical sourcing.' },
        ].map((m) => (
          <div key={m.name} className="p-6 bg-white rounded-2xl shadow-md">
            <div className="font-semibold mb-2">{m.name}</div>
            <div className="text-sm text-gray-600">{m.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;