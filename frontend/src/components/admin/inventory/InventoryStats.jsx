
import { Package, CheckCircle, AlertTriangle, Ban } from 'lucide-react';

const InventoryStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in-up delay-100">
            {/* Total Products */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                <div className="size-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Package size={24} />
                </div>
                <div>
                    <p className="text-sm text-text-muted dark:text-gray-400 font-medium">Total Products</p>
                    <h3 className="text-2xl font-bold text-text-main dark:text-white">1,248</h3>
                </div>
            </div>

            {/* Active Items */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                <div className="size-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                    <CheckCircle size={24} />
                </div>
                <div>
                    <p className="text-sm text-text-muted dark:text-gray-400 font-medium">Active Items</p>
                    <h3 className="text-2xl font-bold text-text-main dark:text-white">1,180</h3>
                </div>
            </div>

            {/* Low Stock */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                <div className="size-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                    <AlertTriangle size={24} />
                </div>
                <div>
                    <p className="text-sm text-text-muted dark:text-gray-400 font-medium">Low Stock</p>
                    <h3 className="text-2xl font-bold text-text-main dark:text-white">24</h3>
                </div>
            </div>

            {/* Discontinued */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                <div className="size-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Ban size={24} />
                </div>
                <div>
                    <p className="text-sm text-text-muted dark:text-gray-400 font-medium">Discontinued</p>
                    <h3 className="text-2xl font-bold text-text-main dark:text-white">44</h3>
                </div>
            </div>
        </div>
    );
};

export default InventoryStats;
