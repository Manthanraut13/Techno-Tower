
const CTA = () => {
    return (
        <section className="w-full py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/10 opacity-20" style={{ backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            <div className="max-w-5xl mx-auto px-4 md:px-10 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-text-main mb-6">Ready to Illuminate Your Next Project?</h2>
                <p className="text-lg md:text-xl text-text-main/80 mb-10 max-w-2xl mx-auto font-medium">
                    Get a comprehensive quote for manufacturing, supply, and installation tailored to your specifications.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 h-14 rounded-lg bg-text-main text-white text-lg font-bold hover:bg-black transition-colors shadow-xl">
                        Request a Quote
                    </button>
                    <button className="w-full sm:w-auto px-8 h-14 rounded-lg bg-transparent border-2 border-text-main text-text-main text-lg font-bold hover:bg-text-main hover:text-white transition-colors">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
