
import { Download, Plus, TowerControl } from 'lucide-react';
import InventoryStats from '../../components/admin/inventory/InventoryStats';
import InventoryFilters from '../../components/admin/inventory/InventoryFilters';
import InventoryTable from '../../components/admin/inventory/InventoryTable';
import InventoryPagination from '../../components/admin/inventory/InventoryPagination';

const ProductInventory = () => {
    return (
        <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 animate-fade-in-up">
                <div>
                    <h2 className="text-3xl font-bold text-text-main dark:text-white mb-1">Product Inventory</h2>
                    <p className="text-text-muted dark:text-gray-400 text-sm">Manage your infrastructure product catalog, specifications, and stock status.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-white border border-gray-200 text-text-main hover:bg-gray-50 transition-colors shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white">
                        <Download size={20} />
                        Export
                    </button>
                    <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary hover:bg-primary-dark text-text-main font-bold transition-all shadow-md hover:shadow-lg">
                        <Plus size={20} />
                        Add Product
                    </button>
                </div>
            </div>

            {/* Stats */}
            <InventoryStats />

            {/* Table Section */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in-up delay-[150ms]">
                <InventoryFilters />

                {/* We render the table contents here. The Grid/Card wrapper is handled here to contain filters + table + pagination together */}
                <InventoryTable />

                <InventoryPagination />
            </div>
        </div>
    );
};

export default ProductInventory;
