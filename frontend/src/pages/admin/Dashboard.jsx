import { Calendar, Plus } from 'lucide-react';
import StatsRow from '../../components/admin/dashboard/StatsRow';
import NewEnquiries from '../../components/admin/dashboard/NewEnquiries';
import ProjectMilestones from '../../components/admin/dashboard/ProjectMilestones';
import TenderStatus from '../../components/admin/dashboard/TenderStatus';
import DealerRequests from '../../components/admin/dashboard/DealerRequests';
import ProductLaunch from '../../components/admin/dashboard/ProductLaunch';

const Dashboard = () => {
    return (
        <div className="animate-fade-in-up">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-text-main dark:text-white">Dashboard Overview</h2>
                    <p className="text-sm text-text-muted mt-1">Welcome back. Here is the latest infrastructure update.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-muted hover:border-primary hover:text-primary transition-colors shadow-sm">
                        <Calendar size={18} />
                        Last 30 Days
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-text-main rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                        <Plus size={18} />
                        Create Enquiry
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <StatsRow />

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                {/* Left Column (2/3) */}
                <div className="lg:col-span-2 flex flex-col gap-8 animate-fade-in-up delay-200">
                    <NewEnquiries />
                    <ProjectMilestones />
                </div>

                {/* Right Column (1/3) */}
                <div className="flex flex-col gap-8 animate-fade-in-up delay-300">
                    <TenderStatus />
                    <DealerRequests />
                    <ProductLaunch />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
