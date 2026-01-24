import { Gavel } from 'lucide-react';

const TenderStatus = () => {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="p-6 bg-gray-950 text-white relative overflow-hidden">
                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg mb-1">Tender Status</h3>
                        <p className="text-xs text-gray-300 opacity-80">Government & Public Sector</p>
                    </div>
                    <Gavel className="text-white/20 absolute right-4 top-4" size={40} />
                </div>
            </div>
            <div className="p-4 space-y-4">

                {/* Won */}
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <div className="mt-1">
                        <div className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm font-bold text-text-main">Metro Rail Corridor</h4>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-green-100 text-green-700 rounded">WON</span>
                        </div>
                        <p className="text-xs text-text-muted mb-2">Supply of 200 Octagonal Poles</p>
                        <div className="text-[10px] text-gray-400">Valued at $1.2M • Closing: Closed</div>
                    </div>
                </div>

                {/* Applied */}
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-t border-gray-50 dark:border-gray-800">
                    <div className="mt-1">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm font-bold text-text-main">Municipal Park lighting</h4>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">APPLIED</span>
                        </div>
                        <p className="text-xs text-text-muted mb-2">Decorative Cast Iron Poles</p>
                        <div className="text-[10px] text-gray-400">Valued at $450k • Closing: Nov 15</div>
                    </div>
                </div>

                {/* Draft */}
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-t border-gray-50 dark:border-gray-800">
                    <div className="mt-1">
                        <div className="size-2 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm font-bold text-text-main">Expressway Phase 4</h4>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">DRAFT</span>
                        </div>
                        <p className="text-xs text-text-muted mb-2">Smart Street Light Integration</p>
                        <div className="text-[10px] text-gray-400">Valued at $2.5M • Closing: Dec 01</div>
                    </div>
                </div>

                <button className="w-full py-2 text-xs font-bold text-text-main dark:text-white border border-primary rounded hover:bg-primary hover:text-text-main transition-colors">
                    View All Tenders
                </button>
            </div>
        </div>
    );
};

export default TenderStatus;
