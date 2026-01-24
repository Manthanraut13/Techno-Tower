
import { Settings, Truck, TowerControl, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section className="w-full py-20 bg-white dark:bg-gray-950" id="services">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <span className="text-[#f4a825] font-bold uppercase tracking-wider text-sm mb-2 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1c160d] dark:text-white">End-to-End Infrastructure Solutions</h2>
                    </div>
                    <Link to="#" className="hidden md:flex items-center text-[#f4a825] font-semibold hover:underline mt-4 md:mt-0 group">
                        See all services
                        <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-[#f4a825]/50 transition-all duration-300 flex flex-col gap-4">
                        <div className="size-12 rounded-lg bg-[#f4a825]/10 flex items-center justify-center text-[#f4a825] group-hover:bg-[#f4a825] group-hover:text-white transition-colors">
                            <Settings size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1c160d] dark:text-white">Manufacturing</h3>
                        <p className="text-[#6b5d4d] dark:text-gray-400 text-sm leading-relaxed">
                            Precision engineering of high mast, octagonal, and smart poles in our state-of-the-art facility.
                        </p>
                    </div>
                    <div className="group bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-[#f4a825]/50 transition-all duration-300 flex flex-col gap-4">
                        <div className="size-12 rounded-lg bg-[#f4a825]/10 flex items-center justify-center text-[#f4a825] group-hover:bg-[#f4a825] group-hover:text-white transition-colors">
                            <Truck size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1c160d] dark:text-white">Supply Chain</h3>
                        <p className="text-[#6b5d4d] dark:text-gray-400 text-sm leading-relaxed">
                            Robust logistics network ensuring timely delivery of heavy infrastructure components to site.
                        </p>
                    </div>
                    <div className="group bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-[#f4a825]/50 transition-all duration-300 flex flex-col gap-4">
                        <div className="size-12 rounded-lg bg-[#f4a825]/10 flex items-center justify-center text-[#f4a825] group-hover:bg-[#f4a825] group-hover:text-white transition-colors">
                            <TowerControl size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1c160d] dark:text-white">Installation</h3>
                        <p className="text-[#6b5d4d] dark:text-gray-400 text-sm leading-relaxed">
                            Expert on-site installation, foundation civil work, and electrical integration by certified teams.
                        </p>
                    </div>
                    <div className="group bg-white dark:bg-[#1e1e1e] p-8 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-[#f4a825]/50 transition-all duration-300 flex flex-col gap-4">
                        <div className="size-12 rounded-lg bg-[#f4a825]/10 flex items-center justify-center text-[#f4a825] group-hover:bg-[#f4a825] group-hover:text-white transition-colors">
                            <Hammer size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#1c160d] dark:text-white">Maintenance</h3>
                        <p className="text-[#6b5d4d] dark:text-gray-400 text-sm leading-relaxed">
                            Ongoing support, structural audits, and repair services to ensure infrastructure longevity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
