export type CategorySlug = 'dogs' | 'cats' | 'birds' | 'fish' | 'reptiles' | 'small-animals';

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: CategorySlug;
  price: number;
  rating: number; // 0-5
  reviews: number;
  image: string;
  images: string[];
  stock: number;
  description: string;
  ingredients?: string;
  brand: string;
  sizeOptions?: { label: string; value: string }[];
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}