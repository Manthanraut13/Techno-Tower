import { FolderOpen, Globe, Edit3, Hourglass, Activity } from 'lucide-react';

const ProjectStats = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-2 animate-fade-in-up">
            <div className="bg-white dark:bg-[#2d2418] p-6 rounded-2xl border border-gray-100 dark:border-[#3e3223] shadow-sm group hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest">Global Vault</span>
                    <FolderOpen className="text-primary" size={18} />
                </div>
                <div className="flex items-end justify-between">
                    <span className="text-3xl font-black text-text-main dark:text-white tracking-tighter">124</span>
                    <span className="text-[10px] font-black text-green-500">+12%</span>
                </div>
            </div>

            <div className="bg-white dark:bg-[#2d2418] p-6 rounded-2xl border border-gray-100 dark:border-[#3e3223] shadow-sm group hover:border-green-500/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest">Active Nodes</span>
                    <Globe className="text-green-500" size={18} />
                </div>
                <div className="flex items-end justify-between">
                    <span className="text-3xl font-black text-text-main dark:text-white tracking-tighter">98</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse mb-2"></div>
                </div>
            </div>

            <div className="bg-white dark:bg-[#2d2418] p-6 rounded-2xl border border-gray-100 dark:border-[#3e3223] shadow-sm group hover:border-amber-500/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest">Local Drafts</span>
                    <Edit3 className="text-amber-500" size={18} />
                </div>
                <div className="flex items-end justify-between">
                    <span className="text-3xl font-black text-text-main dark:text-white tracking-tighter">14</span>
                    <span className="text-[10px] font-black text-gray-400">OFFLINE</span>
                </div>
            </div>

            <div className="bg-white dark:bg-[#2d2418] p-6 rounded-2xl border border-gray-100 dark:border-[#3e3223] shadow-sm group hover:border-blue-500/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest">In Pipeline</span>
                    <Hourglass className="text-blue-500" size={18} />
                </div>
                <div className="flex items-end justify-between">
                    <span className="text-3xl font-black text-text-main dark:text-white tracking-tighter">12</span>
                    <Activity className="text-blue-500/30 mb-1" size={14} />
                </div>
            </div>
        </div>
    );
};

export default ProjectStats;
