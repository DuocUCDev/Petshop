import { Outlet, Link } from 'react-router-dom';
import { ShoppingCart, Menu, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/store/useCartStore';

export const MainLayout = () => {
    const cartItems = useCartStore((state) => state.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-800">
            <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto flex justify-between items-center h-16 px-4">
                    <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
                        <PawPrint className="h-8 w-8" />
                        <span className="font-bold text-xl tracking-tight text-stone-800">Petshop Natural</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link to="/catalog" className="hover:text-primary transition-colors">Catalog</Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link to="/cart">
                            <Button variant="ghost" size="icon" className="relative hover:bg-stone-100">
                                <ShoppingCart className="h-5 w-5 text-stone-700" />
                                {cartCount > 0 && (
                                    <Badge variant="default" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-green-600">
                                        {cartCount}
                                    </Badge>
                                )}
                            </Button>
                        </Link>

                        <Link to="/auth/login" className="hidden md:inline-flex">
                            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-green-50">
                                Log in
                            </Button>
                        </Link>

                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto py-8 px-4">
                <Outlet />
            </main>

            <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <PawPrint className="h-5 w-5 text-primary" /> Petshop Natural
                        </h4>
                        <p className="text-sm">
                            Dedicated to providing the best organic and eco-friendly products for your beloved pets.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Shop</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/catalog" className="hover:text-green-500">Dogs</Link></li>
                            <li><Link to="/catalog" className="hover:text-green-500">Cats</Link></li>
                            <li><Link to="/catalog" className="hover:text-green-500">Sale</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-500">Contact Us</a></li>
                            <li><a href="#" className="hover:text-green-500">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-green-500">Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Newsletter</h4>
                        <p className="text-sm mb-2">Subscribe for updates.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Email" className="bg-stone-800 border-stone-700 rounded-md px-3 py-1 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary" />
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">Go</Button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
