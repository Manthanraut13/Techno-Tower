
import { Search, ChevronRight } from 'lucide-react';
import ProductsHero from '../../components/public/products/ProductsHero';
import ProductSidebar from '../../components/public/products/ProductSidebar';
import ProductGrid from '../../components/public/products/ProductGrid';
import CustomSolutionCTA from '../../components/public/products/CustomSolutionCTA';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            <ProductsHero />

            {/* Breadcrumbs & Search Area */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-[#f4a825] transition-colors">Home</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-[#f4a825] font-medium">Products</span>
                    </div>
                    <div className="w-full md:w-auto min-w-[300px]">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="text-gray-400 group-focus-within:text-[#f4a825]" size={20} />
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-2.5 border-none bg-background-surface dark:bg-white/5 rounded-lg leading-5 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f4a825]/50 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200 sm:text-sm"
                                placeholder="Search by product name, ID, or spec..."
                                type="text"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Layout Grid: Sidebar + Product Grid */}
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    <ProductSidebar />
                    <ProductGrid />
                </div>
            </div>

            <CustomSolutionCTA />
        </div>
    );
};

export default Products;
