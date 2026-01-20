import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingBag, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const AdminLayout = () => {
    const location = useLocation();

    const navItems = [
        { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/admin/products', icon: Package, label: 'Products' },
        { href: '/admin/orders', icon: ShoppingBag, label: 'Orders' },
    ];

    return (
        <div className="min-h-screen flex bg-stone-50 font-sans">
            <aside className="w-64 bg-white border-r h-screen sticky top-0 flex flex-col p-4 shadow-sm">
                <div className="flex items-center gap-2 px-2 mb-8 mt-2">
                    <div className="h-8 w-8 bg-stone-900 rounded-lg flex items-center justify-center text-white font-bold">A</div>
                    <span className="font-bold text-lg text-stone-800">Admin Panel</span>
                </div>

                <nav className="space-y-1 flex-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link key={item.href} to={item.href}>
                                <Button
                                    variant={isActive ? "secondary" : "ghost"}
                                    className={cn("w-full justify-start gap-2", isActive && "bg-green-50 text-primary hover:bg-green-100 hover:text-green-700")}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </Button>
                            </Link>
                        );
                    })}
                </nav>

                <div className="pt-4 border-t mt-auto">
                    <Link to="/">
                        <Button variant="outline" className="w-full justify-start gap-2 text-stone-500">
                            <LogOut className="h-4 w-4" />
                            Back to Shop
                        </Button>
                    </Link>
                </div>
            </aside>

            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
