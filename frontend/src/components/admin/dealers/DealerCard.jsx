import { MapPin, User, Calendar, Check, X, ShieldBan } from 'lucide-react';

const DealerCard = ({ dealer, delay }) => {
    const statusColors = {
        Pending: 'bg-primary/10 text-primary-dark dark:text-primary border-primary/20',
        Approved: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
        Rejected: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
    };

    const statusDot = {
        Pending: 'bg-primary',
        Approved: 'hidden',
        Rejected: 'hidden',
    };

    const sideColor = {
        Pending: 'bg-primary',
        Approved: 'bg-green-500',
        Rejected: 'bg-red-500',
    };

    return (
        <div className={`group bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-fade-in-up ${delay} flex flex-col h-full relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-1 h-full ${sideColor[dealer.status]}`}></div>
            <div className={`p-6 flex-grow ${dealer.status === 'Rejected' ? 'opacity-80 group-hover:opacity-100 transition-opacity' : ''}`}>

                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`size-12 rounded-full ${dealer.initialsBg || 'bg-gray-100 dark:bg-gray-700'} flex items-center justify-center text-lg font-bold ${dealer.initialsColor || 'text-gray-500'}`}>
                            {dealer.initials}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-text-main dark:text-white leading-tight">{dealer.name}</h3>
                            <p className="text-xs text-text-muted dark:text-gray-400 mt-0.5">ID: {dealer.id}</p>
                        </div>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${statusColors[dealer.status]}`}>
                        {dealer.status === 'Pending' && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>}
                        {dealer.status}
                    </span>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-text-muted dark:text-gray-400">
                        <MapPin className="text-gray-400" size={18} />
                        <span>{dealer.location}</span>
                        <span className="ml-auto px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">{dealer.region}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-muted dark:text-gray-400">
                        <User className="text-gray-400" size={18} />
                        <span>{dealer.contact}</span>
                    </div>

                    {dealer.status === 'Rejected' ? (
                        <div className="flex items-center gap-3 text-sm text-text-muted dark:text-gray-400">
                            <ShieldBan className="text-gray-400" size={18} />
                            <span>{dealer.reason}</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 text-sm text-[#6b5d4d] dark:text-gray-400">
                            {dealer.status === 'Approved' ? <span className="material-symbols-outlined text-gray-400 text-[18px]">verified</span> : <Calendar className="text-gray-400" size={18} />}
                            <span>{dealer.status === 'Approved' ? `Active since ${dealer.activeSince}` : `Applied: ${dealer.appliedDate}`}</span>
                        </div>
                    )}

                </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 flex gap-2">
                {dealer.status === 'Rejected' ? (
                    <button className="w-full py-2 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 text-text-muted dark:text-gray-400 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-[#333] transition-colors shadow-sm">
                        Review Application
                    </button>
                ) : (
                    <>
                        <button className="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-[#333] transition-colors shadow-sm">
                            {dealer.status === 'Approved' ? 'Manage Profile' : 'View Details'}
                        </button>
                        {dealer.status === 'Pending' && (
                            <>
                                <button className="size-9 flex items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 border border-green-200 dark:border-green-800 transition-colors" title="Approve">
                                    <Check size={20} />
                                </button>
                                <button className="size-9 flex items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 border border-red-200 dark:border-red-800 transition-colors" title="Reject">
                                    <X size={20} />
                                </button>
                            </>
                        )}
                        {dealer.status === 'Approved' && (
                            // No extra actions for Approved in the grid card as per design (Manage Profile covers it)
                            null
                        )}
                    </>
                )}

            </div>
        </div>
    );
};

export default DealerCard;
