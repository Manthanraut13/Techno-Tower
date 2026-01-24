
const Testimonials = () => {
    return (
        <section className="w-full py-20 bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto px-4 md:px-10 text-center">
                <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Testimonials</span>
                <h2 className="text-3xl font-bold text-text-main dark:text-white mb-12">Trusted by Industry Leaders</h2>
                <div className="relative p-8 md:p-12 bg-background-surface dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <span className="absolute top-8 left-8 text-6xl text-primary/20 font-serif leading-none">"</span>
                    <p className="text-xl md:text-2xl text-text-main dark:text-gray-200 font-medium leading-relaxed italic relative z-10 mb-8">
                        Techno Tower delivered exceptional quality for our Smart City project. Their ability to handle both manufacturing and on-site installation streamlined our timeline significantly.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mb-2">
                            <img
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBniLgA5KaerRxwqI4dgS_jHFtAJLiwQsOtR1HvU-IpuKmmmkqDVlueFtNkvcDwc51C070cCLYl5Q-0IBpYK3x4xenIYbGaUxNBchIfRNzDFq9XlQTbS3VogqEfvoSgCikLbqsEOnGDWGazdWfeep8fAgOhpTe3vqK60dRxqJCs9ZRqjilJrdYPclkSc56CBnM4orsUGX2T1Yzd_OXIWASr6MfH-7-mp94dqMNgT1PxlbHX92L2tOP8w-ytTWbUHdLMPZOqeOpGjrSd"
                                alt="Portrait of a professional man"
                            />
                        </div>
                        <h4 className="font-bold text-text-main dark:text-white">James Wilson</h4>
                        <p className="text-sm text-text-muted dark:text-gray-400">Chief Engineer, Metropolis Infrastructure</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
