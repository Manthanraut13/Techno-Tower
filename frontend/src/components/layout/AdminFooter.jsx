import { TowerControl, Headset, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminFooter = () => {
    return (
        <footer className="bg-[#1c160d] text-white pt-12 pb-8 border-t border-gray-800 mt-auto">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-8 rounded bg-[#f4a825] text-[#1c160d]">
                                <TowerControl size={20} />
                            </div>
                            <h3 className="text-xl font-bold">Techno Tower</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Internal Admin System v2.4.1<br />
                            Restricted Access.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 rounded bg-gray-800 text-xs text-gray-400 border border-gray-700">ISO 9001:2015</span>
                            <span className="px-2 py-1 rounded bg-gray-800 text-xs text-gray-400 border border-gray-700">ISO 14001</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-500">System</h4>
                        <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                            <li><Link to="#" className="hover:text-[#f4a825] transition-colors">Knowledge Base</Link></li>
                            <li><Link to="#" className="hover:text-[#f4a825] transition-colors">System Status</Link></li>
                            <li><Link to="#" className="hover:text-[#f4a825] transition-colors">IT Support</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-500">Resources</h4>
                        <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                            <li><Link to="#" className="hover:text-[#f4a825] transition-colors">Brand Guidelines</Link></li>
                            <li><Link to="#" className="hover:text-[#f4a825] transition-colors">Product Catalogues (PDF)</Link></li>
                            <li><Link to="#" className="hover:text-[#f4a825] transition-colors">HR Portal</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-500">Support</h4>
                        <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-2">
                                <Headset className="text-[#f4a825]" size={18} />
                                <span>Helpdesk: Ext 4004</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="text-[#f4a825]" size={18} />
                                <span>admin.support@technotower.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Techno Tower Infrastructure Ltd. Confidential.</p>
                    <div className="flex gap-6 text-xs text-gray-600">
                        <Link to="#" className="hover:text-white">Security Policy</Link>
                        <Link to="#" className="hover:text-white">Access Log</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AdminFooter;
