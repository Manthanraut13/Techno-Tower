
import { FolderOpen, Globe, Edit3, Hourglass } from 'lucide-react';

const ProjectStats = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2 animate-fade-in-up delay-200">
            <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="text-xs font-bold text-text-muted dark:text-gray-500 uppercase tracking-wider block mb-1">Total</span>
                <div className="flex items-end justify-between">
                    <span className="text-2xl font-black text-text-main dark:text-white">124</span>
                    <FolderOpen className="text-primary" size={24} />
                </div>
            </div>
            <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="text-xs font-bold text-text-muted dark:text-gray-500 uppercase tracking-wider block mb-1">Published</span>
                <div className="flex items-end justify-between">
                    <span className="text-2xl font-black text-green-600 dark:text-green-400">98</span>
                    <Globe className="text-green-600" size={24} />
                </div>
            </div>
            <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="text-xs font-bold text-text-muted dark:text-gray-500 uppercase tracking-wider block mb-1">Drafts</span>
                <div className="flex items-end justify-between">
                    <span className="text-2xl font-black text-amber-600 dark:text-amber-500">14</span>
                    <Edit3 className="text-amber-600" size={24} />
                </div>
            </div>
            <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="text-xs font-bold text-text-muted dark:text-gray-500 uppercase tracking-wider block mb-1">Pending</span>
                <div className="flex items-end justify-between">
                    <span className="text-2xl font-black text-blue-600 dark:text-blue-400">12</span>
                    <Hourglass className="text-blue-600" size={24} />
                </div>
            </div>
        </div>
    );
};

export default ProjectStats;
