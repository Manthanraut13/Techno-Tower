import { Search, MoreVertical, Edit } from 'lucide-react';

const RecentCampaignsTable = () => {
    return (
        <section className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden animate-fade-in-up delay-300">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="text-lg font-bold text-text-main dark:text-white">Recent Campaigns</h3>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        className="w-full pl-10 pr-4 py-2 bg-[#f8f7f5] dark:bg-[#121212] border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main dark:text-gray-200 placeholder-gray-400"
                        placeholder="Search campaigns..."
                        type="text"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            <th className="px-6 py-4 font-semibold">Campaign Name</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold">Sent Date</th>
                            <th className="px-6 py-4 font-semibold text-right">Open Rate</th>
                            <th className="px-6 py-4 font-semibold text-right">Click Rate</th>
                            <th className="px-6 py-4 font-semibold text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                        <CampaignRow
                            name="Solar High Mast Product Update"
                            meta="Product Updates • 5.2k Recipients"
                            status="Sent"
                            statusColor="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            date="Oct 24, 2024"
                            openRate="45.2%"
                            clickRate="12.8%"
                        />
                        <CampaignRow
                            name="Q3 Infrastructure Report"
                            meta="Newsletter • 12k Recipients"
                            status="Sent"
                            statusColor="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            date="Sep 15, 2024"
                            openRate="38.1%"
                            clickRate="9.5%"
                        />
                        <CampaignRow
                            name="Smart City Webinar Invite"
                            meta="Events • 3.5k Recipients"
                            status="Scheduled"
                            statusColor="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                            date="Nov 02, 2024"
                            openRate="-"
                            clickRate="-"
                            isEdit
                        />
                        <CampaignRow
                            name="Maintenance Schedule Alert - Zone B"
                            meta="Operational • 850 Recipients"
                            status="Draft"
                            statusColor="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                            date="-"
                            openRate="-"
                            clickRate="-"
                            isEdit
                        />
                    </tbody>
                </table>
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-center">
                <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
                    View All Campaigns
                </button>
            </div>
        </section>
    );
};

const CampaignRow = ({ name, meta, status, statusColor, date, openRate, clickRate, isEdit }) => (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
        <td className="px-6 py-4">
            <div className="font-medium text-text-main dark:text-white">{name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{meta}</div>
        </td>
        <td className="px-6 py-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span> {status}
            </span>
        </td>
        <td className="px-6 py-4 text-gray-500 dark:text-gray-300">{date}</td>
        <td className="px-6 py-4 text-right font-medium text-text-main dark:text-white">{openRate}</td>
        <td className="px-6 py-4 text-right font-medium text-text-main dark:text-white">{clickRate}</td>
        <td className="px-6 py-4 text-center">
            <button className="text-gray-400 hover:text-primary transition-colors">
                {isEdit ? <Edit size={18} /> : <MoreVertical size={18} />}
            </button>
        </td>
    </tr>
);

export default RecentCampaignsTable;
