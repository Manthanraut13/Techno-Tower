import { Send, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CampaignHeader = () => {
    return (
        <header className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-text-muted dark:text-gray-400 mb-2">
                            <Link to="/admin" className="hover:text-primary">Campaigns</Link>
                            <ChevronRight size={14} />
                            <span>New Campaign</span>
                        </div>
                        <h1 className="text-3xl font-bold text-text-main dark:text-white">Create Email Campaign</h1>
                        <p className="text-text-muted mt-1">Design and schedule your infrastructure updates and newsletters.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-text-main dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            Save Draft
                        </button>
                        <button className="px-6 py-2 rounded-lg bg-primary text-text-main font-bold hover:bg-primary-dark shadow-sm transition-all flex items-center gap-2">
                            <Send size={18} />
                            Schedule Campaign
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default CampaignHeader;
