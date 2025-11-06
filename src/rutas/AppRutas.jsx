import { BrowserRouter, Routes, Route } from "react-router-dom";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import Home from "../paginas/Home";
import Productos from "../paginas/Productos";

export default function AppRutas() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Encabezado />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </main>

        <Pie />
      </div>
    </BrowserRouter>
  );
}
