import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';

type Props = {
  product: Product;
  onAdd?: (p: Product) => void;
};

const RatingStars: React.FC<{ rating: number; reviews?: number }> = ({ rating, reviews }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1 text-sm text-yellow-500" aria-label={`Rating ${rating} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < full ? '★' : i === full && half ? '☆' : '☆'}</span>
      ))}
      {reviews !== undefined && (
        <span className="ml-2 text-gray-500" aria-label={`Reviews: ${reviews}`}>({reviews})</span>
      )}
    </div>
  );
};

const ProductCard: React.FC<Props> = ({ product, onAdd }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
      <Link to={`/product/${product.id}`} aria-label={product.title}>
        <div className="aspect-w-4 aspect-h-3 overflow-hidden bg-gray-100">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
          <RatingStars rating={product.rating} reviews={product.reviews} />
          <div className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
            <button
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
              onClick={(e) => {
                e.preventDefault();
                onAdd?.(product);
              }}
              aria-label={`Add ${product.title} to cart`}
            >
              Add
            </button>
          </div>
        </div>
      </Link>
      <div className="absolute top-2 right-2 p-1 bg-white/80 rounded-full shadow">
        <HeartIcon className="h-5 w-5 text-pink-500" />
      </div>
    </div>
  );
};

export default ProductCard;