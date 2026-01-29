
const TechnicalSpecs = ({ product }) => {
    return (
        <section className="bg-white dark:bg-gray-950 py-16 border-y border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-text-main dark:text-white">Technical Specifications</h2>
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
                            {product.technicalSpecs.map((spec, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-text-muted dark:text-gray-400 font-medium">{spec.parameter}</td>
                                    <td className="px-6 py-4 text-text-main dark:text-white">{spec.specification}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSpecs;
