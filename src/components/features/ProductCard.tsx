import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCartStore } from '@/store/useCartStore';
import { Link } from 'react-router-dom';
import { Product } from '@/services/productService';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
        });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
    };

    return (
        <Link to={`/product/${product.id}`} className="group">
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-stone-200">
                <div className="aspect-square relative overflow-hidden bg-stone-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 text-stone-800 hover:bg-white backdrop-blur-sm shadow-sm font-medium">
                            {product.category}
                        </Badge>
                    </div>
                </div>
                <CardContent className="p-4">
                    <h3 className="font-semibold text-stone-800 text-lg leading-tight mb-2 line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                    </h3>
                    {/* <p className="text-sm text-stone-500 mb-4 line-clamp-2">{product.description}</p> */}
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xl font-bold text-primary">
                            {formatPrice(product.price)}
                        </span>
                        <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-full h-10 w-10 bg-stone-100 hover:bg-primary hover:text-white transition-colors shadow-sm"
                            onClick={handleAddToCart}
                        >
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};
