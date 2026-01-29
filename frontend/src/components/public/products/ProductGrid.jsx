
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

import { products } from '../../../data/productsData';

const ProductGrid = () => {
    // Derived data for display
    const displayProducts = products.map(p => ({
        ...p,
        image: p.images[0].full,
        specLabel: p.specs.height ? 'Height' : (p.specs.battery ? 'Battery' : 'Power'),
        specValue: p.specs.height || p.specs.battery || p.specs.power,
        link: `/product/${p.slug}`
    }));

    return (
        <div className="flex-1">
            {/* Active Filters & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Active Filters:</span>
                    <div className="flex items-center gap-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                        All Products <button className="hover:text-red-500 ml-1"><X size={14} /></button>
                    </div>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <label className="text-sm text-gray-500 dark:text-gray-400">Sort by:</label>
                    <select className="form-select border-none bg-transparent text-sm font-medium text-gray-900 dark:text-white focus:ring-0 cursor-pointer pr-8">
                        <option>Most Popular</option>
                        <option>Newest Arrivals</option>
                        <option>Height: Low to High</option>
                        <option>Height: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors disabled:opacity-50">
                    <ChevronLeft size={16} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-text-main font-bold shadow-sm">
                    1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors">
                    2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors">
                    3
                </button>
                <span className="text-gray-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#f4a825] transition-colors">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default ProductGrid;
