import React, { useState, useEffect } from 'react';
import ProductoService from '../services/ProductoService';
import { useNavigate, useParams } from 'react-router-dom';

export const AddProductoComponent = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            ProductoService.getProductoById(id).then((response) => {
                const producto = response.data;
                setNombre(producto.nombre);
                setDescripcion(producto.descripcion);
                setPrecio(producto.precio);
                setStock(producto.stock);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);

    const saveOrUpdateProducto = (e) => {
        e.preventDefault();
        
        const producto = { nombre, descripcion, precio, stock };
        
        if (id) {
            ProductoService.updateProducto(id, producto).then(() => {
                navigate('/productos');
            }).catch(error => {
                console.log(error);
            });
        } else {
            ProductoService.createProducto(producto).then(() => {
                navigate('/productos');
            }).catch(error => {
                console.log(error);
            });
        }
    };

    return (
        <div className="container" style={{ marginTop: "80px" }}>
            <h2 className="text-center">{id ? "Editar Producto" : "Agregar Producto"}</h2>
            <form>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <input
                        type="text"
                        className="form-control"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Stock</label>
                    <input
                        type="number"
                        className="form-control"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={saveOrUpdateProducto} style={{ marginTop: "20px" }}>
                    {id ? "Actualizar" : "Guardar"}
                </button>
            </form>
        </div>
    );
};

export default AddProductoComponent;
