import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-primary">Petshop Natural</h1>
                    <p className="text-stone-500">Welcome back</p>
                </div>
                <Outlet />
            </div>
        </div>
    );
};
