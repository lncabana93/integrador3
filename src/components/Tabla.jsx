import './Tabla.scss'
import { useContext } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../context/ProductosContext"

const Tabla = () => {

  const { productos } = useContext(ProductosContext)

  return (
    <table className="tabla-alta input">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Marca</th>
          <th>Categoría</th>
          <th>Detalles</th>
         
        </tr>
      </thead>
      <tbody>

        {
          productos && productos.map( producto => (
            <TablaFila key={producto.id} producto={producto} />
          ))

        }

      </tbody>

    </table>
  )
}

export default Tabla