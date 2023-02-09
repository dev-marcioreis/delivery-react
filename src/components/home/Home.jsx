import './home.css'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Category from './category/Category'
import Products from '../products/Products'
import CartItems from './cart/CartItems'
import Menu from '../bottomMenu/BottomMenu'

import { AiOutlineClose as CloseMenu } from 'react-icons/ai'

import { useEffect, useState } from 'react'
import items from '../products/productsItems'
import { useStateValue } from '../../Provider'


const Home = () => {

    const [productData, setProductData] = useState(
        items.filter(elem => elem.itemId === 'all')
    )

    const [{cart}, dispatch] = useStateValue()

    useEffect(() => {
        const menuLi = document.querySelectorAll('.menu__link .menu-icon')
        const closeMenu = document.querySelector('.close-toggle')
        function setMenuActive() {
            menuLi.forEach(elem => elem.classList.remove('active'))
            this.classList.add('active')
        }
        menuLi.forEach(elem => elem.addEventListener('click', setMenuActive))

        closeMenu.addEventListener('click', () => {
            document.querySelector('.right-menu').classList.remove('active')
        })

    }, [productData, cart]);


  return (
    <>
        <main className="home">
            <div className="container">
                <Header />
                <Banner />
                <Category />
                <div className='products__container'>
                    {
                        productData && productData.map(product => (
                            <Products itemId={product.id} img={product.imgSrc} name={product.name} price={product.price} key={product.id} />
                        ))
                    }
                </div>
                <div className="right-menu">
                    <i className='close-toggle'><CloseMenu /></i>
                    <div className='cart-info'>
                        <h2>meu carrinho</h2>
                    </div>
                    {
                        !cart ? <div></div> : <>
                            <div className="cart__container">
                                <div className="cart-items">
                                    {
                                        cart && cart.map(data => (
                                            <CartItems key={data.id} itemId={data.id} name={data.name} img={data.imgSrc} price={data.price} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="cart-total">
                                <h3>total</h3>
                                <span>R$ 29.90</span>
                            </div>
                            <button className='check-out'>pagar</button>
                        </>
                    }
                </div>
                <Menu />
            </div>
        </main>
    </>
  )
}

export default Home