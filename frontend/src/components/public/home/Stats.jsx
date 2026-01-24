
const Stats = () => {
    return (
        <section className="w-full bg-white dark:bg-[#1a1a1a] border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 dark:divide-gray-700">
                    <div className="flex flex-col items-center md:items-start px-4 animate-fade-in-up delay-100">
                        <span className="text-4xl font-black text-[#f4a825] mb-1">15+</span>
                        <span className="text-sm font-medium text-[#6b5d4d] dark:text-gray-400 uppercase tracking-wide">Years of Excellence</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start px-4 animate-fade-in-up delay-200">
                        <span className="text-4xl font-black text-[#f4a825] mb-1">500+</span>
                        <span className="text-sm font-medium text-[#6b5d4d] dark:text-gray-400 uppercase tracking-wide">Projects Delivered</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start px-4 animate-fade-in-up delay-300">
                        <span className="text-4xl font-black text-[#f4a825] mb-1">30+</span>
                        <span className="text-sm font-medium text-[#6b5d4d] dark:text-gray-400 uppercase tracking-wide">Cities Covered</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start px-4 animate-fade-in-up delay-300">
                        <span className="text-4xl font-black text-[#f4a825] mb-1">100%</span>
                        <span className="text-sm font-medium text-[#6b5d4d] dark:text-gray-400 uppercase tracking-wide">Safety Compliance</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
