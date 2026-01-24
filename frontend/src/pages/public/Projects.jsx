
import { useState } from 'react';
import ProjectsHero from '../../components/public/projects/ProjectsHero';
import ProjectsFilter from '../../components/public/projects/ProjectsFilter';
import ProjectsGrid from '../../components/public/projects/ProjectsGrid';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All Projects');

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
            <ProjectsHero />
            <ProjectsFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                totalProjects={48}
                showingCount={12}
            />
            <ProjectsGrid />
        </div>
    );
};

export default Projects;
