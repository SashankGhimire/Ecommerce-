import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { motion } from 'motion/react';
import { cn, formatPrice } from '../utils/utils';

export const Home = () => {
  const featuredProducts = products.filter(p => !p.onSale).slice(0, 4);
  const trendingProducts = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center px-6 overflow-hidden bg-[#fafafa]">
        {/* Subtle Background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-60">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold text-accent uppercase tracking-widest mb-6 block">Summer 2026 Collection</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tightest leading-[1] mb-8 text-primary">
              Elevated Essentials <br /> for Modern Life.
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Discover our curated collection of technical apparel and high-performance lifestyle pieces designed for the modern minimalists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-accent transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/shop"
                className="px-10 py-4 border border-gray-200 text-primary font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <p className="text-xs font-bold text-accent uppercase tracking-widest">Selected Works</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tightest">Featured Arrivals</h2>
            </div>
            <Link to="/shop" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">
              View All Pieces
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Simple */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Apparel', img: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=800' },
              { name: 'Accessories', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800' },
              { name: 'Footwear', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800' },
            ].map((cat, i) => (
              <Link key={i} to={`/shop?category=${cat.name}`} className="group relative aspect-square rounded-3xl overflow-hidden shadow-sm">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold tracking-tightest">{cat.name}</h3>
                  <p className="text-xs font-medium opacity-80 uppercase tracking-widest mt-1">Explore</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner / CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden bg-black py-20 px-10 text-center text-white">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
              alt="CTA bg" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">JOIN THE INNER CIRCLE</h2>
            <p className="text-gray-300 text-lg">
              Get exclusive early access to drops, community-only events, and a 15% discount on your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="flex-grow bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-4 px-6 text-sm uppercase tracking-widest focus:outline-none focus:border-white transition-colors"
                id="home-newsletter-email"
              />
              <button className="bg-white text-black py-4 px-8 rounded-full font-bold uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all shadow-xl">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
