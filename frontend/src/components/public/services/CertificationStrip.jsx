
const CertificationStrip = () => {
    const certifications = [
        { label: 'ISO', value: '9001' },
        { label: 'ISO', value: '14001' },
        { label: 'ISO', value: '45001' }
    ];

    return (
        <section className="border-y border-[#e8dfce] dark:border-gray-800 bg-white dark:bg-[#1c160d] py-12 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-bold text-[#1c160d] dark:text-white">Certified Excellence</h2>
                    <p className="text-[#4B5563] dark:text-gray-400 mt-2 max-w-md">Our processes meet the highest international standards for quality, safety, and environmental management.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {certifications.map((cert, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 border-[#1c160d] dark:border-white p-2">
                            <span className="text-xs font-bold dark:text-white">{cert.label}</span>
                            <span className="text-lg font-black dark:text-white">{cert.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationStrip;
