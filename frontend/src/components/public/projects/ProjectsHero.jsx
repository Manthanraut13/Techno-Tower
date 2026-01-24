
import { Search } from 'lucide-react';

const ProjectsHero = () => {
    return (
        <div className="relative w-full bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-7xl px-4 md:px-10 py-8 md:py-12">
                <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 relative overflow-hidden"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCj6A2iO4hnNh67OEaC2CaMArC2GLwgGbWijULHp5SNcxZHZaoPmWcMd9MAKcTsfUQskmqPhB-pcF1d1RXDt56Rhm4gMnViW23LRWHLg9bn5Wii96G1yCcxJ5d0VOtjRUQVQ6CrHOGibVXBfl_38Jy89prA9xR80fy1vPDr-2LxaB01qyVCg-eQoPRsREQD3qOg-2VYnSOknGOtaVr-0SJ-Es0t2XGu7ce3PtVEGBMXqX2AAP4eOF_9dkWr4ChvkKqIuuWsaotO1rQN")`
                    }}>
                    <div className="flex flex-col gap-3 text-center z-10 max-w-2xl">
                        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                            Engineering Excellence
                        </h1>
                        <p className="text-gray-200 text-base md:text-lg font-normal leading-relaxed">
                            Delivering robust infrastructure solutions for cities of the future. Explore our portfolio of completed government and enterprise projects.
                        </p>
                    </div>
                    <div className="z-10 w-full max-w-[560px] mt-4">
                        <div className="flex w-full items-stretch rounded-lg h-14 bg-white shadow-lg overflow-hidden">
                            <div className="flex items-center justify-center pl-4 pr-2 text-gray-400">
                                <Search size={24} />
                            </div>
                            <input
                                className="flex w-full min-w-0 flex-1 border-none bg-transparent text-gray-800 placeholder:text-gray-400 focus:ring-0 text-base px-2"
                                placeholder="Search by location, authority, or project type..."
                                type="text"
                            />
                            <button className="bg-primary hover:bg-primary-dark text-text-main px-8 font-bold text-sm transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsHero;
