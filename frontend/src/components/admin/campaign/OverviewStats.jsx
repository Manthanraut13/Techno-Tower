import { TrendingUp, TrendingDown, Users, Mail, MousePointerClick, Megaphone } from 'lucide-react';

const StatCard = ({ title, value, change, changeType, target, icon: Icon, colorClass, progressWidth, progressColor }) => (
    <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 relative group overflow-hidden transition-all hover:shadow-md">
        <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon size={64} />
        </div>
        <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{title}</p>
                <h3 className="text-3xl font-bold text-text-main dark:text-white mt-1">{value}</h3>
            </div>
            <span className={`flex items-center px-2 py-1 rounded text-xs font-bold ${changeType === 'positive' ? 'text-green-600 bg-green-100 dark:bg-green-900/30' : changeType === 'negative' ? 'text-red-600 bg-red-100 dark:bg-red-900/30' : 'text-gray-600 bg-gray-100 dark:bg-gray-800'}`}>
                {changeType === 'positive' && <TrendingUp size={14} className="mr-1" />}
                {changeType === 'negative' && <TrendingDown size={14} className="mr-1" />}
                {change}
            </span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 relative z-10">
            <div className={`h-1.5 rounded-full ${progressColor}`} style={{ width: progressWidth }}></div>
        </div>
        <p className="text-xs text-gray-400 mt-2 relative z-10">{target}</p>
    </div>
);

const OverviewStats = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
            <StatCard
                title="Total Subscribers"
                value="24,582"
                change="+12%"
                changeType="positive"
                target="Target: 30,000 by Q4"
                icon={Users}
                progressWidth="75%"
                progressColor="bg-primary"
            />
            <StatCard
                title="Avg. Open Rate"
                value="42.8%"
                change="+5.2%"
                changeType="positive"
                target="Industry Avg: 21.5%"
                icon={Mail}
                progressWidth="42%"
                progressColor="bg-green-600"
            />
            <StatCard
                title="Click Rate"
                value="15.3%"
                change="-1.2%"
                changeType="negative"
                target="Last Campaign: 'Smart Pole Launch'"
                icon={MousePointerClick}
                progressWidth="15%"
                progressColor="bg-blue-500"
            />
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 relative group overflow-hidden transition-all hover:shadow-md">
                <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Megaphone size={64} />
                </div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Active Campaigns</p>
                        <h3 className="text-3xl font-bold text-text-main dark:text-white mt-1">4</h3>
                    </div>
                    <span className="flex items-center text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs font-bold">
                        Paused: 2
                    </span>
                </div>
                <div className="flex -space-x-2 relative z-10 mt-3">
                    <div className="size-8 rounded-full bg-blue-100 border-2 border-white dark:border-gray-950 flex items-center justify-center text-xs font-bold text-blue-800" title="Newsletter">NL</div>
                    <div className="size-8 rounded-full bg-primary/20 border-2 border-white dark:border-gray-950 flex items-center justify-center text-xs font-bold text-primary-dark" title="Promo">PR</div>
                    <div className="size-8 rounded-full bg-green-100 border-2 border-white dark:border-gray-950 flex items-center justify-center text-xs font-bold text-green-800" title="Onboarding">OB</div>
                    <div className="size-8 rounded-full bg-gray-100 border-2 border-white dark:border-gray-950 flex items-center justify-center text-xs font-bold text-gray-600">+1</div>
                </div>
            </div>
        </section>
    );
};

export default OverviewStats;
