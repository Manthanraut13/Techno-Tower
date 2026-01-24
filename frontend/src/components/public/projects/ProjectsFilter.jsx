
const ProjectsFilter = ({ activeCategory, setActiveCategory, totalProjects, showingCount }) => {
    const categories = ['All Projects', 'Smart Lighting', 'Poles', 'Installation', 'Maintenance'];

    return (
        <div className="w-full bg-[#f8f7f5] dark:bg-[#221b10]">
            <div className="mx-auto max-w-7xl px-4 md:px-10 pb-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-[#e8dfce] dark:border-gray-800 pb-4">
                    <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`flex h-9 items-center justify-center px-4 rounded-full text-sm transition-all ${activeCategory === category
                                        ? 'bg-[#f4a825] text-[#1c160d] font-bold shadow-sm ring-2 ring-offset-2 ring-[#f4a825] dark:ring-offset-[#221b10]'
                                        : 'bg-[#f4efe7] hover:bg-[#eaddc5] text-[#1c160d] font-medium dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="text-sm text-[#4b3c2a] dark:text-gray-400 font-medium">
                        Showing <span className="text-[#1c160d] dark:text-white font-bold">{showingCount}</span> of <span className="text-[#1c160d] dark:text-white font-bold">{totalProjects}</span> projects
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsFilter;
