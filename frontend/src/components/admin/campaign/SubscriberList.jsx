import { UserPlus, Briefcase, Building, ShoppingCart, Ruler } from 'lucide-react';

const SubscriberCard = ({ initials, name, role, typeIcon: TypeIcon, typeName, joinedTime, bgColor, textColor }) => (
    <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:border-primary/50 hover:shadow-md transition-all group bg-white dark:bg-gray-950">
        <div className="flex items-center gap-3 mb-2">
            <div className={`size-10 rounded-full ${bgColor} ${textColor} flex items-center justify-center font-bold text-sm`}>
                {initials}
            </div>
            <div className="overflow-hidden">
                <h4 className="font-bold text-text-main dark:text-white text-sm truncate">{name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{role}</p>
            </div>
        </div>
        <div className="text-xs text-gray-400 flex items-center gap-1 mb-2">
            <TypeIcon size={14} /> {typeName}
        </div>
        <p className="text-[10px] text-gray-400">{joinedTime}</p>
    </div>
);

const SubscriberList = () => {
    return (
        <section className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 animate-fade-in-up delay-400">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-text-main dark:text-white">Latest Subscribers</h3>
                <button className="text-sm text-primary font-medium hover:underline">Manage List</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <SubscriberCard
                    initials="AS" name="Alex Smith" role="City Planner"
                    typeIcon={Building} typeName="Municipality" joinedTime="Joined: 2 hours ago"
                    bgColor="bg-blue-100" textColor="text-blue-600"
                />
                <SubscriberCard
                    initials="JD" name="John Doe" role="Lead Architect"
                    typeIcon={Ruler} typeName="Private Firm" joinedTime="Joined: 5 hours ago"
                    bgColor="bg-purple-100" textColor="text-purple-600"
                />
                <SubscriberCard
                    initials="MK" name="Maria K." role="Contractor"
                    typeIcon={Briefcase} typeName="Construction" joinedTime="Joined: 1 day ago"
                    bgColor="bg-green-100" textColor="text-green-600"
                />
                <SubscriberCard
                    initials="RT" name="Robert T." role="Procurement"
                    typeIcon={ShoppingCart} typeName="Enterprise" joinedTime="Joined: 2 days ago"
                    bgColor="bg-yellow-100" textColor="text-yellow-600"
                />

                {/* Add Subscriber Button */}
                <div className="p-4 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer text-gray-400 hover:text-primary h-full min-h-[110px]">
                    <UserPlus size={24} className="mb-1" />
                    <span className="text-xs font-bold">Add Subscriber</span>
                </div>
            </div>
        </section>
    );
};

export default SubscriberList;
