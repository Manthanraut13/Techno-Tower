
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="flex text-sm font-medium text-[#6b5e4c] dark:text-gray-400">
                <ol className="flex items-center space-x-2">
                    <li><Link to="/" className="hover:text-[#f4a825] transition-colors">Home</Link></li>
                    <li><ChevronRight size={16} /></li>
                    <li><Link to="/products" className="hover:text-[#f4a825] transition-colors">Products</Link></li>
                    <li><ChevronRight size={16} /></li>
                    <li><Link to="/products/smart-infrastructure" className="hover:text-[#f4a825] transition-colors">Smart Infrastructure</Link></li>
                    <li><ChevronRight size={16} /></li>
                    <li aria-current="page" className="text-[#f4a825] font-semibold">Smart Pole T-100</li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
