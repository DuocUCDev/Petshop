import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export const CartPage = () => {
    const { items, removeItem, updateQuantity, total } = useCartStore();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
    };

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <div className="bg-stone-100 p-6 rounded-full">
                    <ShoppingBag className="h-12 w-12 text-stone-400" />
                </div>
                <h2 className="text-2xl font-bold text-stone-800">Tu carrito está vacío</h2>
                <p className="text-stone-500">Parece que aún no has agregado productos.</p>
                <Link to="/catalog">
                    <Button size="lg" className="mt-4">Ir al Catálogo</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-stone-800 mb-8">Carrito de Compras</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl border shadow-sm items-center">
                            <div className="h-24 w-24 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-stone-800 truncate">{item.name}</h3>
                                <p className="text-primary font-bold mt-1">{formatPrice(item.price)}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center border rounded-md h-8">
                                    <button
                                        className="px-2 hover:bg-stone-100 h-full flex items-center"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus className="h-3 w-3" />
                                    </button>
                                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                                    <button
                                        className="px-2 hover:bg-stone-100 h-full flex items-center"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <Plus className="h-3 w-3" />
                                    </button>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-stone-400 hover:text-red-500 hover:bg-red-50"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-24">
                        <h3 className="font-bold text-lg text-stone-800 mb-4">Resumen del Pedido</h3>

                        <div className="space-y-2 mb-4 text-sm">
                            <div className="flex justify-between text-stone-600">
                                <span>Subtotal</span>
                                <span>{formatPrice(total())}</span>
                            </div>
                            <div className="flex justify-between text-stone-600">
                                <span>Envío</span>
                                <span className="text-green-600 font-medium">Gratis</span>
                            </div>
                        </div>

                        <div className="border-t pt-4 flex justify-between items-center mb-6">
                            <span className="font-bold text-lg text-stone-800">Total</span>
                            <span className="font-bold text-xl text-primary">{formatPrice(total())}</span>
                        </div>

                        <Link to="/checkout" className="block w-full">
                            <Button size="lg" className="w-full text-lg">
                                Continuar Compra <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
