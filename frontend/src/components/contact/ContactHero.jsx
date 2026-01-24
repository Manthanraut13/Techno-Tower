import { motion } from 'framer-motion';

const ContactHero = () => {
    return (
        <header className="relative bg-background-light dark:bg-background-dark py-16 sm:py-24 lg:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2D3436 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute bottom-0 right-0 z-0 opacity-20 w-1/3 h-full bg-gradient-to-l from-primary/30 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-main dark:text-white mb-6"
                >
                    Let's Build the Future.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-2xl mx-auto text-lg sm:text-xl text-text-muted dark:text-gray-300 leading-relaxed"
                >
                    Reach out for quotes, partnerships, or technical support. We are ready to illuminate your next infrastructure project.
                </motion.p>
            </div>
        </header>
    );
};

export default ContactHero;
