import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { SafeImage } from '../components/ui/SafeImage';
import { motion } from 'motion/react';

export const Home = () => {
  const featuredProducts = products.filter(p => !p.onSale).slice(0, 4);

  return (
    <div className="space-y-0">
      <section className="relative min-h-[620px] h-[90svh] md:min-h-[720px] md:h-[92vh] flex items-center px-6 overflow-hidden bg-[#ece6dc]">
        <SafeImage
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=85&w=2200"
          alt="Aura seasonal collection"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 to-transparent" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="text-xs font-bold uppercase tracking-widest mb-6 block text-white/75">Summer 2026 Collection</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tightest leading-[1.05] mb-8">
              AURA Essentials
            </h1>
            <p className="text-white/80 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
              Tailored everyday pieces, warm-weather layers, and refined accessories selected for clean dressing that still feels personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-muted transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-white/35 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <p className="text-xs font-bold text-accent uppercase tracking-widest">New Season</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tightest">Featured Arrivals</h2>
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

      <section className="py-24 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Shop by Edit</p>
              <h2 className="text-3xl md:text-4xl font-bold">Curated for the way you dress</h2>
            </div>
            <p className="text-stone-500 max-w-md">Three focused categories with pieces that work together across weekday, travel, and off-duty wardrobes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Apparel', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000' },
              { name: 'Accessories', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800' },
              { name: 'Footwear', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800' },
            ].map((cat, i) => (
              <Link key={i} to={`/shop?category=${cat.name}`} className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
                <SafeImage src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-colors" />
                <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tightest">{cat.name}</h3>
                    <p className="text-xs font-medium opacity-80 uppercase tracking-widest mt-1">Explore</p>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-80 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Why shop with AURA</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tightest">Service made simple</h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-stone-500">
              Clear delivery, easier returns, and careful quality control before every order leaves our studio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Truck, title: 'Fast delivery', text: 'Complimentary shipping on orders over Rs. 5,000.' },
            { icon: RotateCcw, title: 'Easy returns', text: '30-day returns on unworn pieces in original condition.' },
            { icon: ShieldCheck, title: 'Quality checked', text: 'Each item is inspected and packed with care before dispatch.' },
          ].map((item) => (
            <div key={item.title} className="group border border-stone-200 rounded-xl p-7 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative rounded-xl overflow-hidden bg-[#f2ebe2] border border-stone-200 py-16 md:py-20 px-6 md:px-10 text-center text-primary">
          <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <div className="space-y-3">
              <p className="text-xs font-bold text-accent uppercase tracking-widest">Members first</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tightest">Join the private list</h2>
            </div>
            <p className="text-stone-600 text-base md:text-lg">
              Get first access to seasonal edits, restocks, and member-only pricing.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-grow bg-white border border-stone-200 rounded-lg py-4 px-5 text-sm focus:outline-none focus:border-accent transition-colors shadow-sm"
                id="home-newsletter-email"
              />
              <button className="bg-primary text-white py-4 px-7 rounded-lg font-bold hover:bg-accent transition-all shadow-xl">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
