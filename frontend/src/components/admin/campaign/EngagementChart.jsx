const EngagementChart = () => {
    return (
        <section className="lg:col-span-2 bg-white dark:bg-gray-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 animate-fade-in-up delay-100">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-text-main dark:text-white">Engagement Overview</h3>
                <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                    <button className="px-3 py-1 text-xs font-medium bg-white dark:bg-gray-800 text-text-main dark:text-white rounded shadow-sm">Week</button>
                    <button className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-text-main">Month</button>
                    <button className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-text-main">Year</button>
                </div>
            </div>
            <div className="h-[300px] w-full relative flex items-end justify-between gap-2 px-2 pb-6 border-b border-gray-100 dark:border-gray-700">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="border-t border-dashed border-gray-200 dark:border-gray-700 w-full h-0"></div>
                    <div className="border-t border-dashed border-gray-200 dark:border-gray-700 w-full h-0"></div>
                    <div className="border-t border-dashed border-gray-200 dark:border-gray-700 w-full h-0"></div>
                    <div className="border-t border-dashed border-gray-200 dark:border-gray-700 w-full h-0"></div>
                    <div className="border-t border-dashed border-gray-200 dark:border-gray-700 w-full h-0"></div>
                </div>

                {/* Bars */}
                <Bar height="40%" label="40%" />
                <Bar height="65%" label="65%" />
                <Bar height="45%" label="45%" isInactive />
                <Bar height="80%" label="80%" isInactive />
                <div className="w-full bg-primary rounded-t-sm shadow-lg shadow-primary/20 relative group h-[90%]">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-950 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">90%</div>
                </div>
                <Bar height="55%" label="55%" isInactive />
                <Bar height="70%" label="70%" isInactive />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400 px-2">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
        </section>
    );
};

const Bar = ({ height, label, isInactive }) => (
    <div className={`w-full ${isInactive ? 'bg-primary/20 dark:bg-primary/10' : 'bg-primary/20 dark:bg-primary/10'} rounded-t-sm hover:bg-primary/40 transition-colors relative group`} style={{ height }}>
        {!isInactive && <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded transition-opacity">{label}</div>}
    </div>
);

export default EngagementChart;
