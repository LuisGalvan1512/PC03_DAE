import { useEffect, useState } from "react";
import { obtenerProductos } from "../servicios/productosServicio";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      const data = await obtenerProductos();
      setProductos(data);
      setCargando(false);
    }
    cargarDatos();
  }, []);

  if (cargando) {
    return <p className="text-center mt-10 text-gray-600">Cargando productos...</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="border rounded-lg shadow hover:shadow-lg p-4 bg-white transition"
        >
          <img
            src={producto.image}
            alt={producto.title}
            className="h-40 object-contain mx-auto mb-3"
          />
          <h3 className="font-semibold text-gray-800 text-center line-clamp-2 mb-2">
            {producto.title}
          </h3>
          <p className="text-blue-600 font-bold text-center">${producto.price}</p>
        </div>
      ))}
    </div>
  );
}
