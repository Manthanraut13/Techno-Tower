
import { Calendar, LayoutGrid, Edit, Trash2 } from 'lucide-react';

const ProjectItem = ({ project }) => {
    return (
        <div className="p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="w-full sm:w-24 h-24 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200 relative">
                    <img alt="Project Thumbnail" className="w-full h-full object-cover" src={project.image} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-bold text-text-main dark:text-white truncate">{project.title}</h4>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${project.status === 'Published'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                            }`}>
                            {project.status}
                        </span>
                    </div>
                    <p className="text-sm text-text-muted dark:text-gray-400 line-clamp-1 mb-2">{project.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>Added {project.dateAdded}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <LayoutGrid size={14} />
                            <span>{project.category}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                    <button className="flex-1 sm:flex-none p-2 rounded-lg border border-gray-200 text-gray-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all" title="Edit">
                        <Edit size={20} />
                    </button>
                    <button className="flex-1 sm:flex-none p-2 rounded-lg border border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-500 hover:bg-red-50 transition-all" title="Delete">
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
