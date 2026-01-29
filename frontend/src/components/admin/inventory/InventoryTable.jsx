import { Edit3, Trash2, MoreVertical, Image as ImageIcon, ExternalLink } from 'lucide-react';

const ProductRow = ({ product, onEdit }) => {
    return (
        <tr className="group hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors border-b border-gray-50 dark:border-[#3e3223] last:border-0">
            <td className="p-5">
                <input className="size-4 rounded border-gray-200 dark:border-[#3e3223] dark:bg-[#1c160d] text-primary focus:ring-primary/20 transition-all cursor-pointer" type="checkbox" />
            </td>
            <td className="p-5">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gray-100 dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] overflow-hidden flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
                        {product.image ? (
                            <img alt={product.name} className="h-full w-full object-cover" src={product.image} />
                        ) : (
                            <ImageIcon className="text-gray-300 dark:text-gray-600" size={20} />
                        )}
                    </div>
                    <div>
                        <h4 className="font-black text-text-main dark:text-white text-sm uppercase tracking-tight">{product.name}</h4>
                        <p className="text-[10px] text-text-muted dark:text-gray-500 font-bold uppercase tracking-widest mt-0.5 truncate max-w-[200px]">{product.description}</p>
                    </div>
                </div>
            </td>
            <td className="p-5 text-[11px] font-black text-text-muted dark:text-gray-500 font-mono tracking-tighter">{product.sku}</td>
            <td className="p-5">
                <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest border ${product.categoryClass}`}>
                    {product.category}
                </span>
            </td>
            <td className="p-5 text-sm font-black text-text-main dark:text-white font-mono">{product.price}</td>
            <td className="p-5">
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-[10px] font-black text-text-muted dark:text-gray-500">
                        <span>STOCK</span>
                        <span>{product.stockCount}</span>
                    </div>
                    <div className="w-24 h-1.5 bg-gray-100 dark:bg-[#1c160d] rounded-full overflow-hidden">
                        <div
                            className={`h-full ${product.stockColor} shadow-[0_0_5px_rgba(0,0,0,0.1)]`}
                            style={{ width: `${Math.min(product.stockCount, 100)}%` }}
                        ></div>
                    </div>
                </div>
            </td>
            <td className="p-5">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${product.statusClass}`}>
                    <span className={`size-1.5 rounded-full ${product.dotClass}`}></span>
                    {product.status}
                </span>
            </td>
            <td className="p-5 text-right">
                <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all">
                    <button
                        onClick={() => onEdit(product)}
                        className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
                        title="Modify Component"
                    >
                        <Edit3 size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all" title="Decommission">
                        <Trash2 size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-text-main dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all" title="More Analytics">
                        <MoreVertical size={18} />
                    </button>
                </div>
            </td>
        </tr>
    );
};

const InventoryTable = ({ onEdit }) => {
    // Mock Data (Refined with industrial theme classes)
    const products = [
        {
            id: 1,
            name: "30m High Mast System",
            description: "Includes winch motor",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWP5TGqn5pxfIqCy9Ka4vjkcr-abQsv5qGVzDAj_qNCR9Wy08oipWHgK4m5aYZEVYfRZLbJXJaraFjknbQ1gesZpry8Tw4-3IrkXlNcqAhLGTHg5AyCHYNucgTHXN0wT2mhOK_bqOg6hxeGD0uV5mwtCqkKp2vawZyXyWi-XDMz6xhf32BAVQ68jwj3jQS0V3hk7TPCeP-bFI8R77A3QbVC51znlJZsdsaMpGj-3wLhMepQIdHZUgj3rDoJ5jzHQe2W1pQX0HMnUoa",
            sku: "HM-30-STD",
            category: "High Mast",
            categoryClass: "bg-blue-500/10 text-blue-500 border-blue-500/20",
            price: "$12,450.00",
            stockCount: 42,
            stockColor: "bg-green-500",
            status: "Active",
            statusClass: "bg-green-500/10 text-green-500 border-green-500/20",
            dotClass: "bg-green-500"
        },
        {
            id: 2,
            name: "Smart Pole Gen-4",
            description: "Integrated CCTV + WiFi",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA-XkwEX53N7IIYNyZWsOzZULmxsYKXHoho0glT15FG63hPnBkK-OZMtpN2PrkNCTuOHH4SVUeLQtLR_C_Eg5pOAt4rCZSznokHrp7C9NefqlzdV02SpzDStxXxCoKhyTeUG61x0vB45FQzcGDaUemrA5MnIY52roz5TUJXyOawE6um9ascLh0SQ6kqvG2vVjNFeaQ04cPTnB_UDYNF_N2yw25kvAaU4TTAMwTAn0wLUwg4YGYjkAbuusvXYflgvdygv468ec0X1IU",
            sku: "SP-G4-IOT",
            category: "Smart Poles",
            categoryClass: "bg-primary/10 text-primary border-primary/20",
            price: "$4,200.00",
            stockCount: 5,
            stockColor: "bg-primary",
            status: "Active",
            statusClass: "bg-green-500/10 text-green-500 border-green-500/20",
            dotClass: "bg-green-500"
        },
        {
            id: 3,
            name: "Victorian Heritage Lamp",
            description: "Cast Iron finish",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrHPCUkSntwysgPxr8ow0q9ynohur1UC0rTArXakNF4ciaxcMdzytlTGY1BhDbF8NbMpzQ4b-u19RvnMUxLvwnqA5oFOlUwduJJbt4yqGc2whTsze-5IvyYYjPmC9RgN_5YXvaAIvpRk8sZppiACiXru9XhZopat1IstujiFX9At3LjEmvRapFcM84XVaQOvdyMUKliOMp2SBRYmPAo7zprCr4u57jhZNd7TcvEf9ctPMNCEogrFbwwOaC--5Gu-O7ZdkuDxxyIQqD",
            sku: "UL-VIC-09",
            category: "Urban Light",
            categoryClass: "bg-purple-500/10 text-purple-500 border-purple-500/20",
            price: "$850.00",
            stockCount: 0,
            stockColor: "bg-red-500",
            status: "Out of Stock",
            statusClass: "bg-gray-500/10 text-gray-500 border-gray-500/20",
            dotClass: "bg-gray-500"
        }
    ];

    return (
        <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50/50 dark:bg-[#1c160d] text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-[#3e3223]">
                    <tr>
                        <th className="p-5 w-10">
                            <input className="size-4 rounded border-gray-200 dark:border-[#3e3223] dark:bg-[#1c160d] text-primary focus:ring-primary/20 transition-all cursor-pointer" type="checkbox" />
                        </th>
                        <th className="p-5">Asset Specifications</th>
                        <th className="p-5">Identifier</th>
                        <th className="p-5">Sector</th>
                        <th className="p-5">Base Unit Cost</th>
                        <th className="p-5">Network Scale</th>
                        <th className="p-5">Status</th>
                        <th className="p-5 text-right">Command</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-[#3e3223]">
                    {products.map(product => (
                        <ProductRow key={product.id} onEdit={onEdit} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
