import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ui/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

export const Wishlist = () => {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-8">
        <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center relative">
          <Heart className="w-12 h-12 text-gray-200" />
          <div className="absolute inset-0 border-2 border-dashed border-gray-100 rounded-full scale-110" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter">Your wishlist is empty</h2>
          <p className="text-gray-500 max-w-sm mx-auto font-medium">
            Keep track of all your favorite pieces in one place. Add them now, buy them later.
          </p>
        </div>
        <Link 
          to="/shop" 
          className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-purple-600 transition-all shadow-xl"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div className="space-y-2">
            <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.2em] underline underline-offset-8 decoration-2 mb-4">Saved Pieces</p>
            <h1 className="text-6xl font-bold tracking-tighter text-gray-900">MY WISHLIST</h1>
        </div>
        <Link to="/shop" className="text-sm font-bold flex items-center gap-2 hover:text-purple-600 transition-all border-b-2 border-black/10 pb-1">
          Continue Shopping <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        <AnimatePresence>
          {wishlist.map((product) => (
            <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
            >
                <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Promotion banner for wishlist */}
      {wishlist.length > 0 && (
         <div className="mt-40 bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center rounded-[50px] p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            <div className="relative z-10 space-y-6 max-w-xl mx-auto">
                <h3 className="text-4xl font-bold tracking-tighter">GRAB THEM BEFORE THEY'RE GONE</h3>
                <p className="text-gray-300 font-medium leading-relaxed">
                    Some items in your wishlist are in high demand and low stock. Complete your purchase now and get free priority shipping on memberships.
                </p>
                <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all shadow-2xl">
                    Add All to Bag
                </button>
            </div>
         </div>
      )}
    </div>
  );
};
