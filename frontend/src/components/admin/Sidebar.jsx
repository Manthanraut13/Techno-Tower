import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Package,
    FolderGit2,
    FileText,
    Users,
    MessageSquare,
    Mail,
    Image,
    LogOut,
    TowerControl
} from 'lucide-react';

const MenuItem = ({ to, icon: Icon, label, badge, badgeColor }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all group border-l-[3px] shadow-sm ${isActive
                ? 'bg-primary/10 text-primary-dark border-primary'
                : 'text-text-muted hover:bg-gray-100/80 hover:text-text-main border-transparent dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white'
                }`}
        >
            <Icon
                size={20}
                className={`transition-transform group-hover:scale-110 ${isActive ? 'text-primary' : 'text-gray-400 dark:text-gray-500 group-hover:text-primary'}`}
            />
            <span>{label}</span>
            {badge && (
                <span className={`ml-auto text-[10px] font-black px-2 py-0.5 rounded-full ${badgeColor || 'bg-gray-100 text-text-muted dark:bg-[#3e3223] dark:text-gray-400'}`}>
                    {badge}
                </span>
            )}
        </Link>
    );
};

const Sidebar = () => {
    return (
        <aside className="fixed left-0 top-0 h-screen w-72 bg-white dark:bg-[#1c160d] border-r border-gray-200 dark:border-[#3e3223] flex flex-col z-30 transition-all duration-300 shadow-sm">
            {/* Logo Section */}
            <div className="h-20 flex items-center px-6 border-b border-gray-100 dark:border-[#3e3223]">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative flex items-center justify-center size-10 rounded-lg bg-gray-800 text-primary overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(244,168,37,0.4)]">
                        <TowerControl className="relative z-10 transition-transform duration-500 group-hover:rotate-12" size={24} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-text-main dark:text-white leading-none">Techno Tower</h1>
                        <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">Admin Panel</span>
                    </div>
                </div>
            </div>

            {/* Profile Section */}
            <div className="px-6 py-6 pb-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-[#2d2418] border border-gray-100 dark:border-[#3e3223]">
                    <div className="relative">
                        <img
                            alt="Admin User"
                            className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-[#3e3223] shadow-sm"
                            src="https://ui-avatars.com/api/?name=Admin+User&background=f4a825&color=2D3436"
                        />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-[#2d2418] rounded-full"></span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-text-main dark:text-white truncate">Admin User</p>
                        <p className="text-[10px] text-text-muted truncate">admin@technotower.com</p>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 custom-scrollbar">
                <p className="px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 mt-2">Main Menu</p>
                <MenuItem to="/admin" icon={LayoutDashboard} label="Dashboard" />
                <MenuItem to="/admin/products" icon={Package} label="Products" badge="24" />
                <MenuItem to="/admin/projects" icon={FolderGit2} label="Projects" />
                <MenuItem to="/admin/tenders" icon={FileText} label="Tenders" badge=" " badgeColor="bg-red-500 w-2 h-2 p-0" />
                <MenuItem to="/admin/dealers" icon={Users} label="Dealers" />

                <p className="px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 mt-6">Communication</p>
                <MenuItem to="/admin/enquiries" icon={MessageSquare} label="Enquiries" badge="New" badgeColor="bg-primary/20 text-primary-dark" />
                <MenuItem to="/admin/campaigns" icon={Mail} label="Campaigns" />

                <p className="px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 mt-6">Media</p>
                <MenuItem to="/admin/gallery" icon={Image} label="Gallery" />
            </div>

            {/* Logout Section */}
            <div className="p-4 border-t border-gray-100 dark:border-[#3e3223]">
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 font-bold text-sm transition-all group w-full text-left">
                    <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Logout System</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
