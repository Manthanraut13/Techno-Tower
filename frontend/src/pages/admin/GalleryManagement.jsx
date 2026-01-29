import React, { useState } from 'react';
import { Image as ImageIcon, Upload, Trash2, CheckCircle, X, Plus, Filter, Grid, List, Layers, MoreVertical } from 'lucide-react';

const GalleryManagement = () => {
    const [view, setView] = useState('grid');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'High Mast', 'Smart Poles', 'Urban', 'Stadium', 'Industrial'];

    const images = [
        { id: 1, url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFcBtpsb-cTi_vsYIB9fuyNybHOtvagQWNlvs6OtfqKfS_SWuiPhLIZALRUx4WT3ZaqxkAotW70egSbV1Md_29k2efygzKNVX_u1c79Afr4OG0WJ6_Y7d0bP2CRuerIDuznZP1WV84nmq08FMkg04Hi4vDGWiphnHq9BYo4CKWMZ7XyMG546AgSTsc3eZChigykvfn6bg23nuxbGIp9kcUjNKMM-hbS8qYT-1Pv12uqoaNE-_ZqBofG9OCzMS4NlKun-c0yHBshJHR", title: "Smart Pole Deployment", category: "Smart Poles", date: "2023-12-01" },
        { id: 2, url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLwTHMYqsEMkTBg4pKAs39NcJOnGpsVCpSHCvAWuxCZhmDo3RtPJQa-U1EQvfylxkUampHlXr-Q3qgAe7pgReiVVBVSp4_6dLAtXxUGAYlzgEXLcGB2ngBC5c6GyRFDc3zGJFYrgxoSa_A0zz2iDCX9i58RnoTTcrVkGqaNsYx-WcloEeTK4L1n0zoJ_calk5A2ZL-usaeAtbj7Ol1-dx0ObppVc0_UwkhcWMz1LNYKudJSiN7gJIIModrrYov4PN2NIWrAS0fnV0C", title: "Stadium Lighting Unit", category: "Stadium", date: "2023-11-25" },
        { id: 3, url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwy3aN3_YCE3qalyKs0mUK_hich7hVi3RSlYQ6LftPmmYBwHMciLE0oSNDioLzZE3HE_fRI_qJ0l8eIVdcKQdR8Aic8wnQ3ZKH1uhGDexD77uiU6Nzoy8qcK-3zmH8nzKcKQJKyaBmt7savk0G1p7yI7QIFcAhj6hyFUgZxVe_d5pgBi5HZuM2Rl98Ypvw1TnyVfm3zfTEh_vtOAyIoZkRePThTqHbNcDJNElYReMpsm-LVDGCsVGeu16tVl6WzHIWsnBdpMZSuOw_", title: "Urban Heritage Installation", category: "Urban", date: "2023-11-15" },
        { id: 4, url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVgSSRE8g1Vkn7qamWH95nDiaudWMttKxfZ6HIMogjPF87Fkb46xod7WljP-AnuMDFRH7Wae2_lgr179SlM469cEMIE1rZthU9nOLdsjcVs6V9GJOhL8Y1zUmh6plIu3fJbVfGs3Dj2n8w-vRl6YdVxnHUPId-EgGRrcnyzN_Z5smSWC2yWMZ0h-VmOU4btPkxtKy7zISDK7HSAQUyqXP-K1esUJ_Taopa_IWC_8Fj9iOpo1xKYZ1fY7d5CPtXX45uk3XSJix0jS5F", title: "Industrial Yard Towers", category: "Industrial", date: "2023-10-30" },
    ];

    return (
        <div className="animate-fade-in-up">
            {/* Header section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                            <ImageIcon size={18} />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Media Asset Management</span>
                    </div>
                    <h2 className="text-3xl font-black text-text-main dark:text-white uppercase tracking-tight">Gallery Archives</h2>
                    <p className="text-xs text-text-muted dark:text-gray-500 font-bold mt-1 uppercase tracking-widest">
                        Storage Utilization: <span className="text-primary">42% (2.1GB / 5GB)</span> | 448 Total Assets
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-primary text-text-main text-sm font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(244,168,37,0.2)] hover:shadow-[0_0_30px_rgba(244,168,37,0.4)] hover:-translate-y-0.5">
                        <Upload size={18} />
                        Sync New Media
                    </button>
                </div>
            </div>

            {/* Filters and Controls */}
            <div className="bg-white dark:bg-[#2d2418] rounded-2xl border border-gray-100 dark:border-[#3e3223] shadow-sm mb-8 overflow-hidden">
                <div className="p-6 flex flex-wrap gap-6 justify-between items-center">
                    <div className="flex items-center gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${selectedCategory === cat
                                        ? 'bg-primary text-text-main border-primary'
                                        : 'bg-white dark:bg-[#1c160d] text-text-muted dark:text-gray-500 border-gray-100 dark:border-[#3e3223] hover:border-primary/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-[#1c160d] rounded-xl border border-gray-200 dark:border-[#3e3223]">
                        <button
                            onClick={() => setView('grid')}
                            className={`p-2 rounded-lg transition-all ${view === 'grid' ? 'bg-white dark:bg-[#2d2418] text-primary shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <Grid size={18} />
                        </button>
                        <button
                            onClick={() => setView('list')}
                            className={`p-2 rounded-lg transition-all ${view === 'list' ? 'bg-white dark:bg-[#2d2418] text-primary shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Gallery Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {images.map((img) => (
                    <div key={img.id} className="group relative bg-white dark:bg-[#2d2418] rounded-2xl border border-gray-100 dark:border-[#3e3223] overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(244,168,37,0.1)] hover:-translate-y-1">
                        <div className="aspect-video relative overflow-hidden">
                            <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-white/20 hover:bg-white text-white hover:text-text-main h-10 rounded-xl backdrop-blur-md transition-all flex items-center justify-center">
                                        <X size={18} className="mr-2" />
                                        Drop
                                    </button>
                                    <button className="w-10 h-10 bg-primary text-text-main rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                                        <Layers size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xs font-black text-text-main dark:text-white uppercase tracking-tighter truncate max-w-[150px]">{img.title}</h4>
                                <span className="text-[8px] font-black text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded uppercase tracking-widest">{img.category}</span>
                            </div>
                            <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-text-muted dark:text-gray-500 italic">
                                <span>LOGGED: {img.date}</span>
                                <MoreVertical size={14} className="hover:text-primary cursor-pointer" />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Upload Placeholder */}
                <div className="aspect-video sm:aspect-auto flex flex-col items-center justify-center bg-gray-50/50 dark:bg-white/5 border-2 border-dashed border-gray-200 dark:border-[#3e3223] rounded-2xl p-6 group cursor-pointer hover:border-primary/50 transition-all">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-3">
                        <Plus size={24} />
                    </div>
                    <span className="text-[10px] font-black text-text-muted dark:text-gray-400 uppercase tracking-widest">Append Archive</span>
                </div>
            </div>
        </div>
    );
};

export default GalleryManagement;
