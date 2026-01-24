
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    // Mock Data based on HTML
    const products = [
        {
            id: 1,
            category: "Street Light Poles",
            title: "Octagonal Pole Series",
            description: "High-durability galvanized steel poles designed for urban roadways and highways. Wind resistant up to 160km/h.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSkq7Q9rXxutCK5bjCaRG8pN7nqPQypOYkpHps4z3ot4qu9_NcfSTCoqgt4YnZLkPtUQ-SictfdW9Gz-B3IAmw9xr5mIcFysr_JTq9A-Fn2N80naSb8FptvSlC2O1kVBOieCZFVv4WtN4Ltx01QUOLusZSXel8SyM2QM-ScA0BPLowv_nzL04PqxtrMhAyCowhgplkjhUouFOMLdwj6L9TC-f7I4TPyzZRkaHL8kdyQzOce7Ch_DfBW3uy-jg3irdWQt2tYw3bbMxX",
            badge: "Best Seller",
            specLabel: "Height",
            specValue: "4m - 12m",
            link: "#"
        },
        {
            id: 2,
            category: "Smart Poles",
            title: "TechnoSmart V3",
            description: "Integrated infrastructure solution supporting Wi-Fi, CCTV, EV Charging, and environmental sensors.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4f7LR-XFm6q_80eUTz5N0GoM1mpBfbzu0oq3Gg4IRo5riSzrV4sznhAg83eqpvRa4JlMc09Z27_toSzWT8ASVYaA8rxUitu7W7evC-6ADyoSc-XI-bSUiwY-967qGBjWdPgOYlC3elHdHO55hK2laHI5juWP4CQL-w6rAsjv_MHwb0zd4HPX59mMWkgRmtlrXHpaNZAClZbxGn4FH1INLIOOPR8PkV7Iy7uSMcj_8nwahV2F_UZHt_pvqzpjg0OJjoX_kIAoOOVhB",
            badge: "New",
            specLabel: "Connectivity",
            specValue: "5G / IoT Ready",
            link: "/product/smart-pole-t100" // Link to our new detail page
        },
        {
            id: 3,
            category: "High Mast Poles",
            title: "Stadium Mast HM-20",
            description: "Designed for large area illumination such as stadiums, airports, and shipping ports with motorized lowering system.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-_bDpmByIdkwCgwKtR3M262ZskooSRwfEZ-F2XRaWZdZs1K6mXne5GDfxJDw5nV-ajMXCHNDEeiXGmeswTbwMLtyPbdVnbvHDpK1eebUhtoAqaWhFOwtn8maNjIkba4pVyfmYk8axXG_yivN0lfUhqfup83WhsX1Ed0ewvO7XvoSQtfKAwdr5AECfaXgvMvH7Re1mJz3KP9OoA2abfbMdT_c_pUm0QZLmGDavImRmWMAPJMakASDEFi94iM1ZOa04-nXRdXF21z3e",
            badge: null,
            specLabel: "Height",
            specValue: "20m - 40m",
            link: "#"
        },
        {
            id: 4,
            category: "Solar Lighting",
            title: "EcoLight Hybrid",
            description: "Self-sustaining solar street lights with integrated battery storage. Perfect for remote areas without grid access.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcQa7egvxPh2asXQs5sCUOdR2S-Zv88ajt1xBq-buf1Y-AZX87p5GUIHxGxSz64-gda7-mwuLxqWC-5P84v7eoLdJjugc-pUCwc6p_QZhMhl8gwAcoWCnL6Fk0EnS4BpECWRReJHkMSbbi0tNtQlq8BslAo4LKyZJiq9hPXH9dIBLgQKg7DHhJnQ40G0D0ii_QHXpphbWMAkOF5vgXkzJGX7b3QWHHXz1e3iRD2zpUCIVZVC34u0AxhRwzjj5ALkgwnFZzeSkEcM14",
            badge: null,
            specLabel: "Autonomy",
            specValue: "3 Days Backup",
            link: "#"
        },
        {
            id: 5,
            category: "Street Light Poles",
            title: "Conical Decorative",
            description: "Aesthetic conical poles for parks, residential areas, and boulevards. Powder coated in custom RAL colors.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbdAVS41Z26dPJl1r4pynm_qKGHfjXX-faBZp-wCk0NpS6SpKuRXwa60jEQ__-o3vP3G90sKWSxfI5lexQ4qWVHazqDGx4kkTN9dujCi7gEq-WBdxhKGLSUQFWNhGJZcXggNva3kS0HaUE0N3tm52PkJy-g89L4G4yFaMjjICNjlOmyC9DSNPdn5tub21F89KJuFAJKzIdzV6fql2sVJoqwBVtLajP__CVYw5LExfqWDucWVFa1b4eoHwVMWfEb_6QGWHJ7pkj4Z_W",
            badge: null,
            specLabel: "Finish",
            specValue: "Powder Coated",
            link: "#"
        },
        {
            id: 6,
            category: "Accessories",
            title: "Custom Brackets",
            description: "Single, double, and triple arm brackets designed to fit perfectly with our pole series. Customizable outreach.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAWbSZfO93oLobG7Ymt4dcPAkWyz0hhkAduYswhL2fzs5iWeRygQ2Yv_mNQ8_46lzPklN2iDWmYP02KhmmkVz0b-6iZo9__4WHUnB44xDVBhYXy1F14OCbBWBU2Nj8Ygrht56QsNKG9IftWZWbc0-uChpwqoRC5CBmAvwhsVlappHeyOZ67CGPHzvh9NV2250nBCh6Gu_8Fb7zyvIK0GExSI1L0RgLPlDz6PGxTkJjD8GuTSPjcJkrYfZrqW74O57lg7kjsdwcKWNz",
            badge: null,
            specLabel: "Type",
            specValue: "Modular",
            link: "#"
        }
    ];

    return (
        <div className="flex-1">
            {/* Active Filters & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Active Filters:</span>
                    <div className="flex items-center gap-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                        All Products <button className="hover:text-red-500 ml-1"><X size={14} /></button>
                    </div>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <label className="text-sm text-gray-500 dark:text-gray-400">Sort by:</label>
                    <select className="form-select border-none bg-transparent text-sm font-medium text-gray-900 dark:text-white focus:ring-0 cursor-pointer pr-8">
                        <option>Most Popular</option>
                        <option>Newest Arrivals</option>
                        <option>Height: Low to High</option>
                        <option>Height: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors disabled:opacity-50">
                    <ChevronLeft size={16} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-text-main font-bold shadow-sm">
                    1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors">
                    2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary transition-colors">
                    3
                </button>
                <span className="text-gray-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#f4a825] transition-colors">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default ProductGrid;
