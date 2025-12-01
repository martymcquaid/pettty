import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Link } from 'react-router-dom';
import RatingStars from '../components/RatingStars';

const Home: React.FC = () => {
  const featured = products.slice(0, 8);
  return (
    <div className="text-slate-800">
      <HeroSection />
      <section className="container mx-auto px-4 py-16" aria-label="Category highlights">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {categories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white">
              <div className="h-32 md:h-40 bg-cover" style={{ backgroundImage: `url(${c.image})` }} aria-label={`${c.name} category`} />
              <div className="p-4 text-center">
                <span className="font-semibold">{c.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link to="/shop" className="text-teal-700 hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={(prod) => alert(`Added ${prod.title} to cart`)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-teal-50 via-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-xl">
              <div className="text-teal-600 mb-2">Fast Shipping</div>
              <div>Receive orders quickly with reliable delivery options.</div>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-xl">
              <div className="text-blue-600 mb-2">Safe Checkout</div>
              <div>SSL encryption and trusted payment providers.</div>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-xl">
              <div className="text-amber-600 mb-2">Quality Assured</div>
              <div>Premium products from trusted brands and farms.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Anna Kim', role: 'Dog Mom', quote: 'Pet Stuff has become our go-to store. My labradoodle loves the treats and the delivery is fast.' },
              { name: 'Marcus Lee', role: 'Cat Owner', quote: 'Great variety and the product quality is outstanding. Highly recommended.' },
              { name: 'Priya Sharma', role: 'Bird Enthusiast', quote: 'Excellent customer service and rapid shipping. My parrot approves!' },
            ].map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-teal-500" aria-label="avatar" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
                <p className="text-sm">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-2">Join the Pet Stuff Club!</h3>
          <p className="mb-4">Get tips, exclusive deals, and pet care guidance straight to your inbox.</p>
          <form className="flex justify-center gap-2">
            <input type="email" placeholder="Email address" aria-label="Email" className="p-3 rounded-full w-72" />
            <button className="bg-white text-teal-700 px-6 py-3 rounded-full font-semibold">Join</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;