import { Eye } from 'lucide-react';

const DataTable = () => {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-text-main dark:text-white">Recent Enquiries</h3>
                <button className="text-sm text-primary font-semibold hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-xs text-text-muted border-b border-gray-100 dark:border-gray-800">
                            <th className="py-3 px-2 font-semibold uppercase tracking-wider">ID</th>
                            <th className="py-3 px-2 font-semibold uppercase tracking-wider">Client Name</th>
                            <th className="py-3 px-2 font-semibold uppercase tracking-wider">Subject</th>
                            <th className="py-3 px-2 font-semibold uppercase tracking-wider">Date</th>
                            <th className="py-3 px-2 font-semibold uppercase tracking-wider">Status</th>
                            <th className="py-3 px-2 font-semibold uppercase tracking-wider text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {[
                            { id: '#ENQ-204', client: 'Metro Construction Ltd.', subject: 'High Mast Pole Quotation', date: 'Oct 24, 2023', status: 'New', statusColor: 'bg-green-100 text-green-800' },
                            { id: '#ENQ-203', client: 'City Municipal Corp', subject: 'Smart City Project Tender', date: 'Oct 23, 2023', status: 'In Review', statusColor: 'bg-blue-100 text-blue-800' },
                            { id: '#ENQ-202', client: 'Global Infra Partners', subject: 'Dealer Application', date: 'Oct 22, 2023', status: 'Pending', statusColor: 'bg-amber-100 text-amber-800' },
                        ].map((row, index) => (
                            <tr key={index} className="border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                <td className="py-4 px-2 font-mono text-gray-400">{row.id}</td>
                                <td className="py-4 px-2 font-medium text-text-main dark:text-gray-200">{row.client}</td>
                                <td className="py-4 px-2 text-text-muted dark:text-gray-400">{row.subject}</td>
                                <td className="py-4 px-2 text-text-muted dark:text-gray-400">{row.date}</td>
                                <td className="py-4 px-2">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.statusColor}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="py-4 px-2 text-right">
                                    <button className="text-gray-400 hover:text-primary transition-colors">
                                        <Eye size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
