
import { FolderOpen, Hourglass, Trophy, BellRing } from 'lucide-react';

const TenderStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-200/60 dark:border-gray-700 shadow-sm flex items-center justify-between">
                <div>
                    <span className="block text-text-muted dark:text-gray-400 text-xs uppercase font-semibold tracking-wider mb-1">Total Active</span>
                    <span className="text-3xl font-black text-text-main dark:text-white">12</span>
                </div>
                <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <FolderOpen size={20} />
                </div>
            </div>
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-200/60 dark:border-gray-700 shadow-sm flex items-center justify-between">
                <div>
                    <span className="block text-text-muted dark:text-gray-400 text-xs uppercase font-semibold tracking-wider mb-1">Applied</span>
                    <span className="text-3xl font-black text-text-main dark:text-white">08</span>
                </div>
                <div className="size-10 rounded-lg bg-primary/10 text-primary-dark flex items-center justify-center">
                    <Hourglass size={20} />
                </div>
            </div>
            <div className="bg-white dark:bg-[#1e1e1e] p-5 rounded-xl border border-gray-200/60 dark:border-gray-700 shadow-sm flex items-center justify-between">
                <div>
                    <span className="block text-text-muted dark:text-gray-400 text-xs uppercase font-semibold tracking-wider mb-1">Won YTD</span>
                    <span className="text-3xl font-black text-text-main dark:text-white">04</span>
                </div>
                <div className="size-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center">
                    <Trophy size={20} />
                </div>
            </div>
            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-200/60 dark:border-gray-700 shadow-sm flex items-center justify-between">
                <div>
                    <span className="block text-text-muted dark:text-gray-400 text-xs uppercase font-semibold tracking-wider mb-1">Approaching Deadline</span>
                    <span className="text-3xl font-black text-red-600 dark:text-red-400">03</span>
                </div>
                <div className="size-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center">
                    <BellRing size={20} />
                </div>
            </div>
        </div>
    );
};

export default TenderStats;
