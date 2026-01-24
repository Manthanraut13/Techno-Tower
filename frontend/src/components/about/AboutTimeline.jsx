const TimelineItem = ({ year, title, description, side }) => (
    <div className={`flex flex-col md:flex-row items-center justify-between w-full mb-12 relative z-10 ${side === 'left' ? 'md:flex-row-reverse' : ''}`}>

        {/* Content Side */}
        <div className={`w-full md:w-5/12 ${side === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{year}</h3>
            <h4 className="text-lg font-semibold text-yellow-500 mb-2">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Center Dot */}
        <div className="w-8 h-8 rounded-full border-4 border-white bg-yellow-500 shadow-md z-20 mx-auto md:mx-0 absolute left-0 right-0 md:relative md:left-auto md:right-auto m-auto"></div>

        {/* Empty Side for Spacing */}
        <div className="w-full md:w-5/12"></div>
    </div>
);

const AboutTimeline = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
                    <p className="text-gray-500 mt-2">More than two decades of excellence</p>
                </div>

                {/* Center Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 top-0 hidden md:block"></div>

                <div className="max-w-4xl mx-auto">
                    <TimelineItem
                        year="1998"
                        title="Foundation"
                        description="Techno Tower was established as a small steel fabrication workshop with a vision to serve local municipalities."
                        side="left"
                    />
                    <TimelineItem
                        year="2005"
                        title="First Major Factory"
                        description="Opened our first 10,000 sq. ft. dedicated manufacturing facility, increasing production capacity by 400%."
                        side="right"
                    />
                    <TimelineItem
                        year="2012"
                        title="Smart Integration"
                        description="Pioneered the integration of smart IoT sensors into our pole designs, partnering with major tech firms."
                        side="left"
                    />
                    <TimelineItem
                        year="2024"
                        title="Global Reach"
                        description="Expanding operations to 5 new continents with a focus on sustainable, solar-powered infrastructure."
                        side="right"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutTimeline;
