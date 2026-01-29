
import { LayoutGrid, MoveVertical, Hammer } from 'lucide-react';

const ProductSidebar = () => {
    return (
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            {/* Categories */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <LayoutGrid className="text-primary" size={18} />
                    Categories
                </h3>
                <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-background-surface dark:hover:bg-white/5 transition-colors -ml-2">
                        <input defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium">All Products</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-background-surface dark:hover:bg-white/5 transition-colors -ml-2">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">High Mast Poles</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-background-surface dark:hover:bg-white/5 transition-colors -ml-2">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Street Light Poles</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-background-surface dark:hover:bg-white/5 transition-colors -ml-2">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Solar Lighting</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-background-surface dark:hover:bg-white/5 transition-colors -ml-2">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Mobile Lighting</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-background-surface dark:hover:bg-white/5 transition-colors -ml-2">
                        <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Inflatable Lighting</span>
                    </label>
                </div>
            </div>

            {/* Filter by Height */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <MoveVertical className="text-primary" size={18} />
                    Height Range
                </h3>
                <div className="px-2">
                    <input className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" max="30" min="3" type="range" defaultValue="12" />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                        <span>3m</span>
                        <span>30m+</span>
                    </div>
                </div>
            </div>

            {/* Material */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Hammer className="text-primary" size={18} />
                    Material
                </h3>
                <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 text-xs font-medium bg-background-surface dark:bg-white/5 hover:bg-primary/20 hover:text-primary-dark text-gray-600 dark:text-gray-300 rounded-full transition-colors">Galvanized Steel</button>
                    <button className="px-3 py-1 text-xs font-medium bg-background-surface dark:bg-white/5 hover:bg-primary/20 hover:text-primary-dark text-gray-600 dark:text-gray-300 rounded-full transition-colors">Aluminum</button>
                    <button className="px-3 py-1 text-xs font-medium bg-background-surface dark:bg-white/5 hover:bg-primary/20 hover:text-primary-dark text-gray-600 dark:text-gray-300 rounded-full transition-colors">Composite</button>
                </div>
            </div>
        </aside>
    );
};

export default ProductSidebar;
