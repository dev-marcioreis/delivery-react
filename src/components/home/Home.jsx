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


const Home = () => {

    const [productData, setProductData] = useState(
        items.filter(elem => elem.itemId === 'all')
    )

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

    }, [productData]);


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
                    <div className="cart__container">
                        <div className="cart-items">
                            <CartItems name={'Burger'} img={'https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0'} price={'29.90'} />
                        </div>
                    </div>
                    <div className="cart-total">
                        <h3>total</h3>
                        <span>R$ 29.90</span>
                    </div>
                    <button className='check-out'>pagar</button>
                </div>
                <Menu />
            </div>
        </main>
    </>
  )
}

export default Home