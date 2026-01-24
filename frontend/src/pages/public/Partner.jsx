import DealerHero from '../../components/partner/DealerHero';
import DealerBenefits from '../../components/partner/DealerBenefits';
import DealerExpansion from '../../components/partner/DealerExpansion';
import DealerRegistration from '../../components/partner/DealerRegistration';

const Partner = () => {
    return (
        <div className="bg-white dark:bg-gray-950">
            <DealerHero />
            <DealerBenefits />
            <DealerExpansion />
            <DealerRegistration />
        </div>
    );
};

export default Partner;
