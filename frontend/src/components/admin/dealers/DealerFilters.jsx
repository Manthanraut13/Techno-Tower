import { Search, ChevronDown, LayoutGrid, List } from 'lucide-react';

const DealerFilters = () => {
    return (
        <div className="bg-white dark:bg-gray-950 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center animate-fade-in-up delay-200">
            {/* Search */}
            <div className="relative w-full md:w-96">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={20} />
                </span>
                <input
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-text-main dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-400 text-sm"
                    placeholder="Search by name, ID or email..."
                    type="text"
                />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <div className="relative group">
                    <select className="appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white py-2.5 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer min-w-[140px]">
                        <option value="">All Regions</option>
                        <option value="north">North Region</option>
                        <option value="south">South Region</option>
                        <option value="east">East Region</option>
                        <option value="west">West Region</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                        <ChevronDown size={18} />
                    </span>
                </div>

                <div className="relative group">
                    <select className="appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white py-2.5 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer min-w-[140px]">
                        <option value="">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                        <ChevronDown size={18} />
                    </span>
                </div>

                <button className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-text-muted transition-colors" title="Grid View">
                    <LayoutGrid size={20} />
                </button>
                <button className="p-2.5 rounded-lg border border-transparent hover:bg-gray-50 dark:hover:bg-gray-700 text-text-muted transition-colors" title="List View">
                    <List size={20} />
                </button>
            </div>
        </div>
    );
};

export default DealerFilters;
