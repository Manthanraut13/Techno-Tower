import { Inbox, ArrowUp, ArrowRight, HardHat, Gavel, Store, Mail } from 'lucide-react';

const StatsRow = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">

            {/* New Enquiries */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up delay-100 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Inbox size={24} />
                    </div>
                    <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        +12.5% <ArrowUp size={14} className="ml-0.5" />
                    </span>
                </div>
                <h3 className="text-2xl font-black text-text-main dark:text-white mb-1">42</h3>
                <p className="text-sm text-text-muted font-medium">New Enquiries</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
            </div>

            {/* Active Projects */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up delay-200 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 text-primary-dark rounded-lg group-hover:bg-primary group-hover:text-text-main transition-colors">
                        <HardHat size={24} />
                    </div>
                    <span className="flex items-center text-xs font-bold text-[#6b5d4d] bg-gray-50 px-2 py-1 rounded-full">
                        Stable
                    </span>
                </div>
                <h3 className="text-2xl font-black text-text-main dark:text-white mb-1">18</h3>
                <p className="text-sm text-text-muted font-medium">Active Projects</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
            </div>

            {/* Tenders Won */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up delay-300 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-green-50 text-green-700 rounded-lg group-hover:bg-green-700 group-hover:text-white transition-colors">
                        <Gavel size={24} />
                    </div>
                    <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        High Win Rate
                    </span>
                </div>
                <h3 className="text-2xl font-black text-text-main dark:text-white mb-1">8/12</h3>
                <p className="text-sm text-text-muted font-medium">Tenders Won (Q3)</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-700"></div>
            </div>

            {/* Dealer Requests */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up delay-400 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Store size={24} />
                    </div>
                    <span className="flex items-center text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">
                        5 Pending
                    </span>
                </div>
                <h3 className="text-2xl font-black text-text-main dark:text-white mb-1">15</h3>
                <p className="text-sm text-text-muted font-medium">Dealer Requests</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600"></div>
            </div>

            {/* Email Stats */}
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up delay-400 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-3">
                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Mail size={24} />
                    </div>
                </div>
                <div className="space-y-3">
                    <div>
                        <div className="flex justify-between text-xs mb-1 font-medium">
                            <span className="text-text-muted">Open Rate</span>
                            <span className="text-text-main">68%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '68%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs mb-1 font-medium">
                            <span className="text-text-muted">Click Rate</span>
                            <span className="text-text-main">24%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                            <div className="bg-gray-700 dark:bg-gray-400 h-1.5 rounded-full" style={{ width: '24%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StatsRow;
