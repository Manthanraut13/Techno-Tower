import React, { useState } from 'react';
import { Filter, Plus, Construction, Download, SlidersHorizontal } from 'lucide-react';
import ProjectStats from '../../components/admin/projects/ProjectStats';
import CreateProjectForm from '../../components/admin/projects/CreateProjectForm';
import ProjectList from '../../components/admin/projects/ProjectList';

const ProjectManagement = () => {
    const [editingProject, setEditingProject] = useState(null);

    const handleEdit = (project) => {
        setEditingProject(project);
    };

    const handleCancelEdit = () => {
        setEditingProject(null);
    };

    return (
        <div className="animate-fade-in-up">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                            <Construction size={18} />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">System Development & Ops</span>
                    </div>
                    <h2 className="text-3xl font-black text-text-main dark:text-white uppercase tracking-tight">Project Lifecycle</h2>
                    <p className="text-xs text-text-muted dark:text-gray-500 font-bold mt-1 uppercase tracking-widest">
                        Active Deployments: <span className="text-primary">18 Critical</span> | 124 Total Managed
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white dark:bg-[#2d2418] border border-gray-200 dark:border-[#3e3223] text-sm font-black text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm uppercase tracking-widest">
                        <Download size={18} />
                        Export Log
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-primary text-text-main text-sm font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(244,168,37,0.2)] hover:shadow-[0_0_30px_rgba(244,168,37,0.4)] hover:-translate-y-0.5">
                        <Plus size={18} />
                        New Instance
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                <div className="xl:col-span-4 animate-fade-in-up delay-100">
                    <CreateProjectForm editingProject={editingProject} onCancel={handleCancelEdit} />
                </div>
                <div className="xl:col-span-8 space-y-8">
                    <ProjectStats />
                    <ProjectList onEdit={handleEdit} />
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;
