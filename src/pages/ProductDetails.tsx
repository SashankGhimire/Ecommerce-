import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, ArrowLeft, Truck, ShieldCheck, RotateCcw, Share2, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ui/ProductCard';
import { SafeImage } from '../components/ui/SafeImage';
import { motion } from 'motion/react';
import { cn, formatPrice } from '../utils/utils';

export const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, addToWishlist, isInWishlist } = useStore();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl font-bold">Product not found</h2>
        <Link to="/shop" className="bg-primary text-white px-8 py-3 rounded-lg font-bold">
          Back to Shop
        </Link>
      </div>
    );
  }

  const wishlisted = isInWishlist(product.id);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
        <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-gray-300">{product.category}</span>
        <span>/</span>
        <span className="text-primary">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 lg:mb-24">
        {/* Image Gallery */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="space-y-4"
        >
          <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden group relative">
            <SafeImage
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
             {product.onSale && (
                <div className="absolute top-6 left-6 bg-accent text-white text-xs font-bold px-4 py-2 rounded-md uppercase tracking-widest shadow-xl">
                  Save {product.discount}%
                </div>
              )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-accent transition-all">
                <SafeImage src={product.image} alt={`${product.name} thumbnail`} className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col h-full"
        >
          <div className="flex justify-between items-start gap-4 mb-4">
            <div className="space-y-1">
              <p className="text-sm font-bold text-accent uppercase tracking-widest">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tightest text-primary leading-tight">{product.name}</h1>
            </div>
            <button 
              onClick={() => addToWishlist(product)}
              className={cn(
                "p-4 rounded-lg border transition-all",
                wishlisted ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" : "border-gray-200 hover:bg-gray-50"
              )}
            >
              <Heart className={cn("w-6 h-6", wishlisted && "fill-current")} />
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-1 bg-accent/10 px-3 py-1 rounded-md text-xs font-bold text-accent">
              <Star className="w-4 h-4 fill-current" />
              {product.rating}
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.reviews} Reviews</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-4 mb-10">
            {product.onSale ? (
              <>
                <span className="text-4xl font-bold text-primary">
                  {formatPrice(product.price * (1 - (product.discount || 0) / 100))}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="text-4xl font-bold text-primary">{formatPrice(product.price)}</span>
            )}
            <span className="text-xs font-bold text-accent bg-accent/5 px-3 py-1 rounded-md uppercase tracking-widest">In Stock</span>
          </div>

          <p className="text-gray-500 leading-relaxed mb-10 text-lg">
            {product.description}
          </p>

          <div className="space-y-8 mt-auto">
            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
               <div className="space-y-3">
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Size</p>
                 <div className="flex gap-2">
                   {['S', 'M', 'L', 'XL'].map(size => (
                     <button key={size} className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-sm font-bold hover:border-primary hover:bg-primary hover:text-white transition-all">
                       {size}
                     </button>
                   ))}
                 </div>
               </div>
               <div className="space-y-3">
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Quantity</p>
                 <div className="flex items-center border border-gray-200 rounded-xl w-fit p-1 bg-muted">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold px-2">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                 </div>
               </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  for(let i=0; i<quantity; i++) addToCart(product);
                }}
                className="flex-grow bg-primary text-white py-5 rounded-lg font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent transition-all shadow-xl shadow-accent/10 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Bag
              </button>
              <button 
                className="sm:w-20 bg-muted border border-transparent py-5 rounded-lg flex items-center justify-center hover:border-gray-200 transition-all text-gray-500 hover:text-primary"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
               <div className="flex flex-col items-center gap-2 text-center">
                 <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-gray-400">
                   <Truck className="w-5 h-5" />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">Fast Ship</span>
               </div>
               <div className="flex flex-col items-center gap-2 text-center">
                 <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-gray-400">
                   <ShieldCheck className="w-5 h-5" />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">Certified</span>
               </div>
               <div className="flex flex-col items-center gap-2 text-center">
                 <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-gray-400">
                   <RotateCcw className="w-5 h-5" />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">30d Return</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technical Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-16 lg:py-20 border-t border-gray-100 mb-28 lg:mb-40">
        <div className="lg:col-span-4 space-y-10">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Technical Specification</h3>
          <div className="space-y-8">
            {[
              { label: 'Material', value: 'Technical Nylon Fabric' },
              { label: 'Density', value: '450 GSM Double Layer' },
              { label: 'Origin', value: 'Assembled in Portugal' },
              { label: 'Care', value: 'Dry Clean Recommended' },
            ].map((spec, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">{spec.label}</span>
                <span className="text-xs font-black uppercase tracking-widest text-primary">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-8 bg-[#F8F8F8] p-8 md:p-16 flex flex-col justify-center space-y-10 border border-gray-100 rounded-xl">
           <div className="space-y-6">
             <h3 className="text-3xl font-serif italic text-primary">The Vision Behind</h3>
             <p className="text-gray-400 font-medium text-lg leading-relaxed italic max-w-2xl">
                "Our aim was to deconstruct traditional luxury and rebuild it with a focus on form and function. This piece represents the quiet confidence of modern design: technical, refined, and essentially timeless."
             </p>
           </div>
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-primary grayscale" />
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Marcus Chen</p>
                <p className="text-[9px] font-bold text-accent uppercase tracking-widest">Founder & Creative Director</p>
              </div>
           </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="space-y-20 border-t border-gray-100 pt-32">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
             <span className="text-xs font-black text-accent uppercase tracking-[0.4em]">Selection</span>
             <h2 className="text-3xl md:text-5xl font-black tracking-tightest uppercase text-primary">You May Also Like</h2>
          </div>
          <Link to="/shop" className="text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-accent hover:border-accent transition-colors">Explore All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
