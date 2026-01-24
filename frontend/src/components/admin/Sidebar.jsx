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
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group border-l-4 shadow-sm ${isActive
                ? 'bg-primary/10 text-primary-dark border-primary'
                : 'text-text-muted hover:bg-gray-50 hover:text-text-main border-transparent hover:border-gray-300 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
                }`}
        >
            <Icon
                size={20}
                className={`transition-transform group-hover:scale-110 ${isActive ? '' : 'text-gray-400 group-hover:text-primary'}`}
            />
            <span>{label}</span>
            {badge && (
                <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor || 'bg-gray-100 text-text-muted dark:bg-gray-800 dark:text-gray-400'}`}>
                    {badge}
                </span>
            )}
        </Link>
    );
};

const Sidebar = () => {
    return (
        <aside className="w-72 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col h-full flex-shrink-0 z-20 transition-all duration-300 shadow-sm relative">
            <div className="h-20 flex items-center px-6 border-b border-gray-110 dark:border-gray-800">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative flex items-center justify-center size-10 rounded-lg bg-gray-800 text-white overflow-hidden transition-all duration-300 group-hover:bg-primary group-hover:text-text-main">
                        <TowerControl className="relative z-10 transition-transform duration-500 group-hover:rotate-12" size={24} />
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-text-main dark:text-white leading-none">Techno Tower</h1>
                        <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">Admin Panel</span>
                    </div>
                </div>
            </div>

            <div className="px-6 py-6 pb-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                    <div className="relative">
                        <img
                            alt="Admin User"
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                            src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff"
                        />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-text-main dark:text-white truncate">Admin User</p>
                        <p className="text-xs text-text-muted truncate">admin@technotower.com</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">Main Menu</p>
                <MenuItem to="/admin" icon={LayoutDashboard} label="Dashboard" />
                <MenuItem to="/admin/products" icon={Package} label="Products" badge="24" />
                <MenuItem to="/admin/projects" icon={FolderGit2} label="Projects" />
                <MenuItem to="/admin/tenders" icon={FileText} label="Tenders" badge=" " badgeColor="bg-red-500 w-2 h-2 p-0" />
                <MenuItem to="/admin/dealers" icon={Users} label="Dealers" />

                <p className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 mt-6">Communication</p>
                <MenuItem to="/admin/enquiries" icon={MessageSquare} label="Enquiries" badge="New" badgeColor="bg-primary/20 text-primary-dark" />
                <MenuItem to="/admin/email-marketing" icon={Mail} label="Email Marketing" />

                <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-6">Media</p>
                <MenuItem to="/admin/gallery" icon={Image} label="Gallery" />
            </div>

            <div className="p-4 border-t border-gray-100">
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 font-medium transition-all group w-full text-left">
                    <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
