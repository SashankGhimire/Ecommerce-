import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { motion, AnimatePresence } from 'motion/react';
import { cn, formatPrice } from '../utils/utils';

export const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState(15000);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Apparel', 'Accessories', 'Footwear'];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = p.price <= priceRange;
        return matchesCategory && matchesSearch && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="space-y-2">
          <p className="text-xs font-bold text-accent uppercase tracking-widest">Full collection</p>
          <h1 className="text-5xl font-bold tracking-tightest text-primary">Shop All</h1>
          <p className="text-stone-500 font-medium max-w-lg">Explore polished essentials for daily wear, travel, and considered gifting.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search pieces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-muted border border-transparent rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none focus:bg-white focus:border-accent transition-all"
              id="shop-search"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "p-3 rounded-lg transition-all md:hidden border",
              showFilters ? "bg-primary text-white border-primary" : "border-gray-200 bg-white"
            )}
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="hidden lg:block space-y-10">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Categories</h4>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'text-left text-sm font-medium py-1.5 transition-all w-fit',
                    selectedCategory === cat 
                      ? 'text-primary border-b-2 border-accent' 
                      : 'text-stone-400 hover:text-primary'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Max Price</h4>
              <span className="text-sm font-bold text-primary">{formatPrice(priceRange)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="15000"
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-accent cursor-pointer"
              id="shop-price-range"
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Sort By</h4>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none bg-muted border border-transparent rounded-lg py-3 px-4 text-sm focus:outline-none focus:bg-white focus:border-accent cursor-pointer transition-all"
                id="shop-sort"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6 text-sm text-stone-500">
            <span>{filteredProducts.length} pieces</span>
            <span className="hidden sm:inline">Free shipping over Rs. 5,000</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-muted rounded-xl border border-dashed border-stone-200">
              <p className="text-xl font-bold text-primary mb-2">No pieces found</p>
              <p className="text-stone-500 mb-8">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setPriceRange(15000);
                }}
                className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-accent transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm lg:hidden"
              onClick={() => setShowFilters(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 h-[80vh] bg-white z-[70] p-8 lg:hidden rounded-t-xl overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-stone-100 rounded-md" aria-label="Close filters">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          'px-6 py-2 rounded-lg text-sm font-bold border transition-all',
                          selectedCategory === cat ? 'bg-primary border-primary text-white shadow-lg' : 'border-stone-200 text-stone-500'
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Max Price: {formatPrice(priceRange)}</h4>
                  <input
                    type="range"
                    min="0"
                    max="15000"
                    step="500"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-black"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Sort By</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'newest', label: 'Newest' },
                      { id: 'price-low', label: 'Price: Low-High' },
                      { id: 'price-high', label: 'Price: High-Low' },
                      { id: 'rating', label: 'Top Rated' },
                    ].map(sort => (
                      <button
                        key={sort.id}
                        onClick={() => setSortBy(sort.id)}
                        className={cn(
                          'p-4 rounded-lg text-xs font-bold border text-center transition-all',
                          sortBy === sort.id ? 'bg-accent border-accent text-white shadow-lg' : 'border-stone-100 bg-stone-50 text-stone-500'
                        )}
                      >
                        {sort.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold uppercase tracking-widest shadow-xl"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
