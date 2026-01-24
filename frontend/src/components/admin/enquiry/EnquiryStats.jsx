import { Inbox, Mail, Clock, CheckCircle } from 'lucide-react';

// Using consistent icon set (Lucide) where possible, falling back to basic shapes or mapped icons
// Designing based on the visual input: 4 cards with icons

const StatCard = ({ title, value, icon: Icon, iconColorClass, iconBgClass, valueColorClass }) => (
    <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between animate-fade-in-up">
        <div>
            <p className="text-xs font-bold uppercase tracking-wider text-text-muted dark:text-gray-400">{title}</p>
            <p className={`text-2xl font-black mt-1 ${valueColorClass}`}>{value}</p>
        </div>
        <div className={`size-10 rounded-full flex items-center justify-center ${iconBgClass} ${iconColorClass}`}>
            <Icon size={20} />
        </div>
    </div>
);

const EnquiryStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
                title="Total Enquiries"
                value="1,248"
                icon={Inbox}
                iconColorClass="text-gray-500"
                iconBgClass="bg-gray-100 dark:bg-gray-800"
                valueColorClass="text-text-main dark:text-white"
            />
            <StatCard
                title="New / Unread"
                value="12"
                icon={Mail}
                iconColorClass="text-primary"
                iconBgClass="bg-primary/10"
                valueColorClass="text-primary"
            />
            <StatCard
                title="In Progress"
                value="45"
                icon={Clock}
                iconColorClass="text-blue-600 dark:text-blue-400"
                iconBgClass="bg-blue-50 dark:bg-blue-900/20"
                valueColorClass="text-text-main dark:text-white"
            />
            <StatCard
                title="Closed (Mtd)"
                value="108"
                icon={CheckCircle}
                iconColorClass="text-text-main dark:text-green-400"
                iconBgClass="bg-gray-100 dark:bg-gray-800"
                valueColorClass="text-text-main dark:text-green-400"
            />
        </div>
    );
};

export default EnquiryStats;
