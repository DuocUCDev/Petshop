import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product, productService } from '@/services/productService';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/store/useCartStore';
import { Minus, Plus, ShoppingCart, ArrowLeft, Truck, ShieldCheck } from 'lucide-react';

export const ProductDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore((state) => state.addItem);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const data = await productService.getById(Number(id));
                setProduct(data || null);
            } catch (error) {
                console.error("Failed to fetch product", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (!product) return;
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image,
        });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
    };

    if (loading) {
        return <div className="animate-pulse bg-stone-100 h-96 rounded-xl mt-8"></div>;
    }

    if (!product) {
        return <div className="text-center py-12">Producto no encontrado. <Link to="/catalog" className="underline">Volver al catálogo</Link></div>;
    }

    return (
        <div className="max-w-6xl mx-auto py-8">
            <Link to="/catalog" className="inline-flex items-center text-stone-500 hover:text-primary mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" /> Volver al catálogo
            </Link>

            <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm border">
                <div className="bg-stone-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center relative">
                    <img src={product.image} alt={product.name} className="object-cover w-full h-full max-h-[500px]" />
                    <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-stone-800 text-lg px-3 py-1 shadow-sm">{product.category}</Badge>
                    </div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-stone-800 mb-2">{product.name}</h1>
                        <div className="text-2xl font-bold text-primary">{formatPrice(product.price)}</div>
                    </div>

                    <p className="text-stone-600 leading-relaxed text-lg">
                        {product.description}
                    </p>

                    {/* Simulated Attributes */}
                    {product.attributes && (
                        <div className="space-y-3">
                            {product.attributes.weight && (
                                <div>
                                    <span className="font-semibold text-stone-700 block mb-1">Peso:</span>
                                    <Badge variant="outline" className="text-md px-3 py-1 cursor-pointer hover:bg-stone-50 border-primary text-primary">{product.attributes.weight}</Badge>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="h-px bg-stone-200 my-4" />

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-stone-700">Cantidad:</span>
                            <div className="flex items-center border rounded-md">
                                <Button variant="ghost" size="icon" className="h-10 w-10 text-stone-600" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <Button variant="ghost" size="icon" className="h-10 w-10 text-stone-600" onClick={() => setQuantity(quantity + 1)}>
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <Button size="lg" className="w-full text-lg h-14 bg-primary hover:bg-primary/90 shadow-md group" onClick={handleAddToCart}>
                            <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                            Agregar al Carrito
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3 text-sm text-stone-600">
                            <Truck className="h-5 w-5 text-primary" /> Envío a todo Chile
                        </div>
                        <div className="flex items-center gap-3 text-sm text-stone-600">
                            <ShieldCheck className="h-5 w-5 text-primary" /> Garantía de Calidad
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
