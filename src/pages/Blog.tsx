import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const posts = [
    { id: 'b1', title: 'DIY Pet Training Tips', excerpt: 'Simple steps to teach tricks and manners at home.' },
    { id: 'b2', title: 'Choosing the Right Toys', excerpt: 'What to look for in durable, safe pet toys.' },
    { id: 'b3', title: 'Healthy Snack Ideas', excerpt: 'Balanced treats your pet will love.' },
  ];
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-6">Blog & Guides</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.id} to={`/blog/${p.id}`} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
            <div className="h-40 bg-gray-100 rounded mb-2" aria-label="blog image" />
            <div className="font-semibold mb-1">{p.title}</div>
            <p className="text-sm text-gray-600">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;