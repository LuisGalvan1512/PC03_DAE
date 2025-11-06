import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Productos from "../paginas/Productos";

function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">🛍️ FakeStore Catalog</h1>
      <p className="text-gray-700">Explora nuestra colección de productos.</p>
      <Link
        to="/productos"
        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ver productos
      </Link>
    </div>
  );
}

export default function AppRutas() {
  return (
    <BrowserRouter>
      <nav className="flex justify-center gap-6 p-4 bg-gray-200">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}
