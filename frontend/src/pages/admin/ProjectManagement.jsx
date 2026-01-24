
import { Filter, Plus } from 'lucide-react';
import ProjectStats from '../../components/admin/projects/ProjectStats';
import CreateProjectForm from '../../components/admin/projects/CreateProjectForm';
import ProjectList from '../../components/admin/projects/ProjectList';

const ProjectManagement = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-fade-in-up">
                <div>
                    <h2 className="text-3xl font-bold text-text-main dark:text-white">Project Management</h2>
                    <p className="text-text-muted mt-1 dark:text-gray-400">Add, edit, and organize completed infrastructure projects.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-text-main hover:bg-gray-50 transition-all font-medium text-sm shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
                        <Filter size={20} />
                        Filter
                    </button>
                    <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-text-main transition-all font-bold text-sm shadow-md hover:shadow-lg">
                        <Plus size={20} />
                        Add New Project
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 animate-fade-in-up delay-100">
                    <CreateProjectForm />
                </div>
                <div className="lg:col-span-2 space-y-6">
                    <ProjectStats />
                    <ProjectList />
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;
