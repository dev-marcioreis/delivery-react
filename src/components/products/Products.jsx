import './products.css'
import { RiStarSFill as Stars } from 'react-icons/ri'
import { MdAddShoppingCart as AddCart } from 'react-icons/md'
import { useEffect, useState } from 'react'
import items from './productsItems'
import { useStateValue } from '../../Provider'
import { actionType } from '../../reducer'

let cartData = []

const Products = ( {itemId, img, name, price} ) => {

    const [isCart, setCart] = useState(null)
    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        if(isCart) {
            cartData.push(isCart)
            dispatch({
                type: actionType.setCart,
                cart: cartData
            })
        }
    }, [isCart])

  return (
    <>
        <section className='products__container'>
            <div className="products__card" id={itemId}>
                <div className="products-image">
                    <img src={img} alt={name} />
                 </div>
                 <div className="product-content">
                    <h3 className='name'>{name}</h3>
                    <div className="bottom-content">
                        <div className="ratings">
                            {
                                Array.apply(null, {length: 5}).map((elem, index) => (
                                    <i className='rating' key={index}><Stars /></i>
                                ))
                            }
                        </div>
                        <h3 className="price"><span>R$</span> {price}</h3>
                        <div className="add-item">
                            <button className='add-cart' onClick={() => setCart(items.find(elem => elem.id === itemId))}><i><AddCart /></i></button>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    </>
  )
}

export default Products