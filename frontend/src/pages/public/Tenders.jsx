
import TendersHero from '../../components/public/tenders/TendersHero';
import TendersStats from '../../components/public/tenders/TendersStats';
import TendersCapabilities from '../../components/public/tenders/TendersCapabilities';
import TendersPartners from '../../components/public/tenders/TendersPartners';
import TendersVictories from '../../components/public/tenders/TendersVictories';
import TendersCertifications from '../../components/public/tenders/TendersCertifications';

const Tenders = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">

            <TendersHero />
            <TendersStats />
            <TendersCapabilities />
            <TendersPartners />
            <TendersVictories />
            <TendersCertifications />
        </div>
    );
};

export default Tenders;
