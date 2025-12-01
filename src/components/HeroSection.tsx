import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556228450-4a5b9d7c9a03?w=1600&h=900&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/25" />
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-28 text-white flex flex-col items-start justify-center h-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-2xl">
          Everything Your Pet Needs—All in One Place!
        </h1>
        <p className="mt-4 text-lg max-w-2xl drop-shadow-md">
          Shop quality food, toys, accessories, and wellness items for every kind of pet.
        </p>
        <div className="mt-6">
          <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full mr-3 shadow-xl hover:shadow-2xl transition-all">
            Shop Now
          </button>
          <button className="bg-white/20 border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/40 transition-colors">
            Browse Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;