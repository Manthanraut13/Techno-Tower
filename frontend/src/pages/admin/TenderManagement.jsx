
import { Plus } from 'lucide-react';
import TenderStats from '../../components/admin/tenders/TenderStats';
import TenderFilters from '../../components/admin/tenders/TenderFilters';
import TenderList from '../../components/admin/tenders/TenderList';

const TenderManagement = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
            <div className="flex flex-col gap-8 mb-10 animate-fade-in-up">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-text-main dark:text-white">Tender Management</h2>
                        <p className="text-text-muted dark:text-gray-400 text-sm mt-1">Track active bids, deadlines, and submission statuses.</p>
                    </div>
                    <button className="flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark transition-all h-10 px-4 gap-2 text-text-main text-sm font-bold tracking-wide shadow-md">
                        <Plus size={18} />
                        New Tender Entry
                    </button>
                </div>
                <TenderStats />
            </div>

            <TenderFilters />

            <TenderList />
        </div>
    );
};

export default TenderManagement;
