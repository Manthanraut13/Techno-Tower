
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
    const projects = [
        {
            id: 1,
            title: "Smart City Boulevard",
            authority: "Municipal Corporation of Delhi",
            location: "New Delhi, India",
            date: "2023",
            description: "Supply & Installation of 500 Smart Poles with integrated sensors.",
            status: "Completed",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuel76WgOellAO5i8xh9RiQ0TVq9hzrO-UhujDrQHOOnBOyumm83MUIRVzjZB5dfIt5RwbVpSrGVcc8ze-sHSe73hLz76GpmwBKomxY8UedstdP-9rnHtn9FZCAlS0C7IuhBnWg4QLJszFw5fv-Zt_T0LrZCJWaMVqN-0JscLCTcNMaNfH4wdnQyYKbyjsZEPbXobGAJz9byOR5WGu3UZIS0MyQWfiyIiCTJwrG7wy9cZNbFKap_x6IOMmxOGBhRlI2KU8rIwzmm_f"
        },
        {
            id: 2,
            title: "Highway 44 Upgrade",
            authority: "National Highway Authority",
            location: "Punjab, India",
            date: "2022",
            description: "Retrofitting 20km of high-mast lighting for improved visibility.",
            status: "Completed",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtRM4swMYRbz2UImxyDIh4yP8t6TpYsqptfofQp2wOv0WDJUSgsJRRehEa3bSmTw9306xsuPz2sObiSGauvTnLvUGK_VVJSXkP5KNKiODMtvhs9CRiFEWLuxg7wce-xnYwoS4BMcNW5vPSWpzSLUJMppYw3aaNtq2cUhzPpgjxzAe05Zu6IzB4qww_nXjD9JbpjopFKschZV5uo5w3VpZ28WlrEO5O_MunHn2seHlnLie7VQYIygUxTyCqR6mT1emqyJfVkg1Jm8X7"
        },
        {
            id: 3,
            title: "Metro Station Infrastructure",
            authority: "Metro Rail Corp",
            location: "Bangalore, India",
            date: "2024 (Ongoing)",
            description: "Architectural lighting and structural poles for 12 new stations.",
            status: "In Progress",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEs0muTFSDd4KdoOm6-fvxrtkORf-BzbwEjRmvigmr-ljSRmPyB_CW4nXcYlViF0xVAfw2VnX2krjZE2lOGr9pnCbemMTj-Qh5wMwXjYcosEPnYj5u70H8k9KucZdG2TLNqj_0rOulTrg5Ti4GxC7f2EkyAG9Hv9QV_oOgfs1R6T0se5sLTje1lyHhhCZ2KJwPXVtBzKquR3oAAsORQeUtxLTxC5WiHRA_WE3fabrbaTziyZ5pvDJ6M_07SVKIzl282HErzeRSYW_G"
        },
        {
            id: 4,
            title: "Tech Park Smart Poles",
            authority: "Infosys Campus",
            location: "Pune, India",
            date: "2021",
            description: "Design and manufacturing of 200 custom decorative poles.",
            status: "Completed",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrEnZAnEilwXXbQv1Q3IjOXeYlkuNptYhno-fvvjJOfLjJ6LMjaYhhTjbxr12nXXONrsmSL2IzwdQ5bipIOHTskj5jjxjNP2yVRx99YRVxWVpVe9S9-pGGrKfbwrsA5Uv9wXmDZ80SKyzUbw6aT6_3CjMllESLs5ubUkvAyxnWNiO7nr26RZYt736GM4mz11h5LagLliFCOLtmoT_k60C4OLgzOyYrIKHQOTCMOZThiEM5350eYN7qDHmTuYCKK1tYxqTToub8qiGa"
        },
        {
            id: 5,
            title: "Coastal Road Illumination",
            authority: "State Public Works Dept",
            location: "Mumbai, India",
            date: "2023",
            description: "Corrosion-resistant poles for high-salinity coastal environment.",
            status: "Completed",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAML7opZPm9ZXTfIqWG1RtlkjE1YuVe26N1YFKHbPgz7DuRtwpBUqmkLavlAx8dbQIkFazP3i_IY_59zed8gz4WsbWQlireXBUNwk5PrG-Cqra8kP4SlkjxGI3XbqHGslrARyo-mBpaILJRmxMVKrJpwTPneyIjH7j88aMxlMmVJV7FPb2Lrt-XfnO_lDAuZgfYUEebuLZwX2NQf69PC3DUskSUIaqV04seBNPv4ughiPinrMeLehsJogakKLgLkRthfFhMM2WCWhs"
        },
        {
            id: 6,
            title: "City Center Urban Renewal",
            authority: "Smart City Mission",
            location: "Indore, India",
            date: "2024",
            description: "Complete overhaul of street furniture and decorative lighting.",
            status: "In Progress",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO4K6mKbW93FWOrCSXkeyH9cPfYml9yWCb6AwEcgfU0ABR75kn8EsoyCqk0zJQr65pIpHZ6cKE56_griqZRjb88fyu5OUndCG2m1vEgJZQxdmqkf7_IvCNmMDr5uNaxc04R9DLTkdYsim8XrRxl0Y0Ib9LQ66eo4HEzNNZaiT_USY45lCVY6i1ELzFNa7my1akE1jKd0W-zoqGXHxtN5IKweg6NMwC_H6wabdy653gDJDjonXAqCUbVgfZ0uLqW5cJYd182c1uDu5t"
        }
    ];

    return (
        <div className="w-full bg-[#f8f7f5] dark:bg-[#221b10] flex-1">
            <div className="mx-auto max-w-7xl px-4 md:px-10 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center pt-16">
                    <nav className="flex items-center gap-2">
                        <button className="flex size-10 items-center justify-center rounded-lg border border-[#e8dfce] dark:border-gray-700 hover:bg-[#f4efe7] dark:hover:bg-gray-800 transition-colors">
                            <ChevronLeft size={20} className="text-[#1c160d] dark:text-white" />
                        </button>
                        <button className="flex size-10 items-center justify-center rounded-lg bg-[#f4a825] text-[#1c160d] text-sm font-bold shadow-sm">
                            1
                        </button>
                        <button className="flex size-10 items-center justify-center rounded-lg border border-[#e8dfce] dark:border-gray-700 text-[#1c160d] dark:text-gray-300 text-sm font-medium hover:bg-[#f4efe7] dark:hover:bg-gray-800 transition-colors">
                            2
                        </button>
                        <button className="flex size-10 items-center justify-center rounded-lg border border-[#e8dfce] dark:border-gray-700 text-[#1c160d] dark:text-gray-300 text-sm font-medium hover:bg-[#f4efe7] dark:hover:bg-gray-800 transition-colors">
                            3
                        </button>
                        <span className="flex size-10 items-center justify-center text-[#4b3c2a] dark:text-gray-500">...</span>
                        <button className="flex size-10 items-center justify-center rounded-lg border border-[#e8dfce] dark:border-gray-700 text-[#1c160d] dark:text-gray-300 text-sm font-medium hover:bg-[#f4efe7] dark:hover:bg-gray-800 transition-colors">
                            8
                        </button>
                        <button className="flex size-10 items-center justify-center rounded-lg border border-[#e8dfce] dark:border-gray-700 hover:bg-[#f4efe7] dark:hover:bg-gray-800 transition-colors">
                            <ChevronRight size={20} className="text-[#1c160d] dark:text-white" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ProjectsGrid;
