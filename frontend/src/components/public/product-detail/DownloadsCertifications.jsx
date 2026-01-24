
import { BadgeCheck, CheckSquare, Hammer, FileText, BookOpen } from 'lucide-react';

const DownloadsCertifications = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-white/10 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center justify-between">
                {/* Compliance */}
                <div className="flex-1 w-full">
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-6">Standards & Certifications</h3>
                    <div className="flex flex-wrap gap-6 items-center">
                        <div className="flex items-center gap-2 bg-background-surface dark:bg-gray-900 px-4 py-2 rounded-lg border border-black/5 dark:border-white/5">
                            <BadgeCheck className="text-green-600" size={20} />
                            <span className="text-sm font-semibold dark:text-gray-300">ISO 9001:2015</span>
                        </div>
                        <div className="flex items-center gap-2 bg-background-surface dark:bg-gray-900 px-4 py-2 rounded-lg border border-black/5 dark:border-white/5">
                            <CheckSquare className="text-blue-600" size={20} />
                            <span className="text-sm font-semibold dark:text-gray-300">CE Certified</span>
                        </div>
                        <div className="flex items-center gap-2 bg-background-surface dark:bg-gray-900 px-4 py-2 rounded-lg border border-black/5 dark:border-white/5">
                            <Hammer className="text-primary" size={20} />
                            <span className="text-sm font-semibold dark:text-gray-300">BS EN 40</span>
                        </div>
                    </div>
                </div>
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <button className="flex items-center justify-center gap-3 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-text-main dark:text-white px-6 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors group">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded text-red-600 dark:text-red-400">
                            <FileText size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-text-muted dark:text-gray-400">Technical Datasheet</p>
                            <p className="text-sm font-bold group-hover:text-primary transition-colors">Download PDF</p>
                        </div>
                    </button>
                    <button className="flex items-center justify-center gap-3 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-text-main dark:text-white px-6 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors group">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-blue-600 dark:text-blue-400">
                            <BookOpen size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-text-muted dark:text-gray-400">Installation Guide</p>
                            <p className="text-sm font-bold group-hover:text-primary transition-colors">Download PDF</p>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DownloadsCertifications;
