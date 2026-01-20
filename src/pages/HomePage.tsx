import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Heart } from 'lucide-react';

export const HomePage = () => {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative bg-stone-900 text-white rounded-3xl overflow-hidden min-h-[500px] flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1600&auto=format&fit=crop"
                    alt="Happy Dog"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative container mx-auto px-8 max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Lo mejor para tu <span className="text-green-400">mejor amigo</span>
                    </h1>
                    <p className="text-xl text-stone-200 mb-8 max-w-lg">
                        Productos 100% naturales, orgánicos y libres de crueldad. Cuida su salud mientras cuidas el planeta.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/catalog">
                            <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 border-none">
                                Ver Catálogo <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/catalog">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                Ofertas
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600">
                        <Leaf className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800">100% Orgánico</h3>
                    <p className="text-stone-500">Ingredientes seleccionados de granjas sostenibles sin pesticidas ni químicos.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto text-orange-600">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800">Calidad Certificada</h3>
                    <p className="text-stone-500">Todos nuestros productos cuentan con certificaciones internacionales de calidad.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-600">
                        <Heart className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800">Amor Animal</h3>
                    <p className="text-stone-500">Parte de nuestras ganancias son donadas a refugios de animales en Chile.</p>
                </div>
            </section>

            {/* Categories Mockup */}
            <section>
                <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Categorías Populares</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link to="/catalog" className="group relative h-64 rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <span className="text-3xl font-bold text-white border-2 border-white px-6 py-2 rounded-lg backdrop-blur-sm">Perros</span>
                        </div>
                    </Link>
                    <Link to="/catalog" className="group relative h-64 rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <span className="text-3xl font-bold text-white border-2 border-white px-6 py-2 rounded-lg backdrop-blur-sm">Gatos</span>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};
