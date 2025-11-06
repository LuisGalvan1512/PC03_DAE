import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../paginas/Home";
import Productos from "../paginas/Productos";

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
