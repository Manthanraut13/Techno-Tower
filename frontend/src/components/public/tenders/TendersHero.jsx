
import { BadgeCheck } from 'lucide-react';

const TendersHero = () => {
    return (
        <section className="relative w-full">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    <div className="p-4">
                        <div
                            className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-12 md:px-10 shadow-xl"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJXzGm841c9-vTYQAckbFi07a7pP_xrak2kcovKzAiUQ_K1dg5Cke4QN6yV5X_RPc0jvgFUd8q0cNvXaaZKzLGVFB42neorsILh3KEHqtoSWzewzmcqVhIlvwXoBJUTC4ZOGvR0OajDVGVMRpxlc31Rsh0jHyBHANtc6E-NuypkicXO4N5Jkjh135VpneMUX7iDe1bmuf3thb0eXVSCrfo85x4j0jMnp3LuDpn42nSW-klsgKMDSpQ3rJ_YWclTLKoQz3-MO6oML5t")`
                            }}
                        >
                            <div className="flex flex-col gap-3 text-left max-w-[800px]">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 w-fit backdrop-blur-md border border-white/20">
                                    <BadgeCheck size={16} className="text-text-main" />
                                    <span className="text-text-main text-xs font-bold uppercase tracking-wide">Government Approved Contractor</span>
                                </div>
                                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                                    Proven Excellence in Public Infrastructure
                                </h1>
                                <h2 className="text-gray-200 text-lg font-normal leading-relaxed max-w-[640px] drop-shadow-sm">
                                    Techno Tower leads the industry in manufacturing, supply, and installation of smart lighting solutions for major public tenders and federal contracts.
                                </h2>
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-main text-base font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                    View Tender History
                                </button>
                                <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold hover:bg-white/20 transition-colors">
                                    Our Capabilities
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TendersHero;
