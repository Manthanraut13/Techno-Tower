import { Outlet } from 'react-router-dom';
import AdminHeader from '../admin/AdminHeader';
import AdminFooter from '../layout/AdminFooter';

const AdminLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
            <AdminHeader />
            <main className="flex-grow w-full">
                <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">
                    <Outlet />
                </div>
            </main>
            <AdminFooter />
        </div>
    );
};

export default AdminLayout;
