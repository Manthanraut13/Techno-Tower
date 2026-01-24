
const GalleryCTA = () => {
    return (
        <div className="bg-white dark:bg-gray-950 py-20 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mb-6 tracking-tight">
                    Ready to illuminate your infrastructure?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    Partner with Techno Tower for world-class manufacturing and installation solutions tailored to your city's needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-text-main font-bold text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-1">
                        Start Your Project
                    </button>
                    <button className="flex items-center justify-center h-12 px-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-bold text-base hover:border-primary hover:text-primary transition-all">
                        Download Brochure
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GalleryCTA;
