
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InventoryPagination = () => {
    return (
        <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-gray-950 rounded-b-xl border-x-0 border-b-0">
            {/* Note: In the design, this is inside the table card. I'll need to compose it correctly in the page or table component. Design shows it inside the card footer. */}
            <span className="text-sm text-text-muted dark:text-gray-400">
                Showing <span className="font-bold text-text-main dark:text-white">1-5</span> of <span className="font-bold text-text-main dark:text-white">128</span> products
            </span>
            <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 disabled:opacity-50">
                    <ChevronLeft size={18} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-text-main font-bold text-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">3</button>
                <span className="text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">12</button>
                <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500">
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default InventoryPagination;
