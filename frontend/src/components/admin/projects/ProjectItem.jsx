import { Calendar, LayoutGrid, Edit, Trash2, ExternalLink } from 'lucide-react';

const ProjectItem = ({ project, onEdit }) => {
    return (
        <div className="p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group border-b border-gray-50 dark:border-[#3e3223] last:border-0 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
                <div className="w-full md:w-32 h-32 md:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] shadow-inner group-hover:border-primary/30 transition-all">
                    <img
                        alt="Project Deployment"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        src={project.image}
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-black text-text-main dark:text-white truncate uppercase tracking-tight group-hover:text-primary transition-colors">
                            {project.title}
                        </h4>
                        <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] border ${project.status === 'Published'
                                ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                : 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                            }`}>
                            {project.status === 'Published' ? 'Broadcast Active' : 'Instance Local'}
                        </span>
                    </div>

                    <p className="text-xs text-text-muted dark:text-gray-500 line-clamp-2 mb-3 font-medium max-w-2xl leading-relaxed uppercase tracking-tighter italic">
                        {project.description}
                    </p>

                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-primary" />
                            <span>System Log: {project.dateAdded}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <LayoutGrid size={14} className="text-primary" />
                            <span>Sector: {project.category}</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <button
                        onClick={() => onEdit(project)}
                        className="flex-1 md:flex-none h-11 w-11 flex items-center justify-center rounded-xl border border-gray-200 dark:border-[#3e3223] bg-white dark:bg-[#1c160d] text-gray-400 hover:text-primary hover:border-primary/50 transition-all shadow-sm group/btn"
                        title="Modify Instance"
                    >
                        <Edit size={18} className="group-hover/btn:scale-110 transition-transform" />
                    </button>
                    <button className="flex-1 md:flex-none h-11 w-11 flex items-center justify-center rounded-xl border border-gray-200 dark:border-[#3e3223] bg-white dark:bg-[#1c160d] text-gray-400 hover:text-red-500 hover:border-red-500/50 transition-all shadow-sm group/btn" title="Terminate Instance">
                        <Trash2 size={18} className="group-hover/btn:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Hover Accent */}
            <div className="absolute left-0 top-0 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-full"></div>
        </div>
    );
};

export default ProjectItem;
