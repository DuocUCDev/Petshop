export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    stock: number;
    attributes?: {
        weight?: string;
        flavor?: string;
    };
}

const MOCK_PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Alimento Orgánico Perro Adulto",
        description: "Fórmula libre de granos con pollo de libre pastoreo.",
        price: 34990,
        category: "Perros",
        image: "https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=500&auto=format&fit=crop",
        stock: 50,
        attributes: { weight: "15kg" }
    },
    {
        id: 2,
        name: "Juguete Masticable Ecológico",
        description: "Hecho de caucho natural biodegradable.",
        price: 8990,
        category: "Perros",
        image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=500&auto=format&fit=crop",
        stock: 100
    },
    {
        id: 3,
        name: "Arena Sanitaria Biodegradable",
        description: "A base de maíz, aglomerante y compostable.",
        price: 12990,
        category: "Gatos",
        image: "https://images.unsplash.com/photo-1623366302587-7aca27515433?q=80&w=500&auto=format&fit=crop",
        stock: 30,
        attributes: { weight: "6kg" }
    },
];

export const productService = {
    getAll: async (): Promise<Product[]> => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return MOCK_PRODUCTS;
    },
    getById: async (id: number): Promise<Product | undefined> => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return MOCK_PRODUCTS.find(p => p.id === id);
    },
    getByCategory: async (category: string): Promise<Product[]> => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return MOCK_PRODUCTS.filter(p => p.category === category);
    }
};
