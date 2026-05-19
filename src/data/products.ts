export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isTrending?: boolean;
  onSale?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Silk Shirt',
    price: 4200,
    description: 'A luxurious silk shirt designed for modern comfort and timeless style. Perfect for both formal and casual settings.',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 124,
    isNew: true,
  },
  {
    id: '2',
    name: 'Classic Leather Boots',
    price: 8500,
    description: 'Handcrafted premium leather boots with a durable sole. Designed to age beautifully with time.',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 89,
    isTrending: true,
  },
  {
    id: '3',
    name: 'Urban Tech Parka',
    price: 12500,
    description: 'Weather-resistant technical parka for the modern explorer. Featuring modular pockets and recycled insulation.',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 56,
  },
  {
    id: '4',
    name: 'Modern Wrist Watch',
    price: 6800,
    description: 'Sleek matte finish with a minimalist dial. Features precision movement and a scratch-resistant sapphire crystal.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 210,
    onSale: true,
    discount: 15,
  },
  {
    id: '5',
    name: 'Premium Cotton Tee',
    price: 2200,
    description: 'Heavyweight organic cotton tee with a perfect boxy fit. A staple for any modern wardrobe.',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 450,
  },
  {
    id: '6',
    name: 'Hybrid Tech Sneaker',
    price: 6500,
    description: 'Breathable knit upper with responsive cushioning. The ultimate performance meets style sneaker.',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 132,
    isTrending: true,
  },
  {
    id: '7',
    name: 'Leather Tote Bag',
    price: 9800,
    description: 'Spacious and sophisticated. Hand-stitched full-grain leather that fits your laptop and essentials.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000',
    rating: 4.9,
    reviews: 78,
  },
  {
    id: '8',
    name: 'Sunglasses Mono',
    price: 3200,
    description: 'Acetate frames with polarized lenses. A statement piece that offers full UV protection.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 95,
    onSale: true,
    discount: 10,
  },
  {
    id: '9',
    name: 'Structured Crossbody Bag',
    price: 7200,
    description: 'A compact structured crossbody bag with a smooth leather finish, adjustable strap, and refined hardware for everyday use.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000',
    rating: 4.8,
    reviews: 64,
    isNew: true,
  },
];
