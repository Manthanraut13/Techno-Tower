
const FilterButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all ${active
            ? 'bg-primary text-text-main shadow-sm hover:shadow-md'
            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary group'
            }`}
    >
        <span className={`text-sm ${active ? 'font-bold' : 'font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary'}`}>
            {label}
        </span>
    </button>
);

const GalleryFilters = ({ activeFilter, setActiveFilter }) => {
    const filters = ['All', 'Manufacturing', 'Installation', 'Machinery', 'Completed Projects'];

    return (
        <div className="w-full border-b border-gray-200 dark:border-gray-800 sticky top-[73px] z-40 bg-background-surface dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-x-auto no-scrollbar">
                <div className="flex gap-3 min-w-max">
                    {filters.map((filter) => (
                        <FilterButton
                            key={filter}
                            label={filter}
                            active={activeFilter === filter}
                            onClick={() => setActiveFilter(filter)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryFilters;
