import { Link, useLocation } from "react-router-dom";

export default function Encabezado() {
  const location = useLocation();

  const enlaceActivo = (ruta) =>
    location.pathname === ruta
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🛍️ FakeStore
        </Link>

        <div className="flex gap-6 text-lg">
          <Link to="/" className={enlaceActivo("/")}>
            Inicio
          </Link>
          <Link to="/productos" className={enlaceActivo("/productos")}>
            Productos
          </Link>
        </div>
      </nav>
    </header>
  );
}
