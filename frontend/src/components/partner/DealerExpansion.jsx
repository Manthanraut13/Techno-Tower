import { CheckCircle, Clock, MapPin } from 'lucide-react';

const DealerExpansion = () => {
    return (
        <section className="py-16 bg-white dark:bg-white/5">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-[#1c160d] dark:text-white sm:text-4xl mb-6">Regional Expansion</h2>
                        <p className="text-lg text-[#6b5d4d] dark:text-gray-300 mb-8">
                            We are actively seeking strategic partners in high-growth zones. Current priority regions include industrial corridors and developing smart cities.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-lg bg-[#fcfaf8] dark:bg-white/5 border border-gray-100 dark:border-white/10">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-green-600" size={24} />
                                    <span className="font-medium text-[#1c160d] dark:text-white">North Zone</span>
                                </div>
                                <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">High Demand</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg bg-[#fcfaf8] dark:bg-white/5 border border-gray-100 dark:border-white/10">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-green-600" size={24} />
                                    <span className="font-medium text-[#1c160d] dark:text-white">West Zone</span>
                                </div>
                                <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Open for Partners</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg bg-[#fcfaf8] dark:bg-white/5 border border-gray-100 dark:border-white/10">
                                <div className="flex items-center gap-3">
                                    <Clock className="text-[#f4a825]" size={24} />
                                    <span className="font-medium text-[#1c160d] dark:text-white">South Zone</span>
                                </div>
                                <span className="text-sm px-3 py-1 rounded-full bg-[#f4a825]/20 text-[#1c160d] dark:text-[#f4a825]">Limited Slots</span>
                            </div>
                        </div>
                    </div>

                    {/* Map Visualization */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-80"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                        {/* Map Markers */}
                        <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                            <MapPin className="text-[#f4a825] drop-shadow-[0_0_15px_rgba(244,168,37,0.8)]" size={40} />
                        </div>
                        <div className="absolute top-1/2 right-1/3 flex flex-col items-center">
                            <MapPin className="text-[#f4a825] drop-shadow-[0_0_15px_rgba(244,168,37,0.8)]" size={40} />
                        </div>
                        <div className="absolute bottom-1/3 left-1/3 flex flex-col items-center">
                            <MapPin className="text-[#f4a825] drop-shadow-[0_0_15px_rgba(244,168,37,0.8)]" size={40} />
                        </div>

                        {/* Stats Overlay */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                <p className="text-white text-sm font-medium">Network Coverage</p>
                                <div className="w-full bg-gray-700/50 rounded-full h-2 mt-2">
                                    <div className="bg-[#f4a825] h-2 rounded-full w-3/4 shadow-[0_0_10px_rgba(244,168,37,0.5)]"></div>
                                </div>
                                <div className="flex justify-between mt-1 text-xs text-gray-300">
                                    <span>120+ Distributors</span>
                                    <span>Expanding</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DealerExpansion;
