
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import api from '../../services/api';
import Breadcrumbs from '../../components/public/product-detail/Breadcrumbs';
import ProductGallery from '../../components/public/product-detail/ProductGallery';
import ProductInfo from '../../components/public/product-detail/ProductInfo';
import TechnicalSpecs from '../../components/public/product-detail/TechnicalSpecs';
import MaterialFinishing from '../../components/public/product-detail/MaterialFinishing';
import ApplicationAreas from '../../components/public/product-detail/ApplicationAreas';
import DownloadsCertifications from '../../components/public/product-detail/DownloadsCertifications';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchProduct = async () => {
            try {
                const res = await api.get(`/products/${slug}`);
                if (!isMounted) return;
                setProduct(res.data);
                setError(null);
            } catch (err) {
                console.error('Failed to load product', err);
                if (err.response?.status === 404) {
                    setError('not_found');
                } else {
                    setError('Failed to load product details.');
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };
        fetchProduct();
        return () => {
            isMounted = false;
        };
    }, [slug]);

    if (!loading && error === 'not_found') {
        return <Navigate to="/products" replace />;
    }

    if (loading || !product) {
        return (
            <div className="bg-white dark:bg-gray-950 min-h-screen flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-300">
                    {loading ? 'Loading product...' : 'Preparing product details...'}
                </p>
            </div>
        );
    }

    if (error && error !== 'not_found') {
        return (
            <div className="bg-white dark:bg-gray-950 min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-sm">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            <Breadcrumbs product={product} />

            {/* Product Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7">
                        <ProductGallery product={product} />
                    </div>
                    <div className="lg:col-span-5">
                        <ProductInfo product={product} />
                    </div>
                </div>
            </section>

            <TechnicalSpecs product={product} />
            <MaterialFinishing product={product} />
            <ApplicationAreas product={product} />
            <DownloadsCertifications product={product} />
        </div>
    );
};

export default ProductDetail;
