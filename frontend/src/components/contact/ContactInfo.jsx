import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className="space-y-6">
            {/* Info Cards Stack */}
            <div className="bg-background-surface dark:bg-background-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">Contact Information</h3>
                <div className="space-y-6">

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <MapPin className="text-primary" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white text-sm">Headquarters & Factory</h4>
                            <p className="text-text-muted dark:text-gray-400 text-sm mt-1 leading-relaxed">
                                128 Industrial Park Road,<br />
                                Advanced Manufacturing Zone,<br />
                                Sector 4, TX 75001
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Phone className="text-primary" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white text-sm">Phone Support</h4>
                            <p className="text-text-muted dark:text-gray-400 text-sm mt-1">
                                <span className="block mb-1"><span className="font-medium">Sales:</span> +1 (800) 123-4567</span>
                                <span className="block"><span className="font-medium">Support:</span> +1 (800) 987-6543</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Mail className="text-primary" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white text-sm">Email</h4>
                            <div className="text-text-muted dark:text-gray-400 text-sm mt-1">
                                <a href="mailto:sales@technotower.com" className="hover:text-primary transition-colors block">sales@technotower.com</a>
                                <a href="mailto:support@technotower.com" className="hover:text-primary transition-colors block">support@technotower.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Clock className="text-primary" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white text-sm">Business Hours</h4>
                            <p className="text-text-muted dark:text-gray-400 text-sm mt-1">
                                Mon - Fri: 8:00 AM - 6:00 PM<br />
                                Sat: 9:00 AM - 1:00 PM
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Map Card */}
            <div className="bg-background-surface dark:bg-background-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden p-1 h-[300px]">
                <div className="w-full h-full rounded-lg bg-gray-200 relative overflow-hidden group">
                    <img
                        alt="Map view"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                        <div className="bg-primary text-text-main rounded-full p-2 shadow-lg transform -translate-y-4">
                            <MapPin size={24} />
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1.5 rounded text-xs font-medium backdrop-blur-sm">
                        View on Google Maps
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
