
import { Search } from 'lucide-react';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
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
        <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden animate-fade-in-up delay-200">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-white/5 flex flex-wrap gap-4 justify-between items-center">
                <div className="relative flex-1 min-w-[200px] max-w-sm">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={18} className="text-gray-400" />
                    </span>
                    <input className="w-full pl-9 py-2 rounded-lg border-gray-200 bg-white dark:bg-black/20 dark:border-gray-600 text-sm focus:border-primary focus:ring-primary" placeholder="Search projects..." type="text" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-text-muted dark:text-gray-500">Sort by:</span>
                    <select className="text-sm border-none bg-transparent font-medium text-text-main focus:ring-0 p-0 pr-6 cursor-pointer dark:text-white">
                        <option>Date Added (Newest)</option>
                        <option>Alphabetical</option>
                        <option>Status</option>
                    </select>
                </div>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {projects.map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-white/5 flex items-center justify-between">
                <span className="text-sm text-text-muted dark:text-gray-400">Showing 1 to 4 of 124 entries</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 rounded bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300" disabled>Prev</button>
                    <button className="px-3 py-1 rounded bg-primary text-text-main font-bold text-sm shadow-sm">1</button>
                    <button className="px-3 py-1 rounded bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">2</button>
                    <button className="px-3 py-1 rounded bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">3</button>
                    <button className="px-3 py-1 rounded bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
