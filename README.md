Aplicación **SPA en React 19** desarrollada con **Vite** y **TailwindCSS**, que consume datos reales desde la API pública [FakeStoreAPI](https://fakestoreapi.com/products).  
El proyecto simula un pequeño **catálogo de tienda online**, mostrando productos con su nombre, precio, categoría e imagen.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React 19** + **Vite**
- 🧭 **React Router DOM** (navegación SPA)
- 🌐 **Axios** (consumo de API pública)
- 🎨 **TailwindCSS** (estilos responsivos)
- 💾 **JavaScript ES6+**
- 🧱 Estructura modular con componentes reutilizables

---

## ⚙️ Instalación y ejecución local

Clonar el repositorio:

git clone https://github.com/LuisGalvan1512/PC03_DAE.git
cd PC03_DAE
npm install
npm run dev

Luego abre en tu navegador:
👉 http://localhost:5173

---

## 🌐 Deploy del proyecto

✅ Enlace en producción:
👉 [https://fakestore-pc03.netlify.app/](https://fakestore-pc03.netlify.app/)

---

## 📂 Estructura del proyecto

src/
 ├── componentes/          # Encabezado y pie de página
 ├── paginas/              # Home y Productos
 ├── rutas/                # Configuración de React Router
 ├── servicios/            # Lógica de consumo de API con Axios
 ├── App.jsx               # Componente raíz
 └── main.jsx              # Punto de entrada principal

---

## 🏠 Rutas principales

| Ruta | Descripción |
|------|-------------|
| `/` | Hero con nombre del proyecto, descripción y productos destacados. |
| `/productos` | Catálogo completo con nombre, precio, categoría e imagen. |

---

## 🧠 Características implementadas

### 🏠 Home
- Sección hero con nombre del proyecto y descripción.
- Listado de 4 productos destacados obtenidos desde la API.
- Botón para acceder al catálogo completo.

### 📜 Productos
- Consumo real de datos con Axios desde FakeStoreAPI.
- Renderiza 3 propiedades por producto: nombre, precio y categoría.
- Diseño en cuadrícula con TailwindCSS.
- Loader animado mientras carga la API.
- Manejo básico de errores y contador de productos cargados.

### 🔗 Navegación
- Barra superior con enlaces activos (Inicio, Productos).
- Sistema SPA con React Router DOM.

### 🎨 Estilos
- TailwindCSS aplicado globalmente.
- Diseño limpio, moderno y totalmente responsivo.

---

## 🎥 Video demostrativo (2–3 min)



## 👨‍💻 Autor

**Luis Galván**  
Proyecto desarrollado como parte del curso **Desarrollo de Aplicaciones Empresariales – TECSUP 2025-II**  
