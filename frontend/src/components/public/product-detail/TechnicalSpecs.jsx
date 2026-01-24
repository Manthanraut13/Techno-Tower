
const TechnicalSpecs = () => {
    return (
        <section className="bg-white dark:bg-gray-950 py-16 border-y border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-text-main dark:text-white">Technical Specifications</h2>
                    <div className="mt-4 md:mt-0 flex gap-2">
                        <button className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary-dark rounded-full border border-primary/20">General</button>
                        <button className="px-4 py-2 text-sm font-medium text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white rounded-full">Electrical</button>
                        <button className="px-4 py-2 text-sm font-medium text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white rounded-full">Mechanical</button>
                    </div>
                </div>
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-white/10">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background-surface dark:bg-gray-900 text-text-main dark:text-white font-semibold">
                            <tr>
                                <th className="px-6 py-4 border-b border-gray-100 dark:border-white/10 w-1/3">Parameter</th>
                                <th className="px-6 py-4 border-b border-gray-100 dark:border-white/10">Specification</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-text-muted dark:text-gray-400 font-medium">Pole Height Options</td>
                                <td className="px-6 py-4 text-text-main dark:text-white">6m, 8m, 10m, 12m</td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-text-muted dark:text-gray-400 font-medium">Structure Shape</td>
                                <td className="px-6 py-4 text-text-main dark:text-white">Octagonal / Conical / Cylindrical</td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-text-muted dark:text-gray-400 font-medium">Material Standard</td>
                                <td className="px-6 py-4 text-text-main dark:text-white">BS EN 40 / ASTM A572 Grade 50</td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-text-muted dark:text-gray-400 font-medium">Galvanization</td>
                                <td className="px-6 py-4 text-text-main dark:text-white">Hot Dip Galvanized to ISO 1461 (Min 85 microns)</td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-text-muted dark:text-gray-400 font-medium">Smart Integration</td>
                                <td className="px-6 py-4 text-text-main dark:text-white">NEMA Socket 7-pin, Internal Cable Management, CCTV mount</td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-text-muted dark:text-gray-400 font-medium">Operating Temperature</td>
                                <td className="px-6 py-4 text-text-main dark:text-white">-30°C to +60°C</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSpecs;
