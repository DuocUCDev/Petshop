import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const OrderSuccessPage = () => {
    return (
        <div className="max-w-md mx-auto text-center py-16 px-4">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">¡Orden Confirmada!</h2>
            <p className="text-stone-600 mb-8">Gracias por tu compra. Te hemos enviado un correo con los detalles.</p>
            <div className="space-y-3">
                <Link to="/catalog">
                    <Button className="w-full">Seguir Comprando</Button>
                </Link>
                <Link to="/">
                    <Button variant="outline" className="w-full">Volver al Inicio</Button>
                </Link>
            </div>
        </div>
    );
};
