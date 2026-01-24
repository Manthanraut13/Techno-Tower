import { Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import EnquiryListItem from './EnquiryListItem';

const EnquiryList = () => {
    return (
        <div className="col-span-1 lg:col-span-9">
            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-950 rounded-t-xl border border-gray-100 dark:border-gray-700 border-b-0 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 text-text-main dark:text-white placeholder-gray-400 outline-none"
                        placeholder="Search enquiries..."
                        type="text"
                    />
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button className="p-2 text-[#6b5d4d] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="Filter">
                        <Filter size={20} />
                    </button>
                    <button className="p-2 text-[#6b5d4d] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="Sort">
                        <ArrowUpDown size={20} />
                    </button>
                    <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
                    <span className="text-xs text-text-muted">1-10 of 45</span>
                    <div className="flex gap-1">
                        <button className="p-1 text-text-muted hover:text-primary disabled:opacity-50">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="p-1 text-text-muted hover:text-primary">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="bg-white dark:bg-[#1e1e1e] rounded-b-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    <EnquiryListItem
                        initials="MC" initialsBg="bg-primary/10" initialsColor="text-primary"
                        sender="Municipal Corporation of Delhi"
                        time="10:45 AM"
                        subject="Tender Inquiry: High Mast Poles for Sector 5"
                        preview="Requesting technical specifications and compliance docs for the upcoming..."
                        badges={[
                            { label: "Govt", classes: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800" },
                            { label: "New", classes: "bg-primary/10 text-primary-dark border-primary/20" }
                        ]}
                        isUnread={true}
                    />
                    <EnquiryListItem
                        initials="LT" initialsBg="bg-primary-dark" initialsColor="text-white"
                        sender="L&T Infrastructure"
                        time="Yesterday"
                        subject="Bulk Order: Smart City Project Phase 2"
                        preview="Following up on our discussion regarding the smart lighting..."
                        badges={[
                            { label: "Tender", classes: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800" },
                            { label: "Contacted", classes: "bg-blue-50 text-blue-600 border-blue-100" }
                        ]}
                        isStarred={true}
                        isUnread={false}
                    />
                    <EnquiryListItem
                        initials="GS" initialsBg="bg-gray-200" initialsColor="text-gray-600"
                        sender="Green Soul Estates"
                        time="Oct 24"
                        subject="Installation: Residential Complex A-Wing"
                        preview="The installation has been completed successfully. Please send invoice."
                        badges={[
                            { label: "Install", classes: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800" },
                            { label: "Closed", classes: "bg-gray-800 text-white border-gray-800" }
                        ]}
                        isUnread={false}
                    />
                    <EnquiryListItem
                        initials="RJ" initialsBg="bg-blue-100" initialsColor="text-blue-600"
                        sender="Rajesh Infra Developers"
                        time="Oct 23"
                        subject="Quote Request: Decorative Poles"
                        preview="Looking for cast iron decorative poles for a heritage project in Jaipur."
                        badges={[
                            { label: "Commercial", classes: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600" },
                            { label: "New", classes: "bg-primary/10 text-primary-dark border-primary/20" }
                        ]}
                        isUnread={true}
                    />
                    <EnquiryListItem
                        initials="SC" initialsBg="bg-purple-100" initialsColor="text-purple-600"
                        sender="Smart City Pune"
                        time="Oct 20"
                        subject="Sensor Integration API Docs"
                        preview="Can you share the API documentation for the environment sensors..."
                        badges={[
                            { label: "Govt", classes: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800" },
                            { label: "Contacted", classes: "bg-blue-50 text-blue-600 border-blue-100" }
                        ]}
                        isUnread={false}
                    />
                </div>

                {/* Load More */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 flex justify-center">
                    <button className="text-sm font-medium text-text-muted hover:text-primary transition-colors flex items-center gap-1">
                        Load more enquiries
                        <ChevronDown size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnquiryList;
