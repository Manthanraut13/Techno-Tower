import { Search, Bell, Settings } from 'lucide-react';

const Topbar = () => {
    return (
        <header className="h-20 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8 sticky top-0 z-10">
            <div>
                <h2 className="text-xl font-bold text-text-main dark:text-white">Dashboard Overview</h2>
                <p className="text-sm text-text-muted dark:text-gray-400">Welcome back to Techno Tower Admin</p>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary text-sm w-64 outline-none text-text-main dark:text-white placeholder-gray-400"
                        placeholder="Search..."
                        type="text"
                    />
                </div>

                <button className="relative w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-text-muted hover:text-primary transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <button className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-text-muted hover:text-primary transition-colors">
                    <Settings size={20} />
                </button>
            </div>
        </header>
    );
};

export default Topbar;
