
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-black/20">
                {product.badge && (
                    <div className={`absolute top-3 right-3 z-10 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide shadow-sm ${product.badge === 'New'
                        ? 'bg-primary/90 text-text-main backdrop-blur'
                        : 'bg-white/90 dark:bg-black/60 text-gray-800 dark:text-white backdrop-blur border border-gray-100 dark:border-white/10'
                        }`}>
                        {product.badge}
                    </div>
                )}
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product.image}
                    alt={product.title}
                />
            </div>
            <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 group-hover:text-primary transition-colors">{product.title}</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase">{product.specLabel}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.specValue}</span>
                    </div>
                    <Link to={product.link} className="text-primary hover:text-primary-dark font-semibold text-sm flex items-center gap-1 group/btn">
                        Details
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
