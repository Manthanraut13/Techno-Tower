import { Star, MoreVertical, Mail, Trash2 } from 'lucide-react';

const EnquiryListItem = ({
    initials,
    initialsBg,
    initialsColor,
    sender,
    time,
    subject,
    preview,
    badges,
    isStarred,
    isUnread
}) => {
    return (
        <div className={`group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors p-4 cursor-pointer relative ${isUnread ? 'border-l-4 border-primary' : 'border-l-4 border-transparent opacity-90'}`}>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-3">
                    <input className="rounded border-gray-300 accent-primary" type="checkbox" />
                    <Star
                        size={20}
                        className={`cursor-pointer ${isStarred ? 'text-yellow-400 fill-current' : 'text-gray-300 hover:text-yellow-400'}`}
                    />
                </div>

                <div className={`size-10 rounded-full ${initialsBg} ${initialsColor} flex-shrink-0 flex items-center justify-center font-bold text-sm`}>
                    {initials}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-text-main dark:text-white truncate pr-2">{sender}</h4>
                        <span className="text-xs font-medium text-text-muted whitespace-nowrap">{time}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <p className="text-sm font-medium text-text-main dark:text-gray-200 truncate">{subject}</p>
                        <span className="hidden sm:inline text-gray-300">•</span>
                        <p className="text-sm text-text-muted dark:text-gray-400 truncate max-w-md">{preview}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center mt-2 sm:mt-0">
                    {badges.map((badge, index) => (
                        <span key={index} className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${badge.classes}`}>
                            {badge.label}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover Actions */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-white dark:bg-gray-950 shadow-lg rounded-lg border border-gray-100 dark:border-gray-700 p-1 items-center gap-1 z-10">
                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-500 hover:text-text-main" title="Mark as Read">
                    <Mail size={18} />
                </button>
                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-500 hover:text-red-500" title="Delete">
                    <Trash2 size={18} />
                </button>
                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-500 hover:text-primary" title="More">
                    <MoreVertical size={18} />
                </button>
            </div>
        </div>
    );
};

export default EnquiryListItem;
