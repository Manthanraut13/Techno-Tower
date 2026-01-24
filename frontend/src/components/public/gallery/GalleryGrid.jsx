
import { Eye, ChevronDown } from 'lucide-react';

const GalleryItem = ({ image, category, title, aspectRatio }) => (
    <div className={`break-inside-avoid mb-6 group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 cursor-zoom-in`}>
        <div
            className={`w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${aspectRatio}`}
            style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-1">{category}</p>
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <div className="mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-white/80 text-sm">
                <Eye size={20} />
                <span>View Details</span>
            </div>
        </div>
    </div>
);

const GalleryGrid = () => {
    const projects = [
        {
            id: 1,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN6SR875Y7lD7Kviiy6oKM0KjUi7lglWa3QSFcScEMYjO7UwNGleB3zxjgGm5V8Z6rwU0rjBk64lMSfua9r6IdM9ZgWR2Xd-C1X1o64CienOicFkdqRCwoCA4rhjzc7Ryy07FBsO4-9-lkBDZWOBberfG1hxryuf39vI1xUDnz98O0nSTe7CDicdxtMfNPcUkwdAmqrlxOh83QcstEpuAMgsKD2UHn0Xtf659NgujWEqrW5FK8fQANXnMKojT6NnJbteefUlFsGGod",
            category: "Installation",
            title: "Highway 401 Expansion",
            aspectRatio: "aspect-[3/4]"
        },
        {
            id: 2,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOZ9Zymtf5ZPArXy296glW5NUYnSPoeGjc5nyNeWlhcmjRKkDQnbI6ILPaUUC6VNRkHkN_AFHsaLc2o8h2844d-sxG2w-bOJKTNBjwrvaU_kkv-YNfG7PBMrOnBpHKh8nNdwi6mXFMOoOEl0FcxbXocxoOxVULdaH62jc7YlaoFNB8kdkN1b2LGs8k6ncOKQWdls35zLVjVcibnrMHzhHimLahRUt3iSMPngjZZzxHRk8La2u7Y2h4fxEKipoAMV1elQbeIDkB5gNy",
            category: "Manufacturing",
            title: "Automated Welding Line",
            aspectRatio: "aspect-square"
        },
        {
            id: 3,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX_UdDuS3w4uPr98OnB3pFO3py-0tf_mvF_5Ab2uvp5lPjMT4WLnZmgqFgLDp7cNbuDOoJIIin9E_r_iWAXFNPtd-_Ujk1esyfUcBjSDG09Tcqi9KVFZqCge9ituEuntOVnXo-gqhbRNzd5buLiJbs9PaGfjjeCjI3_LAzoXb6VmAweVPVDRTVMXNPwXgyhEsPY7nJcqba2gyMrGRKj8UqedoARyy6kmGm0wW8JEZKr-IfP9AQWu_c3TyNrjYACb7OCIyUQPO8A28k",
            category: "Completed Projects",
            title: "Tech Park Atrium",
            aspectRatio: "aspect-[4/3]"
        },
        {
            id: 4,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlPopSppkuuiNKiy5hyOOLvURPT-kPj5Q__FFDIldVFxaQMfvNMZKrA9qOdSxvLWBHp-NovbUg64JBQGZuqEqJAswE-vsetyE442ZPm8rUoilQmkV4DS1R_Yu3LUnFhI-KSi-f6GaGkrd3IWkXFYA-OIFLEBhNhCCYhRkIhVwnLuSaQ9OeCUGd_NwWMfiIVCvQiVf4LsmM9-SGpsh7TS7NK76EwH12LLttEuhIamxC8pzFj01rrhnowZ0RvKgkRrMLZjCT5RD74WI4",
            category: "Machinery & Parts",
            title: "Smart Sensor Integration",
            aspectRatio: "aspect-[2/3]"
        },
        {
            id: 5,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwb99IDbkdyQorbuxaqCtP3dscbXZXtJFfbtJIz405MAysxV-hEYvaVeiNmFqxAq4-KVA8_YDppVGf07EPK6nEYsPu3AP4zUZkGSpFSaAJ4WH3Cx2_HpQhOgMA4Wkh2vs-h5YPNjseNZerQzZhZQ6duKQgWYnDpCv6RF0eDv4mS82FzjKwyfDPZPM6InGfBPKQvhewJgL8ISNE1OU0i1qnZN29t76FteFS8wx5Emp9Y1nQyVZe-A9r2jQb6JECDRTAKco9TFjQR4tQ",
            category: "Completed Projects",
            title: "Downtown Revitalization",
            aspectRatio: "aspect-video"
        },
        {
            id: 6,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBISRQmTQkzd3i-UbwmnfRIygL4fU-1yryo79TIvHXG8YprW2qofVtpYUCXAkqh4TqRDmqmJlTAT6CuXFWb0grPKLhg9QItL5yXFlYMy8FapTfUApU15dhgF6wW92KGWxIgJT7GKM5HIhptDLDie1H8nI2a00RCj-2S6ANQsAHPtRH-WMV8vsS54f5zw1JB3MS2H-nE-pfAVX4uNcqgIFX8pWSiyjgqk2TQSJQ1nqa3mlfrdrd3HsFL7j07eM_OXmDIgE8UiemUvyEj",
            category: "Manufacturing",
            title: "Steel Storage Yard",
            aspectRatio: "aspect-square"
        },
        {
            id: 7,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD6Ys5QdxeszoXMrXsjUQs2UotOj7iroszBX2ze8u-h-1iJhGLeo6jVSmLxPGeN3kszPqQ_FbelQcufhvlzuSRyi9lql5BnnIgse-5iWup6Fh4ZniZSuIe76Ey9N98DIu5YSPw6dyNPYPAJVqBGZaOW4Ea13fCrOobt8waLgASXUdDfPRvd7kTyaY9TEtM199rZZ498bXNLtB44VFvW-bbTSW54axm9RZlC4KHfEchxPCFLWYGOi1twCLkYsyG8oiLQGep9BhdoBOM",
            category: "Machinery",
            title: "Robotic Assembly Unit 04",
            aspectRatio: "aspect-[3/5]"
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                {projects.map((project) => (
                    <GalleryItem key={project.id} {...project} />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <button className="group flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors text-text-main dark:text-gray-300 font-medium">
                    <span>Load More Projects</span>
                    <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default GalleryGrid;
