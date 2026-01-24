import AboutHero from '../../components/about/AboutHero';
import AboutIntro from '../../components/about/AboutIntro';
import AboutVision from '../../components/about/AboutVision';
import AboutTimeline from '../../components/about/AboutTimeline';
import AboutOperations from '../../components/about/AboutOperations';
import AboutValues from '../../components/about/AboutValues';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <AboutHero />
            <AboutIntro />
            <AboutVision />
            <AboutTimeline />
            <AboutOperations />
            <AboutValues />
        </div>
    );
};

export default About;
