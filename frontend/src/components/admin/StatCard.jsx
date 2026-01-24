const StatCard = ({ icon: Icon, label, value, color, bgColor }) => {
    return (
        <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow relative overflow-hidden">
            {/* Decorative Corner */}
            <div className={`absolute right-0 top-0 w-24 h-24 ${bgColor} opacity-20 rounded-bl-full -mr-4 -mt-4`}></div>

            <div className="flex items-center gap-4 relative z-10">
                <div className={`p-3 rounded-lg ${bgColor} ${color}`}>
                    <Icon size={24} />
                </div>
                <div>
                    <p className="text-sm text-text-muted dark:text-gray-400 font-medium">{label}</p>
                    <h3 className="text-2xl font-bold text-text-main dark:text-white">{value}</h3>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
