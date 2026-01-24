
import { Hammer, Droplets, PaintRoller } from 'lucide-react';

const MaterialFinishing = () => {
    return (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-text-main dark:text-white mb-8">Material & Finishing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-white/10 hover:shadow-lg transition-shadow group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-text-main transition-colors">
                        <Hammer size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">High-Tensile Steel</h3>
                    <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                        Manufactured using premium grade structural steel (Q345/Grade 50) ensuring high yield strength and structural integrity under heavy loads.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-white/10 hover:shadow-lg transition-shadow group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-text-main transition-colors">
                        <Droplets size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">Hot-Dip Galvanization</h3>
                    <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                        Submerged in 450°C molten zinc bath achieving complete metallurgical bonding for superior corrosion resistance exceeding 20 years.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-white/10 hover:shadow-lg transition-shadow group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-text-main transition-colors">
                        <PaintRoller size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">Powder Coating</h3>
                    <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                        Electrostatic polyester powder coating available in any RAL color, providing UV resistance and an aesthetic architectural finish.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MaterialFinishing;
