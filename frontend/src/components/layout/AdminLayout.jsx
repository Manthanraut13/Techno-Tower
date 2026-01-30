import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../admin/Sidebar';
import AdminHeader from '../admin/AdminHeader';
import AdminFooter from '../layout/AdminFooter';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white dark:bg-[#1c160d]">
                <div className="text-center text-gray-500 dark:text-gray-300">
                    Checking admin access...
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/admin/login" replace state={{ from: location }} />;
    }

    return (
        <div className="flex min-h-screen bg-white dark:bg-[#1c160d]">
            {/* Persistent Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col ml-72 transition-all duration-300">
                {/* Refactored Topbar (formerly AdminHeader) */}
                <AdminHeader />

                <main className="flex-grow w-full">
                    <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-8">
                        <Outlet />
                    </div>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
};

export default AdminLayout;
