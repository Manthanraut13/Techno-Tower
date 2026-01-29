import { Package, CheckCircle, AlertTriangle, Ban, Layers } from 'lucide-react';

const StatItem = ({ label, value, icon: Icon, color, bgColor, borderColor }) => (
    <div className={`bg-white dark:bg-[#2d2418] p-6 rounded-2xl border border-gray-100 dark:border-[#3e3223] transition-all hover:shadow-[0_0_15px_rgba(244,168,37,0.05)] flex items-center justify-between group`}>
        <div className="flex items-center gap-4">
            <div className={`size-12 rounded-xl ${bgColor} ${color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-[10px] text-text-muted dark:text-gray-500 font-black uppercase tracking-widest">{label}</p>
                <h3 className="text-2xl font-black text-text-main dark:text-white uppercase tracking-tight">{value}</h3>
            </div>
        </div>
        <div className="h-8 w-[1px] bg-gray-100 dark:bg-[#3e3223]"></div>
    </div>
);

const InventoryStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-fade-in-up">
            <StatItem
                label="Total Inventory"
                value="1,248"
                icon={Package}
                bgColor="bg-gray-100 dark:bg-[#1c160d]"
                color="text-text-main dark:text-primary"
            />
            <StatItem
                label="Operational Level"
                value="1,180"
                icon={CheckCircle}
                bgColor="bg-green-500/10"
                color="text-green-500"
            />
            <StatItem
                label="Maintenance Alert"
                value="24"
                icon={AlertTriangle}
                bgColor="bg-amber-500/10"
                color="text-amber-500"
            />
            <StatItem
                label="Defective / Offline"
                value="44"
                icon={Ban}
                bgColor="bg-red-500/10"
                color="text-red-500"
            />
        </div>
    );
};

export default InventoryStats;
