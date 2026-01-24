import { ShieldCheck } from 'lucide-react';

const DealerRegistration = () => {
    return (
        <section className="py-24 bg-[#fcfaf8] dark:bg-[#1c160d] relative" id="register-form">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-white/5 to-transparent"></div>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-[#2a2216] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-white/5">
                    <div className="px-6 py-8 sm:px-10 bg-[#1c160d] text-white">
                        <h2 className="text-2xl font-bold">Become a Certified Dealer</h2>
                        <p className="mt-1 text-gray-400">Complete the form below to initiate your partnership application.</p>
                    </div>

                    <form className="px-6 py-8 sm:px-10 space-y-8">
                        {/* Step 1: Business Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#1c160d] dark:text-white mb-4 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4a825]/20 text-xs font-bold text-[#f4a825] dark:text-[#f4a825]">1</span>
                                Business Information
                            </h3>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="business-name" className="block text-sm font-medium leading-6 text-[#1c160d] dark:text-gray-300">Business Name</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="business-name"
                                            id="business-name"
                                            placeholder="Techno Infra Solutions Pvt Ltd"
                                            className="block w-full rounded-md border-0 py-2.5 text-[#1c160d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f4a825] sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white pl-3 bg-white"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="gst-number" className="block text-sm font-medium leading-6 text-[#1c160d] dark:text-gray-300">GST Number</label>
                                    <div className="mt-2 relative">
                                        <input
                                            type="text"
                                            name="gst-number"
                                            id="gst-number"
                                            placeholder="22AAAAA0000A1Z5"
                                            className="block w-full rounded-md border-0 py-2.5 text-[#1c160d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f4a825] sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white pl-3 bg-white"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <ShieldCheck className="text-gray-400" size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Contact Details */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#1c160d] dark:text-white mb-4 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4a825]/20 text-xs font-bold text-[#f4a825] dark:text-[#f4a825]">2</span>
                                Contact Details
                            </h3>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium leading-6 text-[#1c160d] dark:text-gray-300">Contact Person</label>
                                    <div className="mt-2">
                                        <input type="text" name="contact-name" id="contact-name" className="block w-full rounded-md border-0 py-2.5 text-[#1c160d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f4a825] sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white pl-3 bg-white" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#1c160d] dark:text-gray-300">Email Address</label>
                                    <div className="mt-2">
                                        <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-2.5 text-[#1c160d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f4a825] sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white pl-3 bg-white" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-[#1c160d] dark:text-gray-300">Phone Number</label>
                                    <div className="mt-2">
                                        <input type="tel" name="phone" id="phone" className="block w-full rounded-md border-0 py-2.5 text-[#1c160d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f4a825] sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white pl-3 bg-white" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-[#1c160d] dark:text-gray-300">Preferred Region</label>
                                    <div className="mt-2">
                                        <select id="region" name="region" className="block w-full rounded-md border-0 py-2.5 text-[#1c160d] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#f4a825] sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white pl-3 bg-white">
                                            <option>Select a region</option>
                                            <option>North Zone (Delhi/NCR, Punjab)</option>
                                            <option>West Zone (Maharashtra, Gujarat)</option>
                                            <option>South Zone (Karnataka, Tamil Nadu)</option>
                                            <option>East Zone (West Bengal, Bihar)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Interest */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#1c160d] dark:text-white mb-4 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4a825]/20 text-xs font-bold text-[#f4a825] dark:text-[#f4a825]">3</span>
                                Product Interest
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <CheckBoxItem id="light-poles" label="Light Poles" description="Octagonal, Conical, Swaged" />
                                <CheckBoxItem id="smart-lighting" label="Smart Lighting" description="IoT Controllers, LED Modules" />
                                <CheckBoxItem id="high-masts" label="High Masts" description="Stadiums, Plazas, Roundabouts" />
                                <CheckBoxItem id="accessories" label="Accessories" description="Brackets, Foundations, Cables" />
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                            <button type="submit" className="flex w-full justify-center rounded-lg bg-[#f4a825] px-3 py-3 text-sm font-bold leading-6 text-[#1c160d] shadow-sm hover:bg-[#d68e1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4a825] transition-colors">
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

const CheckBoxItem = ({ id, label, description }) => (
    <div className="relative flex items-start">
        <div className="flex h-6 items-center">
            <input
                id={id}
                name={id}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-[#f4a825] focus:ring-[#f4a825] bg-transparent dark:border-white/20"
            />
        </div>
        <div className="ml-3 text-sm leading-6">
            <label htmlFor={id} className="font-medium text-[#1c160d] dark:text-gray-200">{label}</label>
            <span className="text-gray-500 block text-xs">{description}</span>
        </div>
    </div>
);

export default DealerRegistration;
