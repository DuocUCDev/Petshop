# Especificación Funcional: Petshop E-commerce (MVP)

## 1. Visión y Contexto del Proyecto

### 1.1. Resumen Ejecutivo
Desarrollo de un MVP (Producto Mínimo Viable) para un e-commerce de productos de mascotas con enfoque en productos naturales/orgánicos. El proyecto es de carácter académico (Unidad 2), tipo "Greenfield" (nuevo) y opera bajo un modelo de "Bootstrapping" con recursos limitados.

### 1.2. Objetivos de Negocio (North Star)
*   **Principal:** Validar la demanda de un retailer consolidado de productos orgánicos para mascotas.
*   **Académico:** Completar un flujo transaccional funcional (End-to-End) antes del cierre de la Unidad 2.
*   **Diferenciador:** Categorización exclusiva de productos "Naturales/Orgánicos" y experiencia de usuario superior (Eco-friendly).

## 2. Definición del Usuario (Público Objetivo)

### 2.1. User Persona
*   **Perfil:** Generalista (Dueños de mascotas de todo tipo).
*   **Interés:** Valora la alimentación natural/orgánica y la salud de su mascota.
*   **Comportamiento de Compra:** Dispuesto a registrarse para obtener beneficios de fidelización.

### 2.2. Roles del Sistema
1.  **Cliente (User):** Navega, busca, añade al carro, se registra y compra.
2.  **Administrador (Admin):** Gestiona catálogo, stock y cambios de estado de pedidos.

## 3. Alcance Funcional

### 3.1. Catálogo y Navegación
*   **Tipo de Inventario:** Venta de productos físicos (Retailer).
*   **Estructura:** Jerarquía de 2 niveles (Ej: Perro > Alimento).
*   **Ficha de Producto:**
    *   Soporte para **Productos Configurables** (Selectores de variación: Peso, Sabor).
    *   Información detallada obligatoria (Ingredientes, Sellos orgánicos).
*   **Datos Iniciales:** Carga inicial ("Seed") de ~30 productos demo.

### 3.2. Proceso de Compra (Checkout)
*   **Registro:** **Obligatorio** para finalizar la compra. No existe "Guest Checkout".
*   **Carro de Compras:** Persistente (idealmente).
*   **Logística (Simulada):** Tarifa plana de envío (Monto fijo a todo Chile).
*   **Medios de Pago:**
    *   Transferencia Bancaria (Manual).
    *   Pago Contra Entrega (COD).
    *   *Nota:* No habrá integración real con pasarelas (Webpay/MercadoPago).

### 3.3. Gestión de Pedidos y Stock
*   **Flujo de Pedido:**
    1.  Cliente finaliza compra -> Estado: `Pendiente de Pago`.
    2.  Stock se descuenta automáticamente (Reserva estricta).
    3.  Admin valida transferencia/pago -> Cambia estado a: `Pagado` / `En Preparación`.
*   **Control de Stock:**
    *   Descuento automático al confirmar orden.
    *   Bloqueo de compra si stock = 0.

### 3.4. Backoffice (Panel de Administración)
*   **Gestión de Catálogo:** Interfaz visual (UI) para Crear, Editar y Eliminar productos.
*   **Gestión de Ordenes:** Listado de pedidos con filtro por estado y acciones para cambiar estado (Aprobar Pago).

## 4. Requerimientos No Funcionales

### 4.1. Diseño y UX/UI
*   **Estilo Visual:** **Eco-Friendly / Rústico**. Uso de tonos tierra, verdes, texturas que evoquen naturalidad, siguiendo referentes como Superzoo.cl.
*   **Plataforma:** Web Responsive (Mobile First).

### 4.2. Tecnología (Restricciones)
*   **Stack:** Next.js 16 (App Router), Supabase (Auth, DB), TypeScript.
*   **Infraestructura:** Vercel (Frontend), Supabase (Backend/DB). Uso de tiers gratuitos.

## 5. Exclusiones (Out of Scope)
Los siguientes elementos están explícitamente **FUERA** del alcance de esta fase:
*   ❌ Integración real con pasarelas de pago (Transbank/Webpay).
*   ❌ Sistema de facturación electrónica (SII).
*   ❌ Flujo automatizado de devoluciones o reembolsos.
*   ❌ Aplicación móvil nativa (iOS/Android).
*   ❌ Soporte multi-idioma o multi-moneda.
*   ❌ Recuperación de carritos abandonados.
