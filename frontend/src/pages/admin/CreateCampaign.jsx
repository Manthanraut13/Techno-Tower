import CampaignHeader from '../../components/admin/campaign/CampaignHeader';
import CampaignEditor from '../../components/admin/campaign/CampaignEditor';
import DeliverySchedule from '../../components/admin/campaign/DeliverySchedule';
import LivePreview from '../../components/admin/campaign/LivePreview';

const CreateCampaign = () => {
    return (
        <div className="min-h-screen bg-background-surface dark:bg-gray-950">
            <CampaignHeader />
            <main className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Editor & Settings */}
                    <div className="lg:col-span-8 space-y-6">
                        <CampaignEditor />
                        <DeliverySchedule />
                    </div>

                    {/* Right Column: Preview */}
                    <div className="lg:col-span-4">
                        <LivePreview />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreateCampaign;
