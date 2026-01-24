
import { CheckCircle, MoveVertical, Wind, Shield, Lightbulb, FileText, Download } from 'lucide-react';

const ProductInfo = () => {
    return (
        <div className="flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-3xl lg:text-4xl font-bold text-text-main dark:text-white tracking-tight mb-2">Smart City Light Pole T-100</h1>

            <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-medium text-text-muted dark:text-gray-400">SKU: TT-SC-100</span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                <span className="flex items-center text-sm text-green-600 dark:text-green-400 font-medium">
                    <CheckCircle size={16} className="mr-1" /> In Stock (Made to Order)
                </span>
            </div>

            <p className="text-base text-text-muted dark:text-gray-300 leading-relaxed mb-8">
                The T-100 is a modular smart city infrastructure solution designed for urban adaptability. Featuring integrated IoT housing, high-tensile galvanized steel construction, and premium weather-resistant coating, it serves as the backbone for modern smart city networks including 5G, CCTV, and EV charging.
            </p>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/10 flex items-center gap-3">
                    <MoveVertical className="text-primary" size={24} />
                    <div>
                        <p className="text-xs text-text-muted dark:text-gray-400">Height</p>
                        <p className="font-bold text-sm text-text-main dark:text-white">6m - 12m</p>
                    </div>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/10 flex items-center gap-3">
                    <Wind className="text-primary" size={24} />
                    <div>
                        <p className="text-xs text-text-muted dark:text-gray-400">Wind Load</p>
                        <p className="font-bold text-sm text-text-main dark:text-white">Up to 180 km/h</p>
                    </div>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/10 flex items-center gap-3">
                    <Shield className="text-primary" size={24} />
                    <div>
                        <p className="text-xs text-text-muted dark:text-gray-400">Material</p>
                        <p className="font-bold text-sm text-text-main dark:text-white">Galvanized Steel</p>
                    </div>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/10 flex items-center gap-3">
                    <Lightbulb className="text-primary" size={24} />
                    <div>
                        <p className="text-xs text-text-muted dark:text-gray-400">Lumens</p>
                        <p className="font-bold text-sm text-text-main dark:text-white">12,000 lm</p>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary hover:bg-primary-dark text-text-main text-base font-bold px-8 py-3.5 rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                    <FileText size={20} />
                    Enquiry Now
                </button>
                <button className="flex-1 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-white/5 text-text-main dark:text-white border border-gray-100 dark:border-white/10 text-base font-semibold px-8 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Download size={20} />
                    Brochure
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
