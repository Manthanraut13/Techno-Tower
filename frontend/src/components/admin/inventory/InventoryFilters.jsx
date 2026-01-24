
import { Search } from 'lucide-react';

const InventoryFilters = () => {
    return (
        <div className="p-5 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50 dark:bg-transparent">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-text-main dark:text-white focus:ring-primary focus:border-primary transition-shadow placeholder-gray-400"
                    placeholder="Search by name, SKU or category..."
                    type="text"
                />
            </div>

            {/* Dropdowns */}
            <div className="flex gap-3 w-full sm:w-auto">
                <select className="form-select rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-text-main dark:text-white py-2 px-3 focus:ring-primary focus:border-primary">
                    <option>All Categories</option>
                    <option>High Mast Poles</option>
                    <option>Smart Poles</option>
                    <option>Street Lighting</option>
                    <option>Hardware & Mounts</option>
                </select>
                <select className="form-select rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-text-main dark:text-white py-2 px-3 focus:ring-primary focus:border-primary">
                    <option>Status: All</option>
                    <option>Active</option>
                    <option>Draft</option>
                    <option>Out of Stock</option>
                </select>
            </div>
        </div>
    );
};

export default InventoryFilters;
