import { MailWarning, MoreVertical, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewEnquiries = () => {
    return (
        <div className="bg-white dark:bg-[#2d2418] rounded-2xl border border-gray-100 dark:border-[#3e3223] shadow-sm overflow-hidden transition-all duration-300">
            <div className="p-6 border-b border-gray-50 dark:border-[#3e3223] flex justify-between items-center bg-gray-50/30 dark:bg-white/5">
                <h3 className="font-black text-sm text-text-main dark:text-white flex items-center gap-2 uppercase tracking-widest">
                    <MailWarning className="text-primary" size={20} />
                    Active Enquiries
                </h3>
                <Link className="text-[10px] uppercase font-black text-primary hover:text-primary-dark transition-colors flex items-center gap-1.5" to="/admin/enquiries">
                    Expand Inbox
                    <ExternalLink size={12} />
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                    <thead className="bg-gray-100/50 dark:bg-[#1c160d] text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest">
                        <tr>
                            <th className="px-6 py-4">Stakeholder</th>
                            <th className="px-6 py-4">Sector</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-[#3e3223]">
                        {[
                            { client: "City Municipal Corp", contact: "Rajesh Kumar", sector: "Smart Poles", status: "New", color: "red" },
                            { client: "Apex Builders Pvt Ltd", contact: "Sarah Jenkins", sector: "High Mast", status: "In Review", color: "amber" },
                            { client: "Tech Park Ventures", contact: "Admin Office", sector: "Maintenance", status: "Quoted", color: "green" }
                        ].map((enquiry, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-5">
                                    <div className="font-black text-text-main dark:text-white uppercase tracking-tight">{enquiry.client}</div>
                                    <div className="text-[10px] text-text-muted mt-0.5">{enquiry.contact}</div>
                                </td>
                                <td className="px-6 py-5">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-[#1c160d] text-text-main dark:text-gray-300 font-bold border border-gray-200 dark:border-[#3e3223]">
                                        {enquiry.sector}
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-${enquiry.color}-500/10 text-${enquiry.color}-500 text-[10px] font-black uppercase tracking-tighter border border-${enquiry.color}-500/20`}>
                                        <span className={`size-1 rounded-full bg-${enquiry.color}-500 ${enquiry.status === 'New' ? 'animate-pulse' : ''}`}></span>
                                        {enquiry.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    <button className="p-2 text-gray-400 hover:text-primary transition-all rounded-lg hover:bg-primary/10">
                                        <MoreVertical size={18} />
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

export default NewEnquiries;
