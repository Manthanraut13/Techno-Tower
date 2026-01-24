import ContactHero from '../../components/contact/ContactHero';
import ContactForm from '../../components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';

const Contact = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <ContactHero />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Contact Form */}
                    <div className="lg:col-span-7 animate-fade-in-up">
                        <ContactForm />
                    </div>

                    {/* Right Column: Contact Details & Map */}
                    <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <ContactInfo />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
