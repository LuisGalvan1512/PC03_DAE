import axios from "axios";

const URL_API = "https://fakestoreapi.com/products";

/**
 * Obtiene todos los productos de la API pública
 * @returns {Promise<Array>} lista de productos
 */
export async function obtenerProductos() {
  try {
    const respuesta = await axios.get(URL_API);
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
}
