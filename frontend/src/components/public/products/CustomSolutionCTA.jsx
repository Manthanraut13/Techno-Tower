
const CustomSolutionCTA = () => {
    return (
        <section className="bg-primary/10 border-y border-primary/20 mt-10">
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Need a Custom Solution?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                    We specialize in manufacturing bespoke infrastructure for complex projects. Contact our engineering team for a consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-text-main font-bold shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1">
                        Contact Engineering Team
                    </button>
                    <button className="h-12 px-8 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        Download Product Catalog
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomSolutionCTA;
