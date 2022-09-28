import { ProductosDao, CarritoDao } from "../daos/selectorDeDaos.js"
const productosService = ProductosDao

const getProductosService = async (id) => {
    if (id) {
        const productoById=await productosService.getById(id)
        return productoById
    } else {
        const productosEnviar = await productosService.getAll()
        return productosEnviar
    }
}

const postProductosService = async (producto) => {
        const productoPost = await productosService.save(producto)
        return productoPost
}

const editProductosService = async (producto, id) => {
        const changeProducto = await productosService.changeById(producto, id)
        return changeProducto
}

const deleteProductosService = async (id) => {
        const deleteProducto = await productosService.deleteById(id)
        return deleteProducto
}


export {
    getProductosService,
    postProductosService,
    editProductosService,
    deleteProductosService,
    productosService
}
