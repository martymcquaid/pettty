import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Rating, StarIcon } from '../components/RatingStars';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { add } = useCart();

  const [qty, setQty] = useState(1);

  if (!product) return (
    <div className="container mx-auto px-4 py-16">Product not found.</div>
  );

  return (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-96 md:h-full bg-cover" style={{ backgroundImage: `url('${product.image}')` }} aria-label={product.title} />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <div className="mb-2">
            <span className="text-sm text-gray-500">{product.brand}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <RatingStarsInline rating={product.rating} reviews={product.reviews} />
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-2">Price: ${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mb-4">{product.stock > 0 ? 'In stock' : 'Out of stock'} • {product.stock} left</p>
          {product.sizeOptions && (
            <div className="mb-4">
              <label className="block text-sm mb-1">Size</label>
              <select className="border rounded px-3 py-2" defaultValue={product.sizeOptions[0]?.value}>
                {product.sizeOptions!.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <input
            type="number"
            min={1}
            max={10}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-20 border rounded px-2 py-2"
          />
          <button
            className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition"
            onClick={() => add(product, qty)}
          >
            Add to Cart
          </button>
          <Link to={`/category/${product.category}`} className="ml-auto text-teal-700 hover:underline">
            Back to {product.category}
          </Link>
        </div>
      </div>
    </div>
  );
};

function RatingStarsInline({ rating, reviews }: { rating: number; reviews?: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1 text-sm text-yellow-500" aria-label={`Rating ${rating} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < full ? '★' : i === full && half ? '☆' : '☆'}</span>
      ))}
      {reviews !== undefined && <span className="ml-1 text-gray-500">({reviews})</span>}
    </div>
  );
}

export default ProductPage;