import React from 'react';

const FAQPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <strong>How long does shipping take?</strong>
          <p className="text-sm text-gray-600 mt-2">Most orders ship within 1–2 business days. Delivery times vary by location.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <strong>What is your return policy?</strong>
          <p className="text-sm text-gray-600 mt-2">We offer a 30-day window for returns on unused items in original packaging.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <strong>Do you offer subscribe & save?</strong>
          <p className="text-sm text-gray-600 mt-2">Yes—save on auto-delivery for your pet’s staples.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <strong>Is there a loyalty program?</strong>
          <p className="text-sm text-gray-600 mt-2">Join the Pet Stuff Club for exclusive deals and tips.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;