import { Users, FileClock, Globe, TrendingUp } from 'lucide-react';

const DealerStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up delay-100">
            {/* Total Dealers */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-text-muted dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Total Dealers</p>
                    <h3 className="text-2xl font-black text-text-main dark:text-white">124</h3>
                </div>
                <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                    <Users size={24} />
                </div>
            </div>

            {/* Pending Approval */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-text-muted dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Pending Approval</p>
                    <h3 className="text-2xl font-black text-primary">12</h3>
                </div>
                <div className="size-10 rounded-full bg-primary/10 text-primary-dark flex items-center justify-center">
                    <FileClock size={24} />
                </div>
            </div>

            {/* Active Regions */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-text-muted dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Active Regions</p>
                    <h3 className="text-2xl font-black text-text-main dark:text-white">8</h3>
                </div>
                <div className="size-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                    <Globe size={24} />
                </div>
            </div>

            {/* New this Month */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-text-muted dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">New this Month</p>
                    <h3 className="text-2xl font-black text-text-main dark:text-white">5</h3>
                </div>
                <div className="size-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
                    <TrendingUp size={24} />
                </div>
            </div>
        </div>
    );
};

export default DealerStats;
