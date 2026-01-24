import { Plus, Settings } from 'lucide-react';
import DealerStats from '../../components/admin/dealers/DealerStats';
import DealerFilters from '../../components/admin/dealers/DealerFilters';
import DealerCard from '../../components/admin/dealers/DealerCard';

const Dealers = () => {
    // Mock Data based on HTML
    const dealers = [
        {
            id: 'DLR-2024-001',
            name: 'Apex Construction',
            initials: 'AC',
            initialsBg: 'bg-gray-100 dark:bg-gray-700',
            initialsColor: 'text-gray-500',
            location: 'Austin, Texas',
            region: 'South Region',
            contact: 'Johnathan Doe',
            appliedDate: 'Oct 24, 2023',
            status: 'Pending'
        },
        {
            id: 'DLR-2024-042',
            name: 'BuildRight Solutions',
            initials: 'BS',
            initialsBg: 'bg-secondary/10',
            initialsColor: 'text-secondary',
            location: 'Boston, MA',
            region: 'East Region',
            contact: 'Sarah Miller',
            activeSince: 'Nov 01, 2023',
            status: 'Approved'
        },
        {
            id: 'DLR-2024-088',
            name: 'Metro Poles Inc.',
            initials: 'MP',
            initialsBg: 'bg-primary/20',
            initialsColor: 'text-primary-dark',
            location: 'Seattle, WA',
            region: 'West Region',
            contact: 'David Chen',
            appliedDate: 'Oct 25, 2023',
            status: 'Pending'
        },
        {
            id: 'DLR-2023-112',
            name: 'Urban Grid Supply',
            initials: 'UG',
            location: 'Phoenix, AZ',
            region: 'West Region',
            contact: 'Mike Ross',
            reason: 'Incomplete Documentation',
            status: 'Rejected'
        },
        {
            id: 'DLR-2024-099',
            name: 'City Lights Co.',
            initials: 'CL',
            initialsBg: 'bg-primary/20',
            initialsColor: 'text-primary-dark',
            location: 'Chicago, IL',
            region: 'North Region',
            contact: 'Emily Blunt',
            appliedDate: 'Oct 26, 2023',
            status: 'Pending'
        },
        {
            id: 'DLR-2023-010',
            name: 'Global Infra',
            initials: 'GI',
            initialsBg: 'bg-secondary/10',
            initialsColor: 'text-secondary',
            location: 'London, UK',
            region: 'Intl. Region',
            contact: 'James Bond',
            activeSince: 'Jan 12, 2023',
            status: 'Approved'
        }
    ];

    return (
        <div className="animate-fade-in-up">
            {/* Header */}
            <div className="flex flex-col gap-8 mb-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-text-main dark:text-white">Dealer Management</h2>
                        <p className="text-text-muted dark:text-gray-400 mt-1">Review incoming applications and manage dealer network.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm text-text-main dark:text-white">
                            <Settings size={18} />
                            Settings
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-secondary-light transition-colors shadow-lg shadow-secondary/20">
                            <Plus size={18} />
                            New Dealer
                        </button>
                    </div>
                </div>

                <DealerStats />
            </div>

            <DealerFilters />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {dealers.map((dealer, index) => (
                    <DealerCard key={dealer.id} dealer={dealer} delay={`delay-${(index % 3 + 3) * 100}`} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-8 animate-fade-in-up delay-500">
                <p className="text-sm text-text-muted dark:text-gray-400">
                    Showing <span className="font-bold text-text-main dark:text-white">1</span> to <span className="font-bold text-text-main dark:text-white">6</span> of <span className="font-bold text-text-main dark:text-white">124</span> results
                </p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-primary text-text-main rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors shadow-sm">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dealers;
