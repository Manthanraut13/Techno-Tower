import { Search, Bell, TowerControl } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="px-4 md:px-8 py-3 flex items-center justify-between max-w-[1600px] mx-auto">
                <div className="flex items-center gap-10">
                    <Link to="/admin" className="flex items-center gap-3 group cursor-pointer">
                        <div className="flex items-center justify-center size-9 rounded-lg bg-gray-800 text-primary transition-transform duration-500 group-hover:rotate-180">
                            <TowerControl size={24} />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold tracking-tight text-text-main dark:text-white leading-none">Techno Tower</h1>
                            <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Admin Portal</span>
                        </div>
                    </Link>
                    <nav className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-lg">
                        <Link to="/admin" className="px-4 py-1.5 rounded-md bg-white dark:bg-gray-700 shadow-sm text-sm font-semibold text-text-main dark:text-white transition-all">
                            Overview
                        </Link>
                        <Link to="/admin/dealers" className="px-4 py-1.5 rounded-md hover:bg-gray-200/50 dark:hover:bg-gray-700/50 text-sm font-medium text-text-muted hover:text-text-main dark:text-gray-300 transition-all">
                            Dealers
                        </Link>
                        <Link to="#" className="px-4 py-1.5 rounded-md hover:bg-gray-200/50 dark:hover:bg-gray-700/50 text-sm font-medium text-text-muted hover:text-text-main dark:text-gray-300 transition-all">
                            Enquiries
                        </Link>
                        <Link to="#" className="px-4 py-1.5 rounded-md hover:bg-gray-200/50 dark:hover:bg-gray-700/50 text-sm font-medium text-text-muted hover:text-text-main dark:text-gray-300 transition-all">
                            Projects
                        </Link>
                        <Link to="#" className="px-4 py-1.5 rounded-md hover:bg-gray-200/50 dark:hover:bg-gray-700/50 text-sm font-medium text-text-muted hover:text-text-main dark:text-gray-300 transition-all">
                            Tenders
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={18} />
                        </span>
                        <input
                            className="pl-9 pr-4 py-1.5 text-sm bg-gray-50 border-gray-200 rounded-md focus:border-primary focus:ring-primary/20 w-64 transition-all outline-none"
                            placeholder="Search projects, IDs..."
                            type="text"
                        />
                    </div>
                    <button className="relative p-2 text-text-muted hover:text-text-main transition-colors rounded-full hover:bg-gray-100">
                        <Bell size={22} />
                        <span className="absolute top-1.5 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700 mx-1"></div>
                    <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                        <div className="text-right hidden md:block">
                            <p className="text-xs font-bold text-text-main">Admin User</p>
                            <p className="text-[10px] text-text-muted">Super Admin</p>
                        </div>
                        <div className="size-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold border-2 border-primary">
                            AU
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
