import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, User, Search } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, wishlist } = useStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-5',
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tightest flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rotate-45" />
          </div>
          <span>AURA.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                location.pathname === link.path ? 'text-black' : 'text-gray-500'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-purple-600 text-white text-[10px] flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-purple-600 rounded-full" />
            )}
            {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-[10px] flex items-center justify-center rounded-full">
                    {totalItems}
                </span>
            )}
          </Link>
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xl font-bold tracking-tighter">MODRN.</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium tracking-tight hover:text-purple-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-12 border-t border-gray-100 absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium">My Account</span>
                </div>
                <p className="text-xs text-gray-400">© 2026 MODRN. All rights reserved.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
