import React, { useState, useEffect } from 'react';
import { X, Upload, Save, AlertCircle, HardHat, DollarSign, Package, Tag, Layers } from 'lucide-react';

const ProductForm = ({ isOpen, onClose, product, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        sku: '',
        category: '',
        price: '',
        stockCount: '',
        status: 'Active',
        description: '',
        image: null
    });

    useEffect(() => {
        if (product) {
            setFormData({
                ...product,
                price: product.price?.replace(/[^0-9.]/g, '') || '',
            });
        } else {
            setFormData({
                name: '',
                sku: '',
                category: '',
                price: '',
                stockCount: '',
                status: 'Active',
                description: '',
                image: null
            });
        }
    }, [product]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm transition-all duration-300">
            <div className="h-full w-full max-w-xl bg-white dark:bg-[#1c160d] shadow-2xl animate-fade-in-right overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 z-10 p-6 bg-white/80 dark:bg-[#1c160d]/80 backdrop-blur-md border-b border-gray-100 dark:border-[#3e3223] flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-black text-text-main dark:text-white uppercase tracking-tight">
                            {product ? 'Modify Component' : 'Deploy New Asset'}
                        </h3>
                        <p className="text-[10px] text-text-muted dark:text-gray-500 font-bold uppercase tracking-widest mt-1">
                            Infrastructure Inventory System v2.1
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    {/* Primary Info */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Asset Name</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <HardHat size={18} />
                                </span>
                                <input
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#2d2418] border border-gray-200 dark:border-[#3e3223] rounded-xl text-sm font-bold text-text-main dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                    placeholder="e.g. 30m High Mast System"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Identifier (SKU)</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Tag size={18} />
                                    </span>
                                    <input
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#2d2418] border border-gray-200 dark:border-[#3e3223] rounded-xl text-sm font-bold text-text-main dark:text-white focus:border-primary transition-all outline-none font-mono"
                                        placeholder="HM-30-STD"
                                        type="text"
                                        value={formData.sku}
                                        onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Sector (Category)</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Layers size={18} />
                                    </span>
                                    <select
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#2d2418] border border-gray-200 dark:border-[#3e3223] rounded-xl text-sm font-bold text-text-main dark:text-white focus:border-primary transition-all outline-none appearance-none"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option value="">Select Sector</option>
                                        <option value="High Mast">High Mast</option>
                                        <option value="Smart Poles">Smart Poles</option>
                                        <option value="Urban Light">Urban Light</option>
                                        <option value="Traffic">Traffic</option>
                                        <option value="Lighting">Lighting</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Base Cost ($)</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <DollarSign size={18} />
                                    </span>
                                    <input
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#2d2418] border border-gray-200 dark:border-[#3e3223] rounded-xl text-sm font-bold text-text-main dark:text-white focus:border-primary transition-all outline-none"
                                        placeholder="12,450.00"
                                        type="number"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Network Stock</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Package size={18} />
                                    </span>
                                    <input
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#2d2418] border border-gray-200 dark:border-[#3e3223] rounded-xl text-sm font-bold text-text-main dark:text-white focus:border-primary transition-all outline-none"
                                        placeholder="42"
                                        type="number"
                                        value={formData.stockCount}
                                        onChange={(e) => setFormData({ ...formData, stockCount: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Upload Area */}
                    <div>
                        <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-3">Schematic Reference (Image)</label>
                        <div className="relative group border-2 border-dashed border-gray-200 dark:border-[#3e3223] rounded-2xl p-8 transition-all hover:border-primary/50 hover:bg-primary/5 cursor-pointer">
                            <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                            <div className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 rounded-xl bg-gray-100 dark:bg-[#2d2418] text-gray-400 group-hover:text-primary transition-colors">
                                        <Upload size={32} />
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-text-main dark:text-white">Upload Asset Image</p>
                                <p className="text-[10px] text-text-muted mt-1 uppercase tracking-tighter">SVG, PNG, JPG (MAX. 800x400px)</p>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Specs */}
                    <div>
                        <label className="block text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest mb-2">Technical Description</label>
                        <textarea
                            className="w-full p-4 bg-gray-50 dark:bg-[#2d2418] border border-gray-200 dark:border-[#3e3223] rounded-2xl text-sm font-medium text-text-main dark:text-white focus:border-primary transition-all outline-none resize-none"
                            placeholder="Detailed technical overview and component list..."
                            rows="4"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        ></textarea>
                    </div>

                    {/* Submit Area */}
                    <div className="pt-6 border-t border-gray-100 dark:border-[#3e3223] flex gap-4">
                        <button
                            type="submit"
                            className="flex-1 py-4 bg-primary text-text-main font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_20px_rgba(244,168,37,0.2)] hover:shadow-[0_0_30px_rgba(244,168,37,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                        >
                            <Save size={18} />
                            {product ? 'Synchronize Updates' : 'Confirm Deployment'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-4 bg-white dark:bg-transparent border border-gray-200 dark:border-[#3e3223] text-text-muted font-black uppercase tracking-widest text-xs rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                        >
                            Abort
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
