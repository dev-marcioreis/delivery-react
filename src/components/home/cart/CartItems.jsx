import { useEffect, useState } from 'react'
import './cartItems.css'
import { useStateValue } from '../../../Provider'
let cartItems = []

const CartItems = ( {name, img, price, itemId} ) => {

    const [cartQuantity, setCartQuantity] = useState(1)
    const [{cart}, dispatch] = useStateValue()
    const [itemPrice, setItemPrice] = useState(parseInt(cartQuantity) * parseFloat(price))

    useEffect(() => {
        cartItems = cart
        setItemPrice(parseInt(cartQuantity) * parseFloat(price))
    }, [cartQuantity])

    const upQuantity = (action, id) => {
        if(action === 'add') {
            setCartQuantity(cartQuantity +1)
        } else {
            setCartQuantity(cartQuantity -1)
        }
    } 
    

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
                            <button onClick={() => upQuantity('remove', itemId)}>-</button>
                            <button onClick={() => upQuantity('add', itemId)}>+</button>
                        </div>
                    </div>
                </div>
                <div className="item-price">
                    <span className='price'>R$ {itemPrice.toFixed(2)}</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default CartItems