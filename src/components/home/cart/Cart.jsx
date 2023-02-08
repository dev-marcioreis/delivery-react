import './cart.css'
import { MdOutlineRemoveShoppingCart as Empty } from 'react-icons/md'

const Cart = () => {
  return (
    <>
        <section className="cart">
          <div className="cart__empty">
            <p>Seu carrinho está vazio.</p>
            <i className='empty__logo'><Empty /></i>
          </div>
        </section>
    </>
  )
}

export default Cart