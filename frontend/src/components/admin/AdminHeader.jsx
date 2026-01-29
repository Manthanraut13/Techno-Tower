import { Search, Bell, Menu, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <header className="sticky top-0 z-20 w-full bg-white/80 dark:bg-[#1c160d]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#3e3223]">
            <div className="px-6 md:px-10 py-4 flex items-center justify-between">
                {/* Left Side: Page Context (Optional/Responsive Menu) */}
                <div className="flex items-center gap-4">
                    <button className="lg:hidden p-2 text-text-muted hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                        <Menu size={20} />
                    </button>
                    <div className="hidden sm:block">
                        <h2 className="text-sm font-bold text-text-main dark:text-gray-200">System Control</h2>
                        <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">Real-time Infrastructure Monitoring</p>
                    </div>
                </div>

                {/* Right Side: Tools & Profile */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Search Bar */}
                    <div className="relative hidden md:block group">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                            <Search size={16} />
                        </span>
                        <input
                            className="pl-9 pr-4 py-2 text-xs bg-gray-50 dark:bg-[#2d2418] border border-gray-200 dark:border-[#3e3223] rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 w-64 lg:w-80 transition-all outline-none text-text-main dark:text-white"
                            placeholder="Command search (Ctrl + K)..."
                            type="text"
                        />
                    </div>

                    <div className="flex items-center gap-1">
                        <button className="p-2.5 text-text-muted hover:text-primary transition-all rounded-xl hover:bg-primary/5 relative">
                            <Bell size={18} />
                            <span className="absolute top-2.5 right-2.5 size-1.5 bg-primary rounded-full ring-2 ring-white dark:ring-[#1c160d]"></span>
                        </button>
                        <button className="p-2.5 text-text-muted hover:text-text-main dark:hover:text-white transition-all rounded-xl hover:bg-gray-100 dark:hover:bg-white/5">
                            <Settings size={18} />
                        </button>
                    </div>

                    <div className="h-6 w-[1px] bg-gray-200 dark:bg-[#3e3223] mx-1"></div>

                    {/* Quick Profile Mini */}
                    <button className="flex items-center gap-3 p-1 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all border border-transparent hover:border-gray-200 dark:hover:border-[#3e3223]">
                        <div className="text-right hidden sm:block">
                            <p className="text-[11px] font-black text-text-main dark:text-white leading-none">Super Admin</p>
                            <p className="text-[9px] text-green-500 font-bold uppercase tracking-tighter mt-1">Network Online</p>
                        </div>
                        <div className="size-8 rounded-lg bg-gray-800 text-primary flex items-center justify-center text-[10px] font-black border border-primary/30 shadow-[0_0_10px_rgba(244,168,37,0.1)]">
                            AU
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
