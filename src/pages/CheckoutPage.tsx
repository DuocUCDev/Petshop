import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export const CheckoutPage = () => {
    const { items, total, clearCart } = useCartStore();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        clearCart();
        setLoading(false);
        navigate('/order-success');
    };

    if (items.length === 0) {
        return <div className="text-center py-12">No items to checkout. <Link to="/catalog">Go to Catalog</Link></div>;
    }

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-stone-800 mb-8">Finalizar Compra</h1>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Datos de Envío</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="Nombre" required />
                                    <Input placeholder="Apellido" required />
                                </div>
                                <Input placeholder="Dirección" required />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="Comuna" required />
                                    <Input placeholder="Ciudad" required />
                                </div>
                                <Input placeholder="Teléfono" type="tel" required />
                                <Input placeholder="Email" type="email" required />
                            </form>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Método de Pago</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="border p-4 rounded-lg flex items-center gap-4 cursor-pointer bg-stone-50 border-primary/50">
                                    <div className="h-4 w-4 rounded-full border border-primary bg-primary" />
                                    <span className="font-medium">Transferencia Bancaria</span>
                                </div>
                                <div className="border p-4 rounded-lg flex items-center gap-4 cursor-pointer opacity-60">
                                    <div className="h-4 w-4 rounded-full border border-stone-300" />
                                    <span className="font-medium">Pago Contra Entrega (Solo Santiago)</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-1">
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle>Resumen</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2 text-sm border-b pb-4">
                                {items.map(item => (
                                    <div key={item.id} className="flex justify-between">
                                        <span className="truncate w-32">{item.name} (x{item.quantity})</span>
                                        <span>${(item.price * item.quantity).toLocaleString('es-CL')}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-primary">${total().toLocaleString('es-CL')}</span>
                            </div>
                            <Button form="checkout-form" type="submit" className="w-full size-lg" disabled={loading}>
                                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Confirmar Pedido"}
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
