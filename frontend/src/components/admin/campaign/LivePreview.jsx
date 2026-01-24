import { Zap, CheckCircle, Send } from 'lucide-react';

const LivePreview = () => {
    return (
        <div className="sticky top-24 space-y-6 animate-fade-in-up delay-200">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-text-main dark:text-white">Live Preview</h3>
                <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
                    <button className="p-1 px-2 rounded bg-white dark:bg-gray-600 shadow-sm text-xs font-medium">Desktop</button>
                    <button className="p-1 px-2 rounded text-text-muted dark:text-gray-400 text-xs font-medium hover:text-text-main">Mobile</button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden transform transition-all">
                {/* Browser Toolbar Mockup */}
                <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="size-2.5 rounded-full bg-red-400"></div>
                        <div className="size-2.5 rounded-full bg-yellow-400"></div>
                        <div className="size-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto bg-white dark:bg-gray-900 px-3 py-0.5 rounded text-[10px] text-gray-400 w-1/2 text-center truncate">
                        Subject: Introducing the New Smart-Pole Series X5
                    </div>
                </div>

                {/* Preview Content */}
                <div className="p-6 md:p-8 space-y-6 max-h-[600px] overflow-y-auto">
                    <div className="border-b border-gray-100 dark:border-gray-800 pb-6 text-center">
                        <div className="inline-flex items-center justify-center size-10 text-primary border border-primary rounded-lg mb-2">
                            <Zap size={24} />
                        </div>
                        <h2 className="text-lg font-bold text-text-main dark:text-white">Techno Tower</h2>
                    </div>

                    <div className="space-y-4 text-sm text-text-muted dark:text-gray-300 leading-relaxed">
                        <p>Dear Partners,</p>
                        <p>We are thrilled to announce the launch of our new <strong className="text-text-main dark:text-white">Smart-Pole Series X5</strong>. This new line features integrated environmental sensors and a modular design that reduces installation time by 30%.</p>

                        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700 my-4">
                            <h4 className="font-bold text-text-main dark:text-white mb-2 text-xs uppercase tracking-wider text-primary">Key Benefits</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-primary" size={16} />
                                    <span>50% Energy Savings</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-primary" size={16} />
                                    <span>Solar-Ready Top Mounts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="text-primary" size={16} />
                                    <span>5G Small Cell Integration</span>
                                </li>
                            </ul>
                        </div>

                        <p>Learn more about how the Series X5 can transform your municipal infrastructure projects.</p>

                        <div className="pt-2 text-center">
                            <button className="bg-primary text-text-main font-bold py-2 px-6 rounded text-sm hover:opacity-90">View Specifications</button>
                        </div>

                        <p>Best regards,<br />The Techno Tower Team</p>
                    </div>

                    <div className="border-t border-gray-100 dark:border-gray-800 pt-6 text-center">
                        <p className="text-xs text-gray-400">© 2024 Techno Tower Infrastructure. All rights reserved.</p>
                        <div className="flex justify-center gap-2 mt-2 text-xs text-primary">
                            <a href="#">Unsubscribe</a> • <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Test Email Box */}
            <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-4">
                <h4 className="text-sm font-bold text-text-main dark:text-white mb-3">Send Test Email</h4>
                <div className="flex gap-2">
                    <input
                        className="flex-1 rounded text-sm border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-primary focus:border-primary py-2 px-3 border outline-none"
                        placeholder="email@example.com"
                        type="email"
                    />
                    <button className="bg-text-main text-white px-3 rounded hover:bg-opacity-90 transition-opacity flex items-center justify-center">
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LivePreview;
