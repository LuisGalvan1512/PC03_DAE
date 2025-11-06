import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-blue-100 text-center px-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
        🛍️ FakeStore Catalog
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl mb-6">
        Bienvenido al catálogo de productos falsos de FakeStore. Aquí podrás explorar artículos de prueba 
        obtenidos desde una API pública, ideales para tus proyectos de frontend.
      </p>
      <Link
        to="/productos"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Explorar productos
      </Link>
    </section>
  );
}
