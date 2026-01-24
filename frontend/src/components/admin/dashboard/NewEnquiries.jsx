import { MailWarning, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewEnquiries = () => {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="font-bold text-lg text-text-main dark:text-white flex items-center gap-2">
                    <MailWarning className="text-primary" size={20} />
                    New Enquiries
                </h3>
                <Link className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors" to="#">View All</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 dark:bg-gray-900 text-text-muted font-medium uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Client / Company</th>
                            <th className="px-6 py-4">Requirement</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="font-bold text-text-main dark:text-white">City Municipal Corp</div>
                                <div className="text-xs text-text-muted">Contact: Mr. Rajesh Kumar</div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
                                    Smart Poles
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold border border-red-100">
                                    <span className="size-1.5 rounded-full bg-red-600 animate-pulse"></span> New
                                </span>
                            </td>
                            <td className="px-6 py-4 text-text-muted">Oct 24, 2024</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-primary transition-colors"><MoreVertical size={20} /></button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="font-bold text-text-main dark:text-white">Apex Builders Pvt Ltd</div>
                                <div className="text-xs text-text-muted">Contact: Sarah Jenkins</div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-semibold">
                                    High Mast
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold border border-yellow-100">
                                    In Review
                                </span>
                            </td>
                            <td className="px-6 py-4 text-text-muted">Oct 23, 2024</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-primary transition-colors"><MoreVertical size={20} /></button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="font-bold text-text-main dark:text-white">Tech Park Ventures</div>
                                <div className="text-xs text-text-muted">Contact: Admin Office</div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-semibold">
                                    Maintenance
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                                    Quoted
                                </span>
                            </td>
                            <td className="px-6 py-4 text-text-muted">Oct 22, 2024</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-primary transition-colors"><MoreVertical size={20} /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewEnquiries;
