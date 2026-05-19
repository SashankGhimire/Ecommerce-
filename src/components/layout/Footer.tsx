import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#f7f3ed] text-primary border-t border-stone-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="text-xl font-bold tracking-tightest flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center shadow-sm">
                <div className="w-2.5 h-2.5 bg-white rotate-45" />
              </div>
              <span>AURA.</span>
            </Link>
            <p className="text-stone-600 text-sm max-w-xs leading-relaxed">
              Design-led essentials for the modern lifestyle.
              Elevating the everyday through technical innovation and minimalist form.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-stone-600">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Pieces</Link></li>
              <li><Link to="/shop?category=Apparel" className="hover:text-accent transition-colors">Apparel</Link></li>
              <li><Link to="/shop?category=Accessories" className="hover:text-accent transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-stone-600">
              <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 gap-4 text-[10px] font-bold uppercase tracking-widest text-stone-500">
          <p>© 2025 AURA ESSENTIALS</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
