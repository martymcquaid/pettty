import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { CategorySlug } from '../types';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: CategorySlug }>();
  const category = slug as CategorySlug;
  const items = products.filter((p) => p.category === category);

  const categoryName = {
    dogs: 'Dogs',
    cats: 'Cats',
    birds: 'Birds',
    fish: 'Fish',
    reptiles: 'Reptiles',
    'small-animals': 'Small Animals',
  }[category];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="relative h-52 md:h-72 bg-cover" style={{ backgroundImage: `url(${items[0]?.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&h=900&fit=crop'})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
            {categoryName} Products
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={(pp) => alert(`Added ${pp.title} to cart`)} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;