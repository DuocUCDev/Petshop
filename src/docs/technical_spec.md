# Especificación Técnica: Petshop E-commerce (MVP)

## 1. Arquitectura del Sistema

### 1.1. Stack Tecnológico
*   **Frontend:** React 18 + Vite.
*   **Frontend:** React 18 + Vite.
*   **Data Persistence:** Archivos JSON estáticos (Simulación de DB) + LocalStorage (Para Carrito/Sesión).
*   **Arquitectura:** Repository Pattern para desacoplar la fuente de datos (JSON actual -> API Futura).
*   **Routing:** React Router DOM v6.
*   **Autenticación:** Simulación local (Context API + LocalStorage).
*   **Validación:** Zod + TypeScript estricto.
*   **Estilos:** CSS Vanilla (o Tailwind si se requiere, pero priorizando diseño custom "Eco-friendly").

### 1.2. Principios de Diseño
*   **Single Responsibility:** Separación estricta entre `/src/pages` (Vistas), `/src/components` (UI), `/src/services` (Lógica de Negocio/Supabase) y `/src/hooks`.
*   **Seguridad:** Row Level Security (RLS) habilitado en todas las tablas.

## 2. Modelo de Datos (Esquema Propuesto)

### 2.1. Tablas Principales
*   **`users`**: Extensión de `auth.users` de Supabase. Almacena perfil, rut, teléfono.
*   **`products`**: Catálogo maestro.
    *   `id`, `name`, `description` (JSON/Text), `base_price`, `stock`, `is_active`.
    *   `attributes`: JSONB para variaciones (peso, sabor) o tabla relacional `product_variants` si se prefiere normalizar.
    *   `category_id`: FK a tabla categorías.
*   **`categories`**: Árbol de categorías (id, parent_id, name).
*   **`orders`**: Cabecera del pedido.
    *   `user_id`, `status` (pending, paid, shipped, completed, cancelled), `total_amount`, `shipping_address`, `payment_method`.
*   **`order_items`**: Detalle del pedido.
    *   `order_id`, `product_id`, `variant_id` (opcional), `quantity`, `unit_price`.

### 2.2. Semillas (Seeds)
*   Se generará un script SQL o JSON para poblar la base de datos con **30 productos iniciales** de categorías "Perros" y "Gatos" (Alimento Natural, Juguetes Eco, Higiene).

## 3. Seguridad y Restricciones

### 3.1. Autenticación
*   Registro de usuarios mediante Email/Password.
*   Gestión de sesión mediante Cookies seguras (Supabase SSR).

### 3.2. Roles y Permisos (RLS)
*   **Anon:** Solo lectura de productos y categorías activos.
*   **Authenticated (Client):** Lectura de productos. Lectura/Escritura de **sus propios** pedidos.
*   **Admin:** Lectura/Escritura total sobre Productos, Categorías y todos los Pedidos.

## 4. Estrategia de Desarrollo (GitFlow)
*   **Branches:** `main` (prod), `dev` (integración), `feature/*` (funcionalidades).
*   **Pull Requests:** Revisión obligatoria antes de merge a `dev`.

## 5. Próximos Pasos (Roadmap Técnico)
1.  Inicializar repositorio Next.js + Supabase.
2.  Definir schema.prisma o SQL inicial.
3.  Implementar Auth y Layout Base.
4.  Desarrollar mantenedor de productos (Admin).
5.  Desarrollar catálogo público y carro de compras.
