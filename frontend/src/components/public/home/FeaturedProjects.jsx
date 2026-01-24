
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';

const FeaturedProjects = () => {
    return (
        <section className="w-full py-20 bg-white dark:bg-gray-950" id="projects">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Work</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">Featured Projects</h2>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                        <button className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:text-text-main hover:border-primary transition-all">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:text-text-main hover:border-primary transition-all">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFcBtpsb-cTi_vsYIB9fuyNybHOtvagQWNlvs6OtfqKfS_SWuiPhLIZALRUx4WT3ZaqxkAotW70egSbV1Md_29k2efygzKNVX_u1c79Afr4OG0WJ6_Y7d0bP2CRuerIDuznZP1WV84nmq08FMkg04Hi4vDGWiphnHq9BYo4CKWMZ7XyMG546AgSTsc3eZChigykvfn6bg23nuxbGIp9kcUjNKMM-hbS8qYT-1Pv12uqoaNE-_ZqBofG9OCzMS4NlKun-c0yHBshJHR"
                                alt="Night view of a illuminated city highway"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-full text-xs font-bold text-text-main dark:text-white shadow-sm backdrop-blur-sm">
                                Highway
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-text-muted dark:text-gray-400 text-sm mb-2">
                                <MapPin size={18} />
                                <span>National Highway 44 Expansion</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 group-hover:text-primary transition-colors">Smart Lighting Implementation</h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm line-clamp-2">
                                Installation of 500+ smart sensor-enabled street poles across 45km of highway infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLwTHMYqsEMkTBg4pKAs39NcJOnGpsVCpSHCvAWuxCZhmDo3RtPJQa-U1EQvfylxkUampHlXr-Q3qgAe7pgReiVVBVSp4_6dLAtXxUGAYlzgEXLcGB2ngBC5c6GyRFDc3zGJFYrgxoSa_A0zz2iDCX9i58RnoTTcrVkGqaNsYx-WcloEeTK4L1n0zoJ_calk5A2ZL-usaeAtbj7Ol1-dx0ObppVc0_UwkhcWMz1LNYKudJSiN7gJIIModrrYov4PN2NIWrAS0fnV0C"
                                alt="Sports stadium illuminated with floodlights"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-full text-xs font-bold text-text-main dark:text-white shadow-sm backdrop-blur-sm">
                                Stadium
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-text-muted dark:text-gray-400 text-sm mb-2">
                                <MapPin size={18} />
                                <span>City Sports Complex</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1c160d] dark:text-white mb-3 group-hover:text-[#f4a825] transition-colors">High Mast Stadium Lighting</h3>
                            <p className="text-[#6b5d4d] dark:text-gray-400 text-sm line-clamp-2">
                                Engineering and erection of 40m high mast poles with LED floodlighting for international standards.
                            </p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwy3aN3_YCE3qalyKs0mUK_hich7hVi3RSlYQ6LftPmmYBwHMciLE0oSNDioLzZE3HE_fRI_qJ0l8eIVdcKQdR8Aic8wnQ3ZKH1uhGDexD77uiU6Nzoy8qcK-3zmH8nzKcKQJKyaBmt7savk0G1p7yI7QIFcAhj6hyFUgZxVe_d5pgBi5HZuM2Rl98Ypvw1TnyVfm3zfTEh_vtOAyIoZkRePThTqHbNcDJNElYReMpsm-LVDGCsVGeu16tVl6WzHIWsnBdpMZSuOw_"
                                alt="Modern urban park with street lights"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-full text-xs font-bold text-text-main dark:text-white shadow-sm backdrop-blur-sm">
                                Urban
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-text-muted dark:text-gray-400 text-sm mb-2">
                                <MapPin size={18} />
                                <span>Downtown Revitalization</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1c160d] dark:text-white mb-3 group-hover:text-[#f4a825] transition-colors">Decorative Heritage Poles</h3>
                            <p className="text-[#6b5d4d] dark:text-gray-400 text-sm line-clamp-2">
                                Custom cast iron decorative poles to match the heritage aesthetic of the downtown district.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
