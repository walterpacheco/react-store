# React Store

React Store es una aplicación desarrollada con React y Vite que simula la interfaz de un e-commerce. El proyecto fue creado con el objetivo de aplicar conceptos fundamentales de React, incluyendo componentes reutilizables, props, estado mediante useState y renderizado dinámico de datos.

## Tecnologías utilizadas

* React
* Vite
* JavaScript ES6+
* Bootstrap 5
* CSS3
* Git y GitHub

## Características

* Navegación mediante componente Header.
* Buscador dinámico de productos.
* Renderizado de productos mediante ProductList y ProductCard.
* Componente Button reutilizable.
* Footer informativo.
* Filtrado de productos por nombre y categoría.
* Arquitectura basada en componentes reutilizables.

## Estructura del proyecto

```text
src/
├── components/
│   ├── Header/
│   ├── SearchBar/
│   ├── Button/
│   ├── ProductCard/
│   ├── ProductList/
│   ├── Cart/
│   ├── Contact/
│   └── Footer/
```

## Componentes desarrollados

### Header

Componente encargado de mostrar el menú de navegación principal.

### SearchBar

Componente que permite buscar productos mediante un input controlado utilizando useState.

### Button

Componente reutilizable que permite mostrar distintos estilos de botones mediante props.

### ProductCard

Componente encargado de representar la información individual de un producto.

### ProductList

Componente que renderiza múltiples productos utilizando el método map().
### Cart

Componente encargado de gestionar el carrito de compras, mostrar productos seleccionados, eliminar productos y calcular el total de la compra.

### Contact

Componente encargado de mostrar información de contacto y un formulario validado para comunicación con el usuario.

### Footer

Componente encargado de mostrar información general del proyecto.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/walterpacheco/react-store.git
```

Ingresar al proyecto:

```bash
cd react-store
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Funcionalidades React implementadas

* Componentes reutilizables.
* Props.
* useState.
* Renderizado condicional.
* Renderizado de listas mediante map().
* Manejo de eventos.
* Filtro dinámico de productos.
* Carrito de compras.
* Formularios controlados.
* Validación de formularios.
* Organización modular del proyecto.

## Autor

Walter Pacheco

## Estado del proyecto

Proyecto desarrollado con fines académicos para la asignatura de React.
## Capturas de pantalla

### Vista principal

![Vista principal](./docs/home.png)

### Búsqueda de productos

![Búsqueda](./docs/search.png)