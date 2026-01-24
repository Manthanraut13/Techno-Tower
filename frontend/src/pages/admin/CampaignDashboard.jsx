import { Download, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import OverviewStats from '../../components/admin/campaign/OverviewStats';
import EngagementChart from '../../components/admin/campaign/EngagementChart';
import AudienceSegments from '../../components/admin/campaign/AudienceSegments';
import RecentCampaignsTable from '../../components/admin/campaign/RecentCampaignsTable';
import SubscriberList from '../../components/admin/campaign/SubscriberList';

const CampaignDashboard = () => {
    return (
        <div className="bg-background-surface dark:bg-gray-950 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 flex flex-col gap-8">
                {/* Header Actions */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-text-main dark:text-white">Email Marketing Dashboard</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Manage campaigns, analyze performance, and grow your audience.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm text-text-main dark:text-gray-200">
                            <Download size={18} />
                            Export Report
                        </button>
                        <Link to="/admin/campaigns/create" className="flex items-center gap-2 px-4 py-2 bg-primary text-text-main rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors shadow-sm">
                            <Plus size={18} />
                            Create Campaign
                        </Link>
                    </div>
                </div>

                <OverviewStats />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <EngagementChart />
                    <AudienceSegments />
                </div>

                <RecentCampaignsTable />
                <SubscriberList />
            </div>
        </div>
    );
};

export default CampaignDashboard;
