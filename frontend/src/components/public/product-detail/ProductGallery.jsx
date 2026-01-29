
import { useState } from 'react';

const ProductGallery = ({ product }) => {
    const images = product.images;
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Main Image */}
            <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-gray-950 rounded-xl overflow-hidden relative group shadow-sm border border-black/5 dark:border-white/5">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${mainImage.full}')` }}
                    aria-label={mainImage.alt}
                ></div>
                {product.badge && (
                    <div className="absolute top-4 left-4 bg-primary text-text-main text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {product.badge}
                    </div>
                )}
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
                            aria-label={img.alt}
                        ></div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
