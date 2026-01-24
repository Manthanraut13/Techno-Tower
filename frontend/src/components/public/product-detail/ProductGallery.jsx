
import { useState } from 'react';

const ProductGallery = () => {
    const images = [
        {
            full: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj2o6ZwZXMcGf7FL23zkecj6XJ6BURUUCyd2ojZOsHicu7vn9pwsDAlfjB7Q2a7yiAGgy12bOWsUIcNk0cBHWwvv_pJJe7pCapZbzTPb5k72MeOvYJoHDey6MosV7eSxpQgqknCySZRtWutv8wsdEPOH2urbfnnGE_SEtasESz9PgZYtLsngunJl97Qr4EUNIcHozJtq1j3ov8ZrxSH4rhVW9hiwJqFN780yCNfjFEbDdsX5hYS4mhZOuDeU2dOqV80MkMlXSzphQj',
            alt: 'Modern smart city light pole against a blue sky'
        },
        {
            full: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIMkxRn5eemokJzXTrEXgTSUVgQyzs8mQfiM6wATuskmG6WkSebb8j2lKeOdY5ohNZOFh4Ze8dfBdS3-QURWAeUzxckQrIdFuNy1DNOr47Gdj4XeZKcGkCm6MpFF7wwqQtMgTv3bg5w8s6pQ_92iXAkbGxYFLFgkD1GiTVLChfFH6BnK8xR6EZVmomtsRT_kNtSKS-RdzsxQ78tjEHCOKZrJdynn9zge1UjUhQ4Djrn8THnIO2byI5IQxRd1kysaH2bWZO1Sjz_Vmx',
            alt: 'Smart pole main view'
        },
        {
            full: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaFG1olfTxR2ThoyCsLZFgFEon_VK20UwojNpY9Jq9o17v5wn639o1xNrgz-CeJ_7UHZnyCP1N3e6Pz5_9BKTlQEh5mTnD8w8JIVKRF8lO0cRrd_Exyksh704rUfofZIGUiOzihRMvj6o156BuGq0-r2W9e5OT7EhLXvMAbMrM_vCRDTT0CGCjnY0nMlMHNEwrhscLisYEME-hwbYdJNnO4ReJzuHSntg4-Z7Ti5BOy7XtPM7DugMbZacZjye3bD0pbqynHQJwG4Ej',
            alt: 'Close up of base plate and bolts'
        },
        {
            full: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpcq_IU1gYiqO98eDa95cdKdVm4WI0JAQEKbtqes65PNI4FduBIpow-AJi0lkX64J1ia28edIEWsnfq4FMs6N-V-NsDDUJ1SH7ytKtigybXLVPwGxpRMc5knvs3NKymiGiVJ5g3pMu_LExtMwOYN658J4RU9qEvWG-k4_wm6ZKWHeGAb1JZOL5TzwQqxG7ivend0yqb0tLdla4P6sgBIXyB9xChouruV1ywJviBtHqwSpxQVx7A48YrWYorNEqFyl-KOMpspTE5GJ2',
            alt: 'IoT sensor housing detail'
        },
        {
            full: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPtvH9klKosVGcSmgwNdcwOZyyndkRZhHLqXIZNoB1dcfc0Vmhik5M5iXsGycQkEneEwF5qzStAWxFjtF0j2_IEFf05OqU6qJD6Rf6HHkE5M89QeboBAsf28ktRxNcXuRT0GVbRux_OpGwzmjhqJCG1tLBKOmW1D0s1sUqKdt7EE2XW2uwlPnCatQfozzOQh0arwq_4GmCQNbeTkoOnP37bGQ7LCflT4Tu8Dt9aZVjEnxxO_nwZMZvc4I7HG7gMULx-L7PWAgxLXmS',
            alt: 'Night view of illuminated smart pole'
        }
    ];

    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Main Image */}
            <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-gray-950 rounded-xl overflow-hidden relative group shadow-sm border border-black/5 dark:border-white/5">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${mainImage.full}')` }}
                    alt={mainImage.alt}
                ></div>
                <div className="absolute top-4 left-4 bg-primary text-text-main text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Best Seller
                </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto gallery-scroll pb-2">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setMainImage(img)}
                        className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors ${mainImage.full === img.full
                            ? 'border-primary'
                            : 'border-transparent hover:border-primary/50'
                            }`}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${img.full}')` }}
                            alt={img.alt}
                        ></div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
