import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, CreditCard, Box } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { motion, AnimatePresence } from 'motion/react';
import { formatPrice } from '../utils/utils';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useStore();
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-8">
        <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center relative">
          <ShoppingBag className="w-12 h-12 text-gray-200" />
          <div className="absolute inset-0 border-2 border-dashed border-gray-100 rounded-full rotate-45" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter">Your bag is empty</h2>
          <p className="text-gray-500 max-w-sm mx-auto">
            Looks like you haven't added anything to your bag yet. Start exploring our collections to find your perfect pieces.
          </p>
        </div>
        <Link 
          to="/shop" 
          className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-purple-600 transition-all shadow-xl"
        >
          Discover Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold tracking-tighter mb-12">SHOPPING BAG <span className="text-gray-300 ml-4">{totalItems} Items</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Item List */}
        <div className="lg:col-span-2 space-y-12">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col sm:flex-row gap-8 pb-12 border-b border-gray-100 last:border-0 group"
              >
                <div className="w-full sm:w-48 aspect-[4/5] bg-gray-50 rounded-3xl overflow-hidden relative">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <Link to={`/product/${item.id}`} className="absolute inset-0" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                   <div className="space-y-4">
                      <div className="flex justify-between items-start">
                         <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.category}</p>
                            <Link to={`/product/${item.id}`}>
                              <h3 className="text-2xl font-bold tracking-tight hover:text-purple-600 transition-colors uppercase">{item.name}</h3>
                            </Link>
                         </div>
                         <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                          id={`remove-cart-${item.id}`}
                         >
                            <Trash2 className="w-5 h-5" />
                         </button>
                      </div>
                      
                      <div className="flex items-center gap-6">
                         <div className="space-y-1">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Availability</span>
                            <p className="text-xs font-bold text-green-500 uppercase">In Stock</p>
                         </div>
                         <div className="space-y-1">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Size</span>
                            <p className="text-xs font-bold uppercase">Medium</p>
                         </div>
                      </div>
                   </div>

                   <div className="flex flex-wrap items-center justify-between gap-6 pt-8 mt-auto">
                      <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-gray-50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors"
                          id={`decrease-qty-${item.id}`}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors"
                          id={`increase-qty-${item.id}`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Total</p>
                        <p className="text-2xl font-bold tracking-tighter">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary Card */}
        <div className="space-y-8 sticky top-32">
          <div className="bg-gray-50 rounded-[40px] p-8 space-y-8">
            <h3 className="text-xl font-bold border-b border-gray-100 pb-6 uppercase tracking-tighter">Order Summary</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500 uppercase tracking-widest text-xs">Subtotal</span>
                <span className="font-bold">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500 uppercase tracking-widest text-xs">Shipping</span>
                <span className="font-bold text-green-500">{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500 uppercase tracking-widest text-xs">Tax Estimated</span>
                <span className="font-bold">{formatPrice(subtotal * 0.1)}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
               <div className="flex justify-between items-baseline mb-8">
                  <span className="text-2xl font-bold tracking-tighter uppercase">Total</span>
                  <span className="text-4xl font-bold tracking-tighter">{formatPrice(total + (subtotal * 0.1))}</span>
               </div>
               
               <button className="w-full bg-black text-white py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-purple-600 transition-all shadow-xl shadow-purple-200/20 group">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </button>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] text-center">Accepted Payment Methods</p>
              <div className="flex justify-center gap-4 text-gray-300">
                <CreditCard className="w-6 h-6 hover:text-black transition-colors cursor-pointer" />
                <Box className="w-6 h-6 hover:text-black transition-colors cursor-pointer" />
                <div className="w-6 h-6 rounded bg-gray-300 hover:bg-black transition-colors cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-purple-600 rounded-[32px] p-8 text-white relative overflow-hidden group border border-purple-500">
            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-80 underline underline-offset-4">Premium Member</p>
            <h4 className="text-xl font-bold tracking-tight mb-4">You're saving $45 today by being a member.</h4>
            <Link to="/about" className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
               View Benefits <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
