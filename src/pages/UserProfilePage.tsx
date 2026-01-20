import { useAuthStore } from '@/store/useAuthStore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package } from 'lucide-react';

export const UserProfilePage = () => {
    const user = useAuthStore((state) => state.user);

    if (!user) {
        return <div className="p-8">Please log in.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold">
                    {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-stone-800">{user.name}</h1>
                    <p className="text-stone-500">{user.email}</p>
                    <Badge variant="outline" className="mt-2 text-xs">{user.role}</Badge>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Historial de Pedidos</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3].map((order) => (
                            <div key={order} className="flex items-center justify-between p-4 border rounded-lg bg-stone-50">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-2 rounded border">
                                        <Package className="h-6 w-6 text-stone-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-stone-800">Pedido #{1000 + order}</p>
                                        <p className="text-sm text-stone-500">2 productos • $45.990</p>
                                    </div>
                                </div>
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 shadow-none border-green-200">
                                    Entregado
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
