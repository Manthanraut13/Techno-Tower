
import TenderRow from './TenderRow';

const TenderList = () => {
    const tenders = [
        {
            id: 'TND-2023-089',
            category: 'Manufacturing',
            title: 'Smart City Pole Phase II Supply',
            authority: 'Municipal Corporation',
            authorityType: 'municipal',
            location: 'Hyderabad, Telangana',
            deadlineText: '2 Days Left',
            deadlineDate: 'Oct 28, 2024',
            status: 'Applied',
            urgent: true
        },
        {
            id: 'TND-2023-042',
            category: 'Installation',
            title: 'Highway 44 Illumination Project',
            authority: 'National Highways Auth.',
            authorityType: 'highway',
            location: 'New Delhi, India',
            deadlineText: 'Closed',
            deadlineDate: 'Sep 15, 2024',
            status: 'Won',
            urgent: false
        },
        {
            id: 'TND-2023-015',
            category: 'Supply',
            title: 'Metro Station Decorative Poles',
            authority: 'Metro Rail Corp.',
            authorityType: 'rail',
            location: 'Bangalore, Karnataka',
            deadlineText: 'Closed',
            deadlineDate: 'Aug 30, 2024',
            status: 'Lost',
            urgent: false
        },
        {
            id: 'TND-2023-112',
            category: 'Turnkey',
            title: 'High Mast Lighting - Sports Complex',
            authority: 'State Sports Authority',
            authorityType: 'sports',
            location: 'Pune, Maharashtra',
            deadlineText: '12 Days Left',
            deadlineDate: 'Nov 08, 2024',
            status: 'Drafting',
            urgent: false
        }
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-xs font-bold text-text-muted dark:text-gray-500 uppercase tracking-wider">
                <div className="col-span-4">Tender Details</div>
                <div className="col-span-3">Authority / Location</div>
                <div className="col-span-2">Deadline</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1 text-right">Actions</div>
            </div>
            {tenders.map((tender, index) => (
                <TenderRow key={tender.id} tender={tender} delayClass={`delay-${(index + 1) * 100}`} />
            ))}

            <div className="flex items-center justify-between mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                <span className="text-sm text-text-muted dark:text-gray-400">Showing <span className="font-bold text-text-main dark:text-white">1-4</span> of <span className="font-bold text-text-main dark:text-white">12</span> tenders</span>
                <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-text-muted hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50" disabled>Previous</button>
                    <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-text-muted hover:bg-gray-50 dark:hover:bg-gray-800">Next</button>
                </div>
            </div>
        </div>
    );
};

export default TenderList;
