import { useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const login = useAuthStore((state) => state.login); // Reuse login for registration mock
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate registration
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Auto login after register
        await login({ email: 'user@new.com' });
        setLoading(false);
        navigate('/');
    };

    return (
        <div className="w-full max-w-sm mx-auto">
            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Crear Cuenta</CardTitle>
                    <CardDescription>
                        Únete a nuestra comunidad eco-friendly
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="Nombre" required />
                            <Input placeholder="Apellido" required />
                        </div>
                        <Input type="email" placeholder="Correo electrónico" required />
                        <Input type="password" placeholder="Contraseña" required />
                        <Button className="w-full" type="submit" disabled={loading}>
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Registrarse"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-stone-500">
                        ¿Ya tienes cuenta? <Link to="/auth/login" className="text-primary hover:underline">Ingresa</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};
