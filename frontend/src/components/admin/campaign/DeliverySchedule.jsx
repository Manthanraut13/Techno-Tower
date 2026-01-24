import { Clock, Rocket, Calendar, Repeat } from 'lucide-react';

const DeliverySchedule = () => {
    return (
        <section className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 animate-fade-in-up delay-100">
            <h3 className="text-lg font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                <Clock className="text-primary" size={20} />
                Delivery Schedule
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
                <label className="cursor-pointer relative">
                    <input defaultChecked className="peer sr-only" name="schedule" type="radio" />
                    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 transition-all h-full">
                        <div className="flex items-center justify-between mb-2">
                            <Rocket className="text-primary" size={24} />
                            <div className="size-4 rounded-full border border-gray-300 peer-checked:border-primary peer-checked:bg-primary relative"></div>
                        </div>
                        <span className="block font-bold text-text-main dark:text-white">Send Now</span>
                        <span className="text-xs text-text-muted mt-1 block">Campaign will be queued immediately.</span>
                    </div>
                </label>
                <label className="cursor-pointer relative">
                    <input className="peer sr-only" name="schedule" type="radio" />
                    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 transition-all h-full">
                        <div className="flex items-center justify-between mb-2">
                            <Calendar className="text-gray-400 peer-checked:text-primary" size={24} />
                            <div className="size-4 rounded-full border border-gray-300 peer-checked:border-primary peer-checked:bg-primary relative"></div>
                        </div>
                        <span className="block font-bold text-text-main dark:text-white">Schedule Later</span>
                        <span className="text-xs text-text-muted mt-1 block">Pick a specific date and time for delivery.</span>
                    </div>
                </label>
                <label className="cursor-pointer relative">
                    <input className="peer sr-only" name="schedule" type="radio" />
                    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 transition-all h-full">
                        <div className="flex items-center justify-between mb-2">
                            <Repeat className="text-gray-400 peer-checked:text-primary" size={24} />
                            <div className="size-4 rounded-full border border-gray-300 peer-checked:border-primary peer-checked:bg-primary relative"></div>
                        </div>
                        <span className="block font-bold text-text-main dark:text-white">Recurring</span>
                        <span className="text-xs text-text-muted mt-1 block">Set up weekly or monthly automated sends.</span>
                    </div>
                </label>
            </div>
        </section>
    );
};

export default DeliverySchedule;
