import { Inbox, Star, Send, Trash2 } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, count, active }) => (
    <button className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center justify-between mb-2 transition-colors ${active ? 'bg-primary/10 text-primary font-bold' : 'text-text-muted hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
        <div className="flex items-center gap-3">
            <Icon size={18} />
            <span>{label}</span>
        </div>
        {count && <span className={`text-xs px-2 py-0.5 rounded-full ${active ? 'bg-primary text-text-main' : ''}`}>{count}</span>}
    </button>
);

const FilterCheckbox = ({ colorClass, label, count, defaultChecked, type = 'status' }) => (
    <label className="flex items-center gap-3 text-sm cursor-pointer group">
        <input defaultChecked={defaultChecked} className="rounded border-gray-300 text-primary focus:ring-primary accent-primary" type="checkbox" />
        {type === 'status' ? (
            <span className={`w-2 h-2 rounded-full ${colorClass}`}></span>
        ) : (
            <span className={`material-symbols-outlined text-[18px] ${colorClass}`}>label</span>
        )}
        <span className="text-text-main dark:text-gray-200 group-hover:text-primary transition-colors">{label}</span>
        {count && <span className="ml-auto text-xs text-gray-400">{count}</span>}
    </label>
);

const EnquirySidebar = () => {
    return (
        <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-4">
                <SidebarItem icon={Inbox} label="All Enquiries" count="12" active />
                <SidebarItem icon={Star} label="Starred" />
                <SidebarItem icon={Send} label="Sent" />
                <SidebarItem icon={Trash2} label="Trash" />
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">Status</h3>
                <div className="space-y-3">
                    <FilterCheckbox label="New" count="12" colorClass="bg-primary" defaultChecked type="status" />
                    <FilterCheckbox label="Contacted" count="8" colorClass="bg-blue-500" type="status" />
                    <FilterCheckbox label="Closed" count="24" colorClass="bg-gray-800" type="status" />
                </div>
                <div className="h-px bg-gray-100 dark:bg-gray-700 my-6"></div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">Labels</h3>
                <div className="space-y-3">
                    <FilterCheckbox label="Government" colorClass="text-purple-500" type="label" />
                    <FilterCheckbox label="Tender" colorClass="text-green-500" type="label" />
                    <FilterCheckbox label="Installation" colorClass="text-orange-500" type="label" />
                </div>
            </div>
        </aside>
    );
};

export default EnquirySidebar;
