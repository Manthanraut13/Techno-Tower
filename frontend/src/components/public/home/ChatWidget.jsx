
import { useState } from 'react';
import { Bot, Minimize2, X, Paperclip, Send, Lock, ChevronDown } from 'lucide-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-[100] size-14 rounded-full bg-primary text-text-main shadow-xl hover:shadow-2xl hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
            >
                <ChevronDown size={28} className="rotate-180" />
            </button>
        );
    }

    if (isMinimized) {
        return (
            <button
                onClick={() => setIsMinimized(false)}
                className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up"
            >
                <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                    <Bot size={20} className="text-text-main" />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-sm font-bold text-text-main dark:text-white">Techno Assistant</span>
                    <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-green-500"></span> Online
                    </span>
                </div>
                <button
                    onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                    className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                    <X size={18} />
                </button>
            </button>
        )
    }

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 font-display">
            <div className="w-[360px] md:w-[400px] h-[600px] max-h-[calc(100vh-120px)] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right transition-all">
                {/* Header */}
                <div className="bg-secondary p-4 flex items-center justify-between text-white shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="size-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                            <Bot size={24} className="text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-base leading-tight">Techno Assistant</h3>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs text-gray-300 font-medium tracking-wide">Always Online</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 relative z-10">
                        <button
                            onClick={() => setIsMinimized(true)}
                            className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-gray-300 hover:text-white" title="Minimize"
                        >
                            <Minimize2 size={20} />
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-gray-300 hover:text-white" title="Close"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-background-surface dark:bg-gray-950 scrollbar-thin">
                    <div className="flex justify-center">
                        <span className="bg-gray-200 dark:bg-gray-800 text-text-muted dark:text-gray-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Today</span>
                    </div>

                    {/* Bot Message */}
                    <div className="flex gap-3">
                        <div className="size-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-1 shadow-sm">
                            <Bot size={14} className="text-white" />
                        </div>
                        <div className="flex flex-col gap-1 max-w-[85%]">
                            <div className="bg-white dark:bg-gray-800 p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700 text-sm text-text-main dark:text-gray-200 leading-relaxed">
                                Hello! Welcome to Techno Tower. I'm your AI infrastructure specialist.
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700 text-sm text-text-main dark:text-gray-200 leading-relaxed">
                                How can I help you today? You can ask about:
                            </div>
                            <span className="text-[10px] text-gray-400 ml-1 font-medium">10:42 AM</span>
                        </div>
                    </div>

                    {/* Quick Options */}
                    <div className="pl-11 flex flex-wrap gap-2">
                        <button className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-primary/40 dark:border-primary/20 text-text-main dark:text-gray-200 text-xs font-semibold rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary transition-all shadow-sm">
                            📜 Product Specifications
                        </button>
                        <button className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-primary/40 dark:border-primary/20 text-text-main dark:text-gray-200 text-xs font-semibold rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary transition-all shadow-sm">
                            💰 Request Quote
                        </button>
                        <button className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-primary/40 dark:border-primary/20 text-text-main dark:text-gray-200 text-xs font-semibold rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary transition-all shadow-sm">
                            🏗 Installation Services
                        </button>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-3 flex-row-reverse">
                        <div className="flex flex-col gap-1 items-end max-w-[85%]">
                            <div className="bg-primary p-3.5 rounded-2xl rounded-tr-none shadow-md text-text-main text-sm font-medium leading-relaxed">
                                I need details on High Mast poles suitable for a cricket stadium.
                            </div>
                            <span className="text-[10px] text-gray-400 mr-1 font-medium">10:44 AM</span>
                        </div>
                    </div>

                    {/* Bot Response with Card */}
                    <div className="flex gap-3">
                        <div className="size-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-1 shadow-sm">
                            <Bot size={14} className="text-white" />
                        </div>
                        <div className="flex flex-col gap-1 max-w-[90%]">
                            <div className="bg-white dark:bg-gray-800 p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700 text-sm text-text-main dark:text-gray-200 leading-relaxed">
                                For cricket stadiums, we recommend our <span className="font-bold text-secondary dark:text-white">Stadium Series High Mast System</span>. It ensures uniform illuminance and supports broadcast standards.
                            </div>
                            <div className="mt-1 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-md group cursor-pointer hover:border-primary/50 transition-colors">
                                <div className="relative h-28 overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLwTHMYqsEMkTBg4pKAs39NcJOnGpsVCpSHCvAWuxCZhmDo3RtPJQa-U1EQvfylxkUampHlXr-Q3qgAe7pgReiVVBVSp4_6dLAtXxUGAYlzgEXLcGB2ngBC5c6GyRFDc3zGJFYrgxoSa_A0zz2iDCX9i58RnoTTcrVkGqaNsYx-WcloEeTK4L1n0zoJ_calk5A2ZL-usaeAtbj7Ol1-dx0ObppVc0_UwkhcWMz1LNYKudJSiN7gJIIModrrYov4PN2NIWrAS0fnV0C"
                                        alt="Stadium Light"
                                    />
                                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                        BEST SELLER
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h4 className="font-bold text-text-main dark:text-white text-sm">Stadium Series 500</h4>
                                    <div className="flex items-center gap-2 mt-1 mb-2">
                                        <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-400">30m-50m Height</span>
                                        <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-400">Wind Speed 180km/h</span>
                                    </div>
                                    <button className="w-full py-1.5 rounded bg-secondary text-white text-xs font-bold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-1">
                                        View Specs <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700 text-sm text-text-main dark:text-gray-200 leading-relaxed">
                                Would you like to connect with an engineer for a layout plan?
                            </div>
                            <span className="text-[10px] text-gray-400 ml-1 font-medium">10:45 AM</span>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 shrink-0">
                    <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar pb-1">
                        <span className="whitespace-nowrap px-2 py-1 rounded bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-[10px] text-text-muted hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">Yes, connect me</span>
                        <span className="whitespace-nowrap px-2 py-1 rounded bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-[10px] text-text-muted hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">Download Brochure</span>
                    </div>
                    <form className="flex items-center gap-2 relative" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative flex-1">
                            <input
                                className="w-full bg-gray-50 dark:bg-gray-800 border-transparent focus:border-primary focus:ring-0 rounded-lg py-2.5 pl-4 pr-10 text-sm text-text-main dark:text-white placeholder-gray-400 transition-all shadow-inner"
                                placeholder="Type your message..."
                                type="text"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors" type="button">
                                <Paperclip size={20} />
                            </button>
                        </div>
                        <button className="size-10 bg-primary text-text-main rounded-lg hover:bg-primary-dark transition-all shadow-md flex items-center justify-center group" type="submit">
                            <Send size={20} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </form>
                    <div className="text-center mt-2 flex items-center justify-center gap-1 opacity-60">
                        <Lock size={10} className="text-gray-400" />
                        <p className="text-[10px] text-gray-400">Encrypted Enterprise Chat</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWidget;
