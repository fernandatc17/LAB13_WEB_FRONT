import axios from 'axios';

const PRODUCTO_API_BASE_URL = "http://localhost:8080/api/v1/productos";

class ProductoService {

    // Obtener todos los productos
    getAllProductos() {
        return axios.get(PRODUCTO_API_BASE_URL);
    }

    // Crear un nuevo producto
    createProducto(producto) {
        return axios.post(PRODUCTO_API_BASE_URL, producto);
    }

    // Obtener un producto por ID
    getProductoById(productoId) {
        return axios.get(`${PRODUCTO_API_BASE_URL}/${productoId}`);
    }

    // Actualizar un producto
    updateProducto(productoId, producto) {
        return axios.put(`${PRODUCTO_API_BASE_URL}/${productoId}`, producto);
    }

    // Eliminar un producto
    deleteProducto(productoId) {
        return axios.delete(`${PRODUCTO_API_BASE_URL}/${productoId}`);
    }
}

export default new ProductoService();
