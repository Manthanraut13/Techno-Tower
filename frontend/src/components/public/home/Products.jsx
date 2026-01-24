
import { ArrowRight } from 'lucide-react';

const Products = () => {
    return (
        <section className="w-full py-20 bg-white dark:bg-gray-950" id="products">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Products</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Engineered for Durability</h2>
                    <p className="text-text-muted dark:text-gray-400">Our product range meets international quality standards, suitable for highways, stadiums, and smart cities.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Product 1 */}
                    <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer">
                        <img
                            alt="High mast lighting pole against blue sky"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWP5TGqn5pxfIqCy9Ka4vjkcr-abQsv5qGVzDAj_qNCR9Wy08oipWHgK4m5aYZEVYfRZLbJXJaraFjknbQ1gesZpry8Tw4-3IrkXlNcqAhLGTHg5AyCHYNucgTHXN0wT2mhOK_bqOg6hxeGD0uV5mwtCqkKp2vawZyXyWi-XDMz6xhf32BAVQ68jwj3jQS0V3hk7TPCeP-bFI8R77A3QbVC51znlJZsdsaMpGj-3wLhMepQIdHZUgj3rDoJ5jzHQe2W1pQX0HMnUoa"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2">High Mast Systems</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                Ranging from 12m to 50m, designed for large area lighting like stadiums and junctions.
                            </p>
                            <span className="inline-flex items-center text-primary text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                View Specs <ArrowRight size={16} className="ml-1" />
                            </span>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer">
                        <img
                            alt="Modern smart street light pole"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA-XkwEX53N7IIYNyZWsOzZULmxsYKXHoho0glT15FG63hPnBkK-OZMtpN2PrkNCTuOHH4SVUeLQtLR_C_Eg5pOAt4rCZSznokHrp7C9NefqlzdV02SpzDStxXxCoKhyTeUG61x0vB45FQzcGDaUemrA5MnIY52roz5TUJXyOawE6um9ascLh0SQ6kqvG2vVjNFeaQ04cPTnB_UDYNF_N2yw25kvAaU4TTAMwTAn0wLUwg4YGYjkAbuusvXYflgvdygv468ec0X1IU"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2">Smart Poles</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                Integrated with CCTV, Wi-Fi, and environmental sensors for next-gen smart cities.
                            </p>
                            <span className="inline-flex items-center text-primary text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                View Specs <ArrowRight size={16} className="ml-1" />
                            </span>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer">
                        <img
                            alt="Decorative urban street lighting"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrHPCUkSntwysgPxr8ow0q9ynohur1UC0rTArXakNF4ciaxcMdzytlTGY1BhDbF8NbMpzQ4b-u19RvnMUxLvwnqA5oFOlUwduJJbt4yqGc2whTsze-5IvyYYjPmC9RgN_5YXvaAIvpRk8sZppiACiXru9XhZopat1IstujiFX9At3LjEmvRapFcM84XVaQOvdyMUKliOMp2SBRYmPAo7zprCr4u57jhZNd7TcvEf9ctPMNCEogrFbwwOaC--5Gu-O7ZdkuDxxyIQqD"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2">Urban Lighting</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                Aesthetic and functional designs for parks, residential areas, and boulevards.
                            </p>
                            <span className="inline-flex items-center text-primary text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                View Specs <ArrowRight size={16} className="ml-1" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
