import { FileText, Smile, Bold, Italic, Underline, ChevronDown, Link, Image, List } from 'lucide-react';

const CampaignEditor = () => {
    return (
        <section className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 animate-fade-in-up">
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                <FileText className="text-primary" size={20} />
                Campaign Details
            </h3>
            <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1.5">Campaign Name</label>
                        <input
                            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-text-main dark:text-white focus:border-primary focus:ring-primary placeholder:text-gray-400 py-2.5 px-3 border outline-none transition-colors"
                            placeholder="e.g. Q4 Infrastructure Update"
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1.5">Audience Segment</label>
                        <select className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-text-main dark:text-white focus:border-primary focus:ring-primary py-2.5 px-3 border outline-none transition-colors">
                            <option>All Clients (2,450)</option>
                            <option>Municipal Partners</option>
                            <option>Private Contractors</option>
                            <option>New Leads (Q3)</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1.5">Email Subject Line</label>
                    <div className="relative">
                        <input
                            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-text-main dark:text-white focus:border-primary focus:ring-primary pl-4 pr-10 py-2.5 border outline-none transition-colors"
                            type="text"
                            defaultValue="Introducing the New Smart-Pole Series X5"
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400 hover:text-primary cursor-pointer">
                            <Smile size={20} />
                        </span>
                    </div>
                </div>
            </div>

            {/* Editor Toolbar & Area */}
            <div className="mt-8 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden">
                <div className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 p-3 flex flex-wrap items-center gap-2">
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 p-1 shadow-sm">
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300" title="Bold">
                            <Bold size={18} />
                        </button>
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300" title="Italic">
                            <Italic size={18} />
                        </button>
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300" title="Underline">
                            <Underline size={18} />
                        </button>
                    </div>
                    <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 p-1 shadow-sm">
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-text-main dark:text-white font-medium text-sm px-2">
                            Heading 1
                        </button>
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
                            <ChevronDown size={18} />
                        </button>
                    </div>
                    <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 p-1 shadow-sm">
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300" title="Link">
                            <Link size={18} />
                        </button>
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300" title="Image">
                            <Image size={18} />
                        </button>
                        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300" title="List">
                            <List size={18} />
                        </button>
                    </div>
                    <div className="flex-1"></div>
                    <button className="text-primary text-sm font-medium hover:underline">Plain Text</button>
                </div>
                <div className="p-6 min-h-[400px]">
                    <textarea
                        className="w-full h-full min-h-[400px] border-0 focus:ring-0 bg-transparent text-text-main dark:text-gray-200 resize-none font-sans outline-none"
                        placeholder="Start writing your campaign content here..."
                        defaultValue={`Dear Partners,
We are thrilled to announce the launch of our new Smart-Pole Series X5. This new line features integrated environmental sensors and a modular design that reduces installation time by 30%.
Key Benefits:
- 50% Energy Savings with Adaptive Dimming
- Solar-Ready Top Mounts
- Seamless 5G Small Cell Integration
Learn more about how the Series X5 can transform your municipal infrastructure projects.
Best regards,
The Techno Tower Team`}
                    ></textarea>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 p-3 bg-gray-50/50 dark:bg-gray-800/30 flex justify-between items-center text-xs text-text-muted">
                    <span>Word count: 76</span>
                    <span>Last saved: 2 minutes ago</span>
                </div>
            </div>
        </section>
    );
};

export default CampaignEditor;
