
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../../data/productsData';

const Products = () => {
    const highMast = products.find(p => p.id === 1);
    const solarStreet = products.find(p => p.id === 3);
    const mobileTower = products.find(p => p.id === 4);

    return (
        <section className="w-full py-20 bg-white dark:bg-gray-950" id="products">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Products</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Engineered for Durability</h2>
                    <p className="text-text-muted dark:text-gray-400">Our product range meets international quality standards, suitable for highways, stadiums, and smart cities.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Product 1: High Mast */}
                    <Link to={`/product/${highMast.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer block">
                        <img
                            alt={highMast.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src={highMast.images[0].full}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2">{highMast.title}</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {highMast.description.substring(0, 80)}...
                            </p>
                            <span className="inline-flex items-center text-primary text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                View Specs <ArrowRight size={16} className="ml-1" />
                            </span>
                        </div>
                    </Link>

                    {/* Product 2: Solar Street Lights */}
                    <Link to={`/product/${solarStreet.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer block">
                        <img
                            alt={solarStreet.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src={solarStreet.images[0].full}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2">{solarStreet.title}</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {solarStreet.description.substring(0, 80)}...
                            </p>
                            <span className="inline-flex items-center text-primary text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                View Specs <ArrowRight size={16} className="ml-1" />
                            </span>
                        </div>
                    </Link>

                    {/* Product 3: Mobile Towers */}
                    <Link to={`/product/${mobileTower.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer block">
                        <img
                            alt={mobileTower.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src={mobileTower.images[0].full}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2">{mobileTower.title}</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {mobileTower.description.substring(0, 80)}...
                            </p>
                            <span className="inline-flex items-center text-primary text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                View Specs <ArrowRight size={16} className="ml-1" />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Products;
