
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, number, title, description, delayClass }) => {
    return (
        <div className={`group flex flex-col h-full bg-white dark:bg-[#2a2216] rounded-2xl p-8 border border-[#e8dfce] dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up ${delayClass}`}>
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center justify-center size-14 rounded-xl bg-[#f4a825]/10 text-[#f4a825] group-hover:bg-[#f4a825] group-hover:text-white transition-colors duration-300">
                    <Icon size={32} />
                </div>
                <span className="text-[#e8dfce] dark:text-gray-700 group-hover:text-[#f4a825]/20 text-4xl font-black transition-colors duration-300 opacity-50 select-none">
                    {number}
                </span>
            </div>
            <h3 className="text-xl font-bold text-[#1c160d] dark:text-white mb-3">{title}</h3>
            <p className="text-[#4B5563] dark:text-gray-400 text-base leading-relaxed flex-grow">
                {description}
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                <a className="inline-flex items-center gap-2 text-sm font-bold text-[#f4a825] hover:text-[#d69018] transition-colors" href="#">
                    Learn more
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;
