import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const InventoryFilters = () => {
    return (
        <div className="p-6 border-b border-gray-50 dark:border-[#3e3223] flex flex-col md:flex-row gap-6 justify-between items-center bg-gray-50/30 dark:bg-white/5">
            {/* Search Bar */}
            <div className="relative w-full md:w-[450px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                <input
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] rounded-xl text-xs font-bold text-text-main dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    placeholder="SCAN NETWORK FOR ASSETS (NAME, SKU, SECTOR)..."
                    type="text"
                />
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:flex-none">
                    <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <select className="w-full md:w-44 pl-9 pr-4 py-3 bg-white dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] rounded-xl text-[10px] font-black uppercase tracking-widest text-text-main dark:text-gray-400 focus:border-primary transition-all outline-none appearance-none cursor-pointer">
                        <option>Current Sector: All</option>
                        <option>High Mast Poles</option>
                        <option>Smart Poles</option>
                        <option>Urban Lighting</option>
                        <option>Hardware Components</option>
                    </select>
                </div>

                <div className="relative flex-1 md:flex-none">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <select className="w-full md:w-40 pl-9 pr-4 py-3 bg-white dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] rounded-xl text-[10px] font-black uppercase tracking-widest text-text-main dark:text-gray-400 focus:border-primary transition-all outline-none appearance-none cursor-pointer">
                        <option>Status: All</option>
                        <option>Operational</option>
                        <option>In Maintenance</option>
                        <option>Decommissioned</option>
                    </select>
                </div>

                <button className="h-[46px] w-[46px] flex items-center justify-center bg-gray-100 dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] rounded-xl text-gray-500 hover:text-primary transition-all">
                    <Search size={18} />
                </button>
            </div>
        </div>
    );
};

export default InventoryFilters;
