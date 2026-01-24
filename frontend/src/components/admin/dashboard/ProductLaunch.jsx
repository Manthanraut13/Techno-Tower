import { Megaphone } from 'lucide-react';

const ProductLaunch = () => {
    return (
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-text-main text-center shadow-lg shadow-primary/30">
            <Megaphone className="mx-auto mb-2 opacity-90" size={32} />
            <h3 className="font-bold text-xl mb-1">New Product Launch</h3>
            <p className="text-sm text-text-main/80 mb-4">Smart Pole V2 Campaign is scheduled for next Tuesday.</p>
            <button className="bg-white text-primary font-bold py-2 px-6 rounded-lg text-sm hover:bg-gray-100 transition-colors w-full">
                View Details
            </button>
        </div>
    );
};

export default ProductLaunch;
