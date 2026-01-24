import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectMilestones = () => {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="font-bold text-lg text-text-main dark:text-white flex items-center gap-2">
                    <Construction className="text-primary" size={20} />
                    Project Milestones
                </h3>
                <Link className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors" to="#">All Projects</Link>
            </div>
            <div className="p-6 grid gap-6">

                {/* NH-44 */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-main dark:text-gray-300 font-bold text-xs">NH</div>
                            <div>
                                <h4 className="text-sm font-bold text-text-main">NH-44 Highway Lighting</h4>
                                <p className="text-xs text-text-muted">Phase 2: Installation</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-text-main">75%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full relative" style={{ width: '75%' }}>
                            <div className="absolute right-0 -top-1 size-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Smart City */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-main dark:text-gray-300 font-bold text-xs">SC</div>
                            <div>
                                <h4 className="text-sm font-bold text-text-main">Smart City Sensor Grid</h4>
                                <p className="text-xs text-text-muted">Phase 1: Manufacturing</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-text-main">42%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className="bg-gray-800 dark:bg-gray-600 h-2 rounded-full relative" style={{ width: '42%' }}>
                            <div className="absolute right-0 -top-1 size-4 bg-white dark:bg-gray-900 border-2 border-gray-800 dark:border-gray-600 rounded-full shadow-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Stadium */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-main dark:text-gray-300 font-bold text-xs">ST</div>
                            <div>
                                <h4 className="text-sm font-bold text-text-main">Stadium Floodlights</h4>
                                <p className="text-xs text-text-muted">Phase 3: Testing</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-text-main">90%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full relative" style={{ width: '90%' }}>
                            <div className="absolute right-0 -top-1 size-4 bg-white dark:bg-gray-900 border-2 border-green-600 rounded-full shadow-sm"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectMilestones;
