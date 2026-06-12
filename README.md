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
│   └── Footer/
├── data/
│   └── products.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
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