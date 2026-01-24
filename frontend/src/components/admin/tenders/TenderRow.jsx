
import { Landmark, Building2, Train, Palmtree, Clock, CheckCircle2, XCircle, FileEdit, Eye, MoreVertical } from 'lucide-react';

const TenderRow = ({ tender, delayClass }) => {
    const getStatusStyles = (status) => {
        switch (status.toLowerCase()) {
            case 'applied':
                return 'bg-primary/10 border-primary/20 text-primary-dark';
            case 'won':
                return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400';
            case 'lost':
                return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400';
            case 'drafting':
                return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-400';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    const StatusIcon = ({ status }) => {
        switch (status.toLowerCase()) {
            case 'applied':
                return <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>;
            case 'won':
                return <CheckCircle2 size={14} />;
            case 'lost':
                return <XCircle size={14} />;
            case 'drafting':
                return <FileEdit size={14} />;
            default:
                return null;
        }
    };

    const AuthorityIcon = ({ type }) => {
        switch (type.toLowerCase()) {
            case 'municipal': return <Landmark size={20} className="text-gray-500" />;
            case 'highway': return <Building2 size={20} className="text-gray-500" />;
            case 'rail': return <Train size={20} className="text-gray-500" />;
            case 'sports': return <Palmtree size={20} className="text-gray-500" />;
            default: return <Building2 size={20} className="text-gray-500" />;
        }
    };

    const getBorderColor = (status) => {
        switch (status.toLowerCase()) {
            case 'applied': return 'bg-primary';
            case 'won': return 'bg-primary';
            case 'lost': return 'bg-gray-300 dark:bg-gray-600';
            case 'drafting': return 'bg-yellow-400';
            default: return 'bg-primary';
        }
    };

    return (
        <div className={`group bg-white dark:bg-gray-950 border border-gray-200/80 dark:border-gray-700 rounded-xl p-5 hover:shadow-lg transition-all duration-300 animate-fade-in-up ${delayClass} relative overflow-hidden ${tender.status === 'Lost' ? 'opacity-80 hover:opacity-100' : ''}`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${getBorderColor(tender.status)}`}></div>
            <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                <div className="col-span-4 mb-4 md:mb-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] px-2 py-0.5 rounded font-mono font-medium">{tender.id}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${tender.category === 'Manufacturing' ? 'bg-purple-100 text-purple-700' :
                            tender.category === 'Installation' ? 'bg-blue-100 text-blue-700' :
                                tender.category === 'Supply' ? 'bg-orange-100 text-orange-700' :
                                    'bg-teal-100 text-teal-700'
                            }`}>
                            {tender.category}
                        </span>
                    </div>
                    <h3 className={`text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors ${tender.status === 'Won' ? 'group-hover:text-primary' : ''}`}>
                        {tender.title}
                    </h3>
                </div>
                <div className="col-span-3 mb-3 md:mb-0 flex items-start gap-3">
                    <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                        <AuthorityIcon type={tender.authorityType} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-text-main dark:text-white">{tender.authority}</p>
                        <p className="text-xs text-text-muted dark:text-gray-400">{tender.location}</p>
                    </div>
                </div>
                <div className="col-span-2 mb-3 md:mb-0">
                    <div className={`flex items-center gap-2 ${tender.urgent ? 'text-red-600 dark:text-red-400' : 'text-text-muted dark:text-gray-400'}`}>
                        <Clock size={18} />
                        <div>
                            <p className="text-sm font-bold">{tender.deadlineText}</p>
                            <p className="text-xs text-text-muted dark:text-gray-400">{tender.deadlineDate}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 mb-3 md:mb-0">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wide ${getStatusStyles(tender.status)}`}>
                        <StatusIcon status={tender.status} />
                        {tender.status}
                    </span>
                </div>
                <div className="col-span-1 flex justify-end gap-2">
                    {tender.status === 'Drafting' ? (
                        <button className="px-3 py-1 bg-primary text-text-main text-xs font-bold rounded hover:bg-primary-dark transition-colors">
                            Edit
                        </button>
                    ) : (
                        <button className="size-8 rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-text-main transition-colors">
                            <Eye size={20} />
                        </button>
                    )}
                    <button className="size-8 rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-text-main transition-colors">
                        <MoreVertical size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TenderRow;
