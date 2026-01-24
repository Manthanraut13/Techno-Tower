import { Download, Plus } from 'lucide-react';
import EnquiryStats from '../../components/admin/enquiry/EnquiryStats';
import EnquirySidebar from '../../components/admin/enquiry/EnquirySidebar';
import EnquiryList from '../../components/admin/enquiry/EnquiryList';

const EnquiryInbox = () => {
    return (
        <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8 bg-transparent min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 animate-fade-in-up">
                <div>
                    <h2 className="text-3xl font-bold text-text-main dark:text-white">Enquiry Inbox</h2>
                    <p className="text-text-muted dark:text-gray-400 mt-1">Manage incoming requests, tenders, and support tickets.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:border-primary transition-colors shadow-sm text-text-main dark:text-gray-200">
                        <Download size={18} />
                        Export CSV
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-text-main rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors shadow-md">
                        <Plus size={18} />
                        New Enquiry
                    </button>
                </div>
            </div>

            <EnquiryStats />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in-up delay-200">
                <EnquirySidebar />
                <EnquiryList />
            </div>
        </div>
    );
};

export default EnquiryInbox;
