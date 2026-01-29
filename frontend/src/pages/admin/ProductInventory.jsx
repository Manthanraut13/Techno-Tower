import React, { useState } from 'react';
import { Download, Plus, Layers, Filter, Search } from 'lucide-react';
import InventoryStats from '../../components/admin/inventory/InventoryStats';
import InventoryFilters from '../../components/admin/inventory/InventoryFilters';
import InventoryTable from '../../components/admin/inventory/InventoryTable';
import InventoryPagination from '../../components/admin/inventory/InventoryPagination';
import ProductForm from '../../components/admin/inventory/ProductForm';

const ProductInventory = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleAddProduct = () => {
        setEditingProduct(null);
        setIsFormOpen(true);
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setIsFormOpen(true);
    };

    const handleSaveProduct = (productData) => {
        console.log('Saving product:', productData);
        // Implement actual save logic later (e.g., API call or state update)
    };

    return (
        <div className="animate-fade-in-up">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                            <Layers size={18} />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Logistics & Asset Management</span>
                    </div>
                    <h2 className="text-3xl font-black text-text-main dark:text-white uppercase tracking-tight">Product Inventory</h2>
                    <p className="text-xs text-text-muted dark:text-gray-500 font-bold mt-1 uppercase tracking-widest">
                        Network Capacity: <span className="text-green-500">Optimal (94%)</span> | 1,240 Total Units
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white dark:bg-[#2d2418] border border-gray-200 dark:border-[#3e3223] text-sm font-black text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm uppercase tracking-widest">
                        <Download size={18} />
                        Export Data
                    </button>
                    <button
                        onClick={handleAddProduct}
                        className="flex-1 lg:flex-none flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-primary text-text-main text-sm font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(244,168,37,0.2)] hover:shadow-[0_0_30px_rgba(244,168,37,0.4)] hover:-translate-y-0.5"
                    >
                        <Plus size={18} />
                        Deploy Asset
                    </button>
                </div>
            </div>

            {/* Inventory Overview - Mini Stats */}
            <InventoryStats />

            {/* Main Content Area */}
            <div className="bg-white dark:bg-[#2d2418] rounded-2xl shadow-sm border border-gray-100 dark:border-[#3e3223] overflow-hidden">
                <InventoryFilters />
                <InventoryTable onEdit={handleEditProduct} />
                <InventoryPagination />
            </div>

            {/* Slide-over Form */}
            <ProductForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                product={editingProduct}
                onSave={handleSaveProduct}
            />
        </div>
    );
};

export default ProductInventory;
