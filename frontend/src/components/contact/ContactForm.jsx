import { useState } from 'react';
import { Send } from 'lucide-react';
import api from '../../services/api';

const ContactForm = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const tabs = [
        { id: 'general', label: 'General Enquiry' },
        { id: 'support', label: 'Product Support' },
        { id: 'dealer', label: 'Dealer' },
        { id: 'enterprise', label: 'Enterprise' }
    ];

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus(null);
        try {
            const enquiryType =
                activeTab === 'support'
                    ? 'product'
                    : activeTab === 'dealer'
                    ? 'dealer'
                    : 'general';

            await api.post('/enquiries', {
                name: `${form.firstName} ${form.lastName}`.trim(),
                email: form.email,
                phone: form.phone,
                company: form.company,
                message: form.message,
                enquiryType,
                sourcePage: 'contact'
            });
            setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                message: ''
            });
        } catch (err) {
            console.error('Failed to submit enquiry', err);
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-background-surface dark:bg-background-surface-dark rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-[140px] py-4 text-center border-b-[3px] font-bold text-sm tracking-wide transition-colors ${activeTab === tab.id
                            ? 'border-primary text-text-main dark:text-white bg-background-surface dark:bg-background-surface-dark'
                            : 'border-transparent text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Form Content */}
            <form className="p-6 sm:p-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="block">
                        <span className="text-text-main dark:text-gray-200 text-sm font-semibold mb-2 block">First Name</span>
                        <input
                            className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none"
                            placeholder="John"
                            type="text"
                            value={form.firstName}
                            onChange={handleChange('firstName')}
                        />
                    </label>
                    <label className="block">
                        <span className="text-text-main dark:text-gray-200 text-sm font-semibold mb-2 block">Last Name</span>
                        <input
                            className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none"
                            placeholder="Doe"
                            type="text"
                            value={form.lastName}
                            onChange={handleChange('lastName')}
                        />
                    </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="block">
                        <span className="text-text-main dark:text-gray-200 text-sm font-semibold mb-2 block">Email Address</span>
                        <input
                            className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none"
                            placeholder="john@company.com"
                            type="email"
                            value={form.email}
                            onChange={handleChange('email')}
                        />
                    </label>
                    <label className="block">
                        <span className="text-text-main dark:text-gray-200 text-sm font-semibold mb-2 block">Phone Number</span>
                        <input
                            className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none"
                            placeholder="+1 (555) 000-0000"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange('phone')}
                        />
                    </label>
                </div>

                <label className="block">
                    <span className="text-text-main dark:text-gray-200 text-sm font-semibold mb-2 block">Company / Organization</span>
                    <input
                        className="w-full rounded-lg border-[#e8dfce] dark:border-[#4a3e2f] bg-background-light dark:bg-[#1a150d] text-text-main dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 outline-none"
                        placeholder="Techno Corp Ltd."
                        type="text"
                        value={form.company}
                        onChange={handleChange('company')}
                    />
                </label>

                <label className="block">
                    <span className="text-text-main dark:text-gray-200 text-sm font-semibold mb-2 block">Message</span>
                    <textarea
                        className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white min-h-[140px] p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 resize-y outline-none"
                        placeholder="Tell us about your project requirements..."
                        value={form.message}
                        onChange={handleChange('message')}
                    ></textarea>
                </label>

                <div className="pt-2">
                    {status && (
                        <div
                            className={`mb-3 text-sm rounded-lg px-3 py-2 ${
                                status.type === 'success'
                                    ? 'bg-green-50 text-green-700 border border-green-200'
                                    : 'bg-red-50 text-red-600 border border-red-200'
                            }`}
                        >
                            {status.message}
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-text-main font-bold py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                    >
                        <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                        <Send size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-xs text-center text-text-muted mt-4">
                        By submitting this form, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
