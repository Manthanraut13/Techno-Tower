
import { Edit2, Trash2, MoreVertical, Image as ImageIcon } from 'lucide-react';

const ProductRow = ({ product }) => {
    return (
        <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0">
            <td className="p-4">
                <input className="rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
            </td>
            <td className="p-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gray-100 overflow-hidden flex-shrink-0 flex items-center justify-center">
                        {product.image ? (
                            <img alt={product.name} className="h-full w-full object-cover" src={product.image} />
                        ) : (
                            <ImageIcon className="text-gray-400" size={20} />
                        )}
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main dark:text-white text-sm">{product.name}</h4>
                        <p className="text-xs text-text-muted dark:text-gray-400">{product.description}</p>
                    </div>
                </div>
            </td>
            <td className="p-4 text-sm font-mono text-text-muted dark:text-gray-400">{product.sku}</td>
            <td className="p-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${product.categoryClass}`}>
                    {product.category}
                </span>
            </td>
            <td className="p-4 text-sm font-medium text-text-main dark:text-white">{product.price}</td>
            <td className="p-4">
                <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className={`h-full ${product.stockColor}`}
                            style={{ width: `${Math.min(product.stockCount, 100)}%` }}
                        ></div>
                    </div>
                    <span className={`text-xs font-medium ${product.stockTextColor || 'text-text-main dark:text-white'}`}>{product.stockCount}</span>
                </div>
            </td>
            <td className="p-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${product.statusClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${product.dotClass}`}></span>
                    {product.status}
                </span>
            </td>
            <td className="p-4 text-right">
                <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded transition-colors" title="Edit">
                        <Edit2 size={18} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors" title="Delete">
                        <Trash2 size={18} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors" title="More">
                        <MoreVertical size={18} />
                    </button>
                </div>
            </td>
        </tr>
    );
};

const InventoryTable = () => {
    // Mock Data
    const products = [
        {
            id: 1,
            name: "30m High Mast System",
            description: "Includes winch motor",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWP5TGqn5pxfIqCy9Ka4vjkcr-abQsv5qGVzDAj_qNCR9Wy08oipWHgK4m5aYZEVYfRZLbJXJaraFjknbQ1gesZpry8Tw4-3IrkXlNcqAhLGTHg5AyCHYNucgTHXN0wT2mhOK_bqOg6hxeGD0uV5mwtCqkKp2vawZyXyWi-XDMz6xhf32BAVQ68jwj3jQS0V3hk7TPCeP-bFI8R77A3QbVC51znlJZsdsaMpGj-3wLhMepQIdHZUgj3rDoJ5jzHQe2W1pQX0HMnUoa",
            sku: "HM-30-STD",
            category: "High Mast",
            categoryClass: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
            price: "$12,450.00",
            stockCount: 42,
            stockColor: "bg-green-500",
            status: "Active",
            statusClass: "bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
            dotClass: "bg-green-500"
        },
        {
            id: 2,
            name: "Smart Pole Gen-4",
            description: "Integrated CCTV + WiFi",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA-XkwEX53N7IIYNyZWsOzZULmxsYKXHoho0glT15FG63hPnBkK-OZMtpN2PrkNCTuOHH4SVUeLQtLR_C_Eg5pOAt4rCZSznokHrp7C9NefqlzdV02SpzDStxXxCoKhyTeUG61x0vB45FQzcGDaUemrA5MnIY52roz5TUJXyOawE6um9ascLh0SQ6kqvG2vVjNFeaQ04cPTnB_UDYNF_N2yw25kvAaU4TTAMwTAn0wLUwg4YGYjkAbuusvXYflgvdygv468ec0X1IU",
            sku: "SP-G4-IOT",
            category: "Smart Poles",
            categoryClass: "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800",
            price: "$4,200.00",
            stockCount: 5,
            stockColor: "bg-orange-500",
            stockTextColor: "text-orange-600 dark:text-orange-400",
            status: "Active",
            statusClass: "bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
            dotClass: "bg-green-500"
        },
        {
            id: 3,
            name: "Victorian Heritage Lamp",
            description: "Cast Iron finish",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrHPCUkSntwysgPxr8ow0q9ynohur1UC0rTArXakNF4ciaxcMdzytlTGY1BhDbF8NbMpzQ4b-u19RvnMUxLvwnqA5oFOlUwduJJbt4yqGc2whTsze-5IvyYYjPmC9RgN_5YXvaAIvpRk8sZppiACiXru9XhZopat1IstujiFX9At3LjEmvRapFcM84XVaQOvdyMUKliOMp2SBRYmPAo7zprCr4u57jhZNd7TcvEf9ctPMNCEogrFbwwOaC--5Gu-O7ZdkuDxxyIQqD",
            sku: "UL-VIC-09",
            category: "Urban Light",
            categoryClass: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800",
            price: "$850.00",
            stockCount: 0,
            stockColor: "bg-red-500",
            stockTextColor: "text-red-600 dark:text-red-400",
            status: "Out of Stock",
            statusClass: "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700",
            dotClass: "bg-gray-400"
        },
        {
            id: 4,
            name: "Traffic Signal Cantilever",
            description: "6m Overhang",
            image: null, // Placeholder to test no-image state
            sku: "TS-CN-06",
            category: "Traffic",
            categoryClass: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700",
            price: "$2,100.00",
            stockCount: 18,
            stockColor: "bg-green-500",
            status: "Draft",
            statusClass: "bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
            dotClass: "bg-yellow-500"
        },
        {
            id: 5,
            name: "Highway LED Luminaire",
            description: "150W Modular",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFcBtpsb-cTi_vsYIB9fuyNybHOtvagQWNlvs6OtfqKfS_SWuiPhLIZALRUx4WT3ZaqxkAotW70egSbV1Md_29k2efygzKNVX_u1c79Afr4OG0WJ6_Y7d0bP2CRuerIDuznZP1WV84nmq08FMkg04Hi4vDGWiphnHq9BYo4CKWMZ7XyMG546AgSTsc3eZChigykvfn6bg23nuxbGIp9kcUjNKMM-hbS8qYT-1Pv12uqoaNE-_ZqBofG9OCzMS4NlKun-c0yHBshJHR",
            sku: "LED-HW-150",
            category: "Lighting",
            categoryClass: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
            price: "$320.00",
            stockCount: 450,
            stockColor: "bg-green-500",
            status: "Active",
            statusClass: "bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
            dotClass: "bg-green-500"
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden fade-in-up delay-100">
            {/* Filters inserted in parent, here just table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/80 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                            <th className="p-4 py-3 w-10">
                                <input className="rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                            </th>
                            <th className="p-4 py-3 text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wider">Product Name</th>
                            <th className="p-4 py-3 text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wider">SKU</th>
                            <th className="p-4 py-3 text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wider">Category</th>
                            <th className="p-4 py-3 text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wider">Price (Base)</th>
                            <th className="p-4 py-3 text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wider">Stock</th>
                            <th className="p-4 py-3 text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="p-4 py-3 text-xs font-bold text-text-muted dark:text-gray-400 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {products.map(product => (
                            <ProductRow key={product.id} product={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryTable;
