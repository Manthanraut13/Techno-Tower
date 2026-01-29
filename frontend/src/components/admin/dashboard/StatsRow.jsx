import { Inbox, HardHat, Gavel, Store, Mail } from 'lucide-react';
import StatCard from '../StatCard';

const StatsRow = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-8 animate-fade-in-up">
            <StatCard
                title="New Enquiries"
                value="42"
                change="+12.5%"
                changeType="increase"
                icon={Inbox}
            />
            <StatCard
                title="Active Projects"
                value="18"
                change="Stable"
                changeType="increase" // Treating stable as neutral/positive for simplicity
                icon={HardHat}
            />
            <StatCard
                title="Tenders Won (Q3)"
                value="8 / 12"
                change="+5.4%"
                changeType="increase"
                icon={Gavel}
            />
            <StatCard
                title="Dealer Requests"
                value="15"
                change="5 Pending"
                changeType="decrease" // Red for pending alerts
                icon={Store}
            />
            <StatCard
                title="Campaign Reach"
                value="94.2k"
                change="+22.1%"
                changeType="increase"
                icon={Mail}
            />
        </div>
    );
};

export default StatsRow;
