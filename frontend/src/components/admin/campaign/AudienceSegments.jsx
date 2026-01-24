const SegmentItem = ({ name, percentage, colorClass }) => (
    <div>
        <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-text-main dark:text-gray-200">{name}</span>
            <span className="text-gray-500 dark:text-gray-400">{percentage}</span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${colorClass}`} style={{ width: percentage }}></div>
        </div>
    </div>
);

const AudienceSegments = () => {
    return (
        <section className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col animate-fade-in-up delay-200">
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-6">Audience Segments</h3>
            <div className="space-y-6 flex-1">
                <SegmentItem name="Municipalities" percentage="45%" colorClass="bg-green-600" />
                <SegmentItem name="Private Contractors" percentage="30%" colorClass="bg-primary" />
                <SegmentItem name="Engineers / Architects" percentage="15%" colorClass="bg-blue-500" />
                <SegmentItem name="New Leads" percentage="10%" colorClass="bg-gray-400" />
            </div>
            <div className="mt-8 p-4 bg-[#f8f7f5] dark:bg-[#121212] rounded-lg border border-dashed border-gray-300 dark:border-gray-700 text-center">
                <button className="text-primary text-sm font-bold hover:underline">Manage Segments</button>
            </div>
        </section>
    );
};

export default AudienceSegments;
