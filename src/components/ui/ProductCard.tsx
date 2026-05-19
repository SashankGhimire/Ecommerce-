import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../../data/products';
import { useStore } from '../../context/StoreContext';
import { motion } from 'motion/react';
import { cn, formatPrice } from '../../utils/utils';
import { SafeImage } from './SafeImage';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist, isInWishlist } = useStore();
  const wishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] bg-muted rounded-xl overflow-hidden mb-4 border border-stone-100">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-white text-primary text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest shadow-sm">
              New
            </span>
          )}
          {product.onSale && (
            <span className="bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest shadow-sm">
              Sale
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToWishlist(product);
          }}
          className={cn(
            'absolute top-3 right-3 z-10 p-2 rounded-md transition-all duration-300 backdrop-blur-md',
            wishlisted 
              ? 'bg-accent text-white' 
              : 'bg-white/80 text-primary hover:bg-white'
          )}
          id={`wishlist-btn-${product.id}`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={cn('w-4 h-4', wishlisted && 'fill-current')} />
        </button>

        <Link to={`/product/${product.id}`}>
          <SafeImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        <div className="absolute inset-x-3 bottom-3 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-primary text-white py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-accent transition-colors shadow-lg"
            id={`add-to-cart-btn-${product.id}`}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>

      <div className="space-y-1.5 px-1">
        <div className="flex justify-between items-start">
          <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
            {product.category}
          </p>
          <div className="flex items-center gap-1 text-[10px] font-bold text-stone-400">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span>{product.rating}</span>
          </div>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-bold text-primary group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          {product.onSale ? (
            <>
              <span className="text-sm font-bold text-primary">
                {formatPrice(product.price * (1 - (product.discount || 0) / 100))}
              </span>
              <span className="text-xs text-stone-400 line-through font-medium">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="text-sm font-bold text-primary">{formatPrice(product.price)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
