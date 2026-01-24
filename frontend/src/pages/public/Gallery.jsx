import { useState } from 'react';
import GalleryHero from '../../components/public/gallery/GalleryHero';
import GalleryFilters from '../../components/public/gallery/GalleryFilters';
import GalleryGrid from '../../components/public/gallery/GalleryGrid';
import GalleryCTA from '../../components/public/gallery/GalleryCTA';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    return (
        <div className="flex-1 flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <GalleryHero />
            <GalleryFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <GalleryGrid />
            <GalleryCTA />
        </div>
    );
};

export default Gallery;
