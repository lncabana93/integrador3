import { useContext } from 'react';
import './Card.scss'
import CarritoContext from '../context/CarritoContext';


const Card = ( { producto } ) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    //console.log(producto)
    console.log('Agregando el producto al carrito...')
    agregarProductoAlCarritoContext(producto)
  }

  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img
            src={producto.foto}
            alt={producto.nombre}
            className="card__image"
          />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>
              {producto.descripcion}
            </p>
            <div className="rating_star">
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star" for="star-1"><i className="fa-solid fa-star"></i></label>
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star"  for="star-2"><i className="fa-solid fa-star"></i></label>
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star"  for="star-3"><i className="fa-solid fa-star"></i></label>
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star"  for="star-4"><i className="fa-solid fa-star"></i></label>
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star"  for="star-5"><i className="fa-solid fa-star"></i></label>
                  </div>
            <button onClick={() => handleAgregar(producto)} className="carrito_compra"  ><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
