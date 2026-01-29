import { Construction, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const MilestoneItem = ({ code, title, phase, progress, color }) => (
    <div className="flex flex-col gap-3 group">
        <div className="flex justify-between items-end">
            <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-gray-100 dark:bg-[#1c160d] border border-gray-200 dark:border-[#3e3223] flex items-center justify-center text-text-main dark:text-primary font-black text-[10px] tracking-tighter">
                    {code}
                </div>
                <div>
                    <h4 className="text-xs font-black text-text-main dark:text-gray-200 uppercase tracking-tight">{title}</h4>
                    <p className="text-[10px] text-text-muted dark:text-gray-500 font-bold uppercase tracking-widest mt-0.5">{phase}</p>
                </div>
            </div>
            <span className="text-xs font-black text-primary font-mono">{progress}%</span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-[#1c160d] rounded-full h-1.5 overflow-hidden">
            <div
                className={`h-full ${color || 'bg-primary'} shadow-[0_0_10px_rgba(244,168,37,0.3)] transition-all duration-1000 ease-out`}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    </div>
);

const ProjectMilestones = () => {
    return (
        <div className="bg-white dark:bg-[#2d2418] rounded-2xl border border-gray-100 dark:border-[#3e3223] shadow-sm overflow-hidden transition-all duration-300">
            <div className="p-6 border-b border-gray-50 dark:border-[#3e3223] flex justify-between items-center bg-gray-50/30 dark:bg-white/5">
                <h3 className="font-black text-sm text-text-main dark:text-white flex items-center gap-2 uppercase tracking-widest">
                    <Construction className="text-primary" size={20} />
                    System Deployment
                </h3>
                <Link className="text-[10px] uppercase font-black text-text-muted hover:text-primary transition-colors flex items-center gap-1.5" to="/admin/projects">
                    View Fleet
                    <Layers size={12} />
                </Link>
            </div>
            <div className="p-8 space-y-8">
                <MilestoneItem
                    code="NH44"
                    title="NH-44 Highway Lighting"
                    phase="Infield Installation"
                    progress={75}
                />
                <MilestoneItem
                    code="SMCT"
                    title="Smart City Sensor Grid"
                    phase="Hardware Sync"
                    progress={42}
                    color="bg-gray-400"
                />
                <MilestoneItem
                    code="STAD"
                    title="Stadium Floodlights"
                    phase="Optical Calibration"
                    progress={90}
                    color="bg-green-500"
                />
            </div>
        </div>
    );
};

export default ProjectMilestones;
