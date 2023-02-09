import { useState } from 'react'
import './cartItems.css'

const CartItems = ( {name, img, price, itemId} ) => {

    const [cartQuantity, setCartQuantity] = useState(1)
    

  return (
    <>
        <section className='cart'>
            <div className="cart-item">
                <div className="item-image">
                    <img src={img} alt={name} />
                </div>
                <div className="item-section">
                    <span className='count'>{cartQuantity}</span>
                    <h3 className="item-name">{name}</h3>
                    <div className="item-quantity">
                        <div className="quantity">
                            <button>-</button>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="item-price">
                    <span className='price'>R$ {price}</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default CartItems