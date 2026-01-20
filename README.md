# Petshop "Eco-friendly" MVP

Frontend MVP de e-commerce de productos para mascotas con un enfoque eco-friendly.

![Petshop Hero](https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1600&auto=format&fit=crop)

## Características

*   **Catálogo de Productos**: Listado con filtros por categoría y búsqueda.
*   **Detalle de Producto**: Información detallada, stock y selección de cantidad.
*   **Carrito de Compras**: Gestión de estado global con persistencia.
*   **Checkout**: Simulación de compra con formulario de envío.
*   **Autenticación**: Login/Registro simulado con gestión de roles (Usuario/Admin).
*   **Panel de Administración**: Dashboard con estadísticas, gestión de productos y pedidos (UI).
*   **Diseño Responsive**: Adaptado a móviles y escritorio con Tailwind CSS.

## Tecnologías

*   React 18 + Vite
*   TypeScript
*   Tailwind CSS + shadcn/ui
*   Zustand (State Management)
*   React Router DOM (Routing) as 'router'
*   Lucide React (Icons)

## Instalación

1.  Clonar el repositorio.
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Iniciar servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Estructura del Proyecto

*   `src/components/ui`: Componentes atómicos reutilizables.
*   `src/components/layout`: Layouts principales (Main, Admin, Auth).
*   `src/pages`: Vistas de la aplicación.
*   `src/store`: Estado global (Cart, Auth).
*   `src/services`: Simulación de llamadas a API.
