import { ChevronLeft, ChevronRight, Hash } from 'lucide-react';

const InventoryPagination = () => {
    return (
        <div className="p-6 border-t border-gray-50 dark:border-[#3e3223] flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50/20 dark:bg-white/5 rounded-b-2xl">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted dark:text-gray-500">
                <Hash size={14} className="text-primary" />
                <span>Showing <span className="text-text-main dark:text-white">1 - 05</span> OF <span className="text-text-main dark:text-white">128</span> Total Assets</span>
            </div>

            <div className="flex items-center gap-3">
                <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-[#3e3223] bg-white dark:bg-[#1c160d] text-gray-400 hover:text-primary hover:border-primary/50 transition-all disabled:opacity-30">
                    <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-[#1c160d] rounded-xl border border-gray-200 dark:border-[#3e3223]">
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-text-main font-black text-xs shadow-lg shadow-primary/20">1</button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-text-muted dark:text-gray-500 hover:text-primary transition-colors font-black text-xs">2</button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-text-muted dark:text-gray-500 hover:text-primary transition-colors font-black text-xs">3</button>
                    <span className="px-1 text-gray-400 font-black">...</span>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-text-muted dark:text-gray-500 hover:text-primary transition-colors font-black text-xs">12</button>
                </div>

                <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-[#3e3223] bg-white dark:bg-[#1c160d] text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default InventoryPagination;
