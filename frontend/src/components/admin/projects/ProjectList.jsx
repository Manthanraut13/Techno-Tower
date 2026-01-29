import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, Hash } from 'lucide-react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ onEdit }) => {
    const projects = [
        {
            id: 1,
            title: "Highway 44 Smart Lighting",
            status: "Published",
            description: "Installation of 500+ smart sensor-enabled street poles across 45km.",
            dateAdded: "Oct 12, 2023",
            category: "Infrastructure",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFcBtpsb-cTi_vsYIB9fuyNybHOtvagQWNlvs6OtfqKfS_SWuiPhLIZALRUx4WT3ZaqxkAotW70egSbV1Md_29k2efygzKNVX_u1c79Afr4OG0WJ6_Y7d0bP2CRuerIDuznZP1WV84nmq08FMkg04Hi4vDGWiphnHq9BYo4CKWMZ7XyMG546AgSTsc3eZChigykvfn6bg23nuxbGIp9kcUjNKMM-hbS8qYT-1Pv12uqoaNE-_ZqBofG9OCzMS4NlKun-c0yHBshJHR"
        },
        {
            id: 2,
            title: "City Sports Complex High Mast",
            status: "Draft",
            description: "Engineering and erection of 40m high mast poles with LED floodlighting.",
            dateAdded: "Sep 28, 2023",
            category: "Stadium",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLwTHMYqsEMkTBg4pKAs39NcJOnGpsVCpSHCvAWuxCZhmDo3RtPJQa-U1EQvfylxkUampHlXr-Q3qgAe7pgReiVVBVSp4_6dLAtXxUGAYlzgEXLcGB2ngBC5c6GyRFDc3zGJFYrgxoSa_A0zz2iDCX9i58RnoTTcrVkGqaNsYx-WcloEeTK4L1n0zoJ_calk5A2ZL-usaeAtbj7Ol1-dx0ObppVc0_UwkhcWMz1LNYKudJSiN7gJIIModrrYov4PN2NIWrAS0fnV0C"
        },
        {
            id: 3,
            title: "Downtown Heritage Poles",
            status: "Published",
            description: "Custom cast iron decorative poles to match the heritage aesthetic.",
            dateAdded: "Aug 15, 2023",
            category: "Urban",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwy3aN3_YCE3qalyKs0mUK_hich7hVi3RSlYQ6LftPmmYBwHMciLE0oSNDioLzZE3HE_fRI_qJ0l8eIVdcKQdR8Aic8wnQ3ZKH1uhGDexD77uiU6Nzoy8qcK-3zmH8nzKcKQJKyaBmt7savk0G1p7yI7QIFcAhj6hyFUgZxVe_d5pgBi5HZuM2Rl98Ypvw1TnyVfm3zfTEh_vtOAyIoZkRePThTqHbNcDJNElYReMpsm-LVDGCsVGeu16tVl6WzHIWsnBdpMZSuOw_"
        },
        {
            id: 4,
            title: "Metro Line 5 Phase II",
            status: "Published",
            description: "Electrification and signal pole installation for 12 new stations.",
            dateAdded: "Jul 22, 2023",
            category: "Transport",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVgSSRE8g1Vkn7qamWH95nDiaudWMttKxfZ6HIMogjPF87Fkb46xod7WljP-AnuMDFRH7Wae2_lgr179SlM469cEMIE1rZthU9nOLdsjcVs6V9GJOhL8Y1zUmh6plIu3fJbVfGs3Dj2n8w-vRl6YdVxnHUPId-EgGRrcnyzN_Z5smSWC2yWMZ0h-VmOU4btPkxtKy7zISDK7HSAQUyqXP-K1esUJ_Taopa_IWC_8Fj9iOpo1xKYZ1fY7d5CPtXX45uk3XSJix0jS5F"
        }
    ];

    return (
        <div className="bg-white dark:bg-[#2d2418] rounded-2xl border border-gray-100 dark:border-[#3e3223] shadow-sm overflow-hidden animate-fade-in-up">
            <div className="p-6 border-b border-gray-50 dark:border-[#3e3223] bg-gray-50/30 dark:bg-white/5 flex flex-wrap gap-6 justify-between items-center">
                <div className="relative flex-1 min-w-[280px] max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                    <input
                        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] rounded-xl text-xs font-bold text-text-main dark:text-white placeholder:text-gray-400 focus:border-primary transition-all outline-none"
                        placeholder="SCAN VAULT FOR INSTANCES..."
                        type="text"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-black text-text-muted dark:text-gray-500 uppercase tracking-widest">
                        <SlidersHorizontal size={14} />
                        <span>Sequence:</span>
                    </div>
                    <select className="bg-transparent text-xs font-black text-text-main dark:text-white uppercase tracking-widest outline-none cursor-pointer hover:text-primary transition-colors">
                        <option>Deployment Log (Newest)</option>
                        <option>Identifier A-Z</option>
                        <option>Operational Status</option>
                    </select>
                </div>
            </div>

            <div className="divide-y divide-gray-50 dark:divide-[#3e3223]">
                {projects.map(project => (
                    <ProjectItem key={project.id} project={project} onEdit={onEdit} />
                ))}
            </div>

            <div className="p-6 border-t border-gray-50 dark:border-[#3e3223] bg-gray-50/30 dark:bg-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted dark:text-gray-500">
                    <Hash size={14} className="text-primary" />
                    <span>Mapping <span className="text-text-main dark:text-white">1 - 04</span> OF <span className="text-text-main dark:text-white">124</span> Total Instances</span>
                </div>

                <div className="flex items-center gap-3">
                    <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-[#3e3223] bg-white dark:bg-[#1c160d] text-gray-400 hover:text-primary transition-all disabled:opacity-30" disabled>
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-[#1c160d] rounded-xl border border-gray-200 dark:border-[#3e3223]">
                        <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-text-main font-black text-xs">1</button>
                        <button className="h-8 w-8 flex items-center justify-center rounded-lg text-text-muted dark:text-gray-500 hover:text-primary transition-colors font-black text-xs">2</button>
                        <button className="h-8 w-8 flex items-center justify-center rounded-lg text-text-muted dark:text-gray-500 hover:text-primary transition-colors font-black text-xs">3</button>
                    </div>

                    <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-[#3e3223] bg-white dark:bg-[#1c160d] text-gray-400 hover:text-primary transition-all">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
