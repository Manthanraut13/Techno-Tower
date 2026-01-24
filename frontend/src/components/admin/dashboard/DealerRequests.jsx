import { Check, X } from 'lucide-react';

const DealerRequests = () => {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-lg text-text-main dark:text-white">Dealer Requests</h3>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-center gap-4">

                {/* Rahul Enterprises */}
                <div className="flex items-center gap-3">
                    <img alt="Avatar" className="size-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlTq_NMds0oPZGCDJ9dI0UL2aaZXyj-cWvZ_G7FCqxdn56xcyjl7p5OzT573d1a7IEiXafBxuopE7s54A2rSl5tg-94EAmyMM9i7tjT6zgBfgj0YzjWKgD9TQ52S24NJTGfHK2gXUDrKt445mnH0fw-sV_1sh2ksk1a0B0Ylr7WsHhiGHKaiJgCTI7Kfl4r2hToF8VrprSLPg-_SUbVxh1YxOparNC-3cuGKRFzy8P38r-ps_SRfChs4_0qM6VOAnMeLq9eZ09RyA9" />
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-text-main">Rahul Enterprises</h4>
                        <p className="text-xs text-text-muted">Region: North Zone</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="size-8 rounded bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-600 dark:hover:bg-green-500 hover:text-white transition-colors" title="Approve"><Check size={18} /></button>
                        <button className="size-8 rounded bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-colors" title="Reject"><X size={18} /></button>
                    </div>
                </div>

                {/* Sunrise Infra */}
                <div className="flex items-center gap-3">
                    <img alt="Avatar" className="size-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjQ4RG22RtxyIxCFE79dgFCy6QvPkYfbYqZGZAV_oG66BpJiFLHCHQ8k2fOaFet4Ni4caZ0CflWVb_G_JEg-I6NRE0x3BuG7UoQFjd2qxoHwQGZMmkCU78Hqbv4xKYVBlAR4CWEHtgP5InJPyHxuxtsPeSqvZbNQQihYumXqmIV9n1-DywL3cpMUqDvDTLS8vgUfQ-IuxmHCuSthiNfGKPcC5QMedoAyUifvdpm3Y_uIBTfxeP9EFBtTAto_jAqauLvVXhJmyZpa-M" />
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-text-main">Sunrise Infra</h4>
                        <p className="text-xs text-text-muted">Region: West Zone</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="size-8 rounded bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-600 dark:hover:bg-green-500 hover:text-white transition-colors" title="Approve"><Check size={18} /></button>
                        <button className="size-8 rounded bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-colors" title="Reject"><X size={18} /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DealerRequests;
