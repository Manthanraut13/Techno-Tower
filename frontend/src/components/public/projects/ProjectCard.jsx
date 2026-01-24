
import { MapPin, Calendar, HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const isCompleted = project.status === 'Completed';

    return (
        <article className="group bg-white dark:bg-[#2a2216] rounded-xl overflow-hidden border border-[#e8dfce] dark:border-gray-800 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-56 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${project.image}")` }}
                />
                <div className={`absolute top-3 right-3 backdrop-blur px-3 py-1 rounded-full text-xs font-bold border ${isCompleted
                        ? 'bg-white/90 dark:bg-black/80 text-[#1c160d] dark:text-[#f4a825] border-gray-100 dark:border-gray-700'
                        : 'bg-[#f4a825]/20 dark:bg-[#f4a825]/10 text-[#f4a825] border-[#f4a825]/20'
                    }`}>
                    {project.status}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#1c160d] dark:text-white mb-1 group-hover:text-[#f4a825] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#f4a825] uppercase tracking-wide">
                        {project.authority}
                    </p>
                </div>
                <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-start gap-3 text-[#4b3c2a] dark:text-gray-300">
                        <MapPin size={20} className="text-gray-400 mt-0.5" />
                        <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-start gap-3 text-[#4b3c2a] dark:text-gray-300">
                        <Calendar size={20} className="text-gray-400 mt-0.5" />
                        <span className="text-sm">{project.date}</span>
                    </div>
                    <div className="flex items-start gap-3 text-[#4b3c2a] dark:text-gray-300">
                        <HardHat size={20} className="text-gray-400 mt-0.5" />
                        <span className="text-sm">{project.description}</span>
                    </div>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <Link
                        to={project.link || "#"}
                        className="text-sm font-bold text-[#1c160d] dark:text-white group-hover:underline decoration-[#f4a825] decoration-2 underline-offset-4"
                    >
                        {isCompleted ? 'View Case Study' : 'View Progress'}
                    </Link>
                    <ArrowRight size={20} className="text-[#f4a825] group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
