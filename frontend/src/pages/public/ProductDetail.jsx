
import Breadcrumbs from '../../components/public/product-detail/Breadcrumbs';
import ProductGallery from '../../components/public/product-detail/ProductGallery';
import ProductInfo from '../../components/public/product-detail/ProductInfo';
import TechnicalSpecs from '../../components/public/product-detail/TechnicalSpecs';
import MaterialFinishing from '../../components/public/product-detail/MaterialFinishing';
import ApplicationAreas from '../../components/public/product-detail/ApplicationAreas';
import DownloadsCertifications from '../../components/public/product-detail/DownloadsCertifications';

const ProductDetail = () => {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            <Breadcrumbs />

            {/* Product Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7">
                        <ProductGallery />
                    </div>
                    <div className="lg:col-span-5">
                        <ProductInfo />
                    </div>
                </div>
            </section>

            <TechnicalSpecs />
            <MaterialFinishing />
            <ApplicationAreas />
            <DownloadsCertifications />
        </div>
    );
};

export default ProductDetail;
