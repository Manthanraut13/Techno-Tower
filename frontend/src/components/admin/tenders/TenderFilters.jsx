
import { Search, Filter } from 'lucide-react';

const TenderFilters = () => {
    return (
        <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-200/60 dark:border-gray-700 shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center animate-fade-in-up delay-100">
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary transition-all"
                    placeholder="Search by tender name, authority, or ID..."
                    type="text"
                />
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <select className="px-3 py-2 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary cursor-pointer min-w-[140px]">
                    <option value="all">All Statuses</option>
                    <option value="applied">Applied</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                </select>
                <select className="px-3 py-2 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-primary focus:border-primary cursor-pointer min-w-[140px]">
                    <option value="newest">Sort: Newest</option>
                    <option value="deadline">Sort: Deadline</option>
                    <option value="value">Sort: Value</option>
                </select>
                <button className="p-2 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500">
                    <Filter size={20} />
                </button>
            </div>
        </div>
    );
};

export default TenderFilters;
