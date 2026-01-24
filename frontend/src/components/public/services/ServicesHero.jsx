
const ServicesHero = () => {
    return (
        <section className="relative w-full py-16 lg:py-24 px-6 lg:px-20 bg-gray-950 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Abstract blueprint and construction background texture"
                    className="w-full h-full object-cover opacity-20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5xkSy1s4RcUE3KqUdXPW2BoHZ5Eik3qE5PHvbCct_oQHdLJpWY-qk8cPN0bzyoioffmS-KQPVHWSV8lS-fRUmx73wvr4XLZ84bjGI8blfV99MJjpgA9UT_xtNlRQgqEmNFaeIwq_bEruhlm64OltguoEGfXxfvXEgAiinDTiuyQh-jX5X4BoZ92ikNkWY9e9Xu-6OhFInaBaJZum2NgYA_Hv-zQmPE6YDl7bGO25QK9kgKljnJFHpn9c2MfdSN4gTw_9H0pXNIEgr"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 to-gray-950/60"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-medium text-white/90 uppercase tracking-wider">End-to-End Infrastructure</span>
                </div>
                <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                    Services Overview
                </h1>
                <p className="text-white/80 text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                    Empowering smart cities with precision manufacturing and expert execution. We deliver comprehensive solutions for modern infrastructure needs.
                </p>
            </div>
        </section>
    );
};

export default ServicesHero;
