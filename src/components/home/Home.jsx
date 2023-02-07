import './home.css'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Category from '../category/Category'
import Menu from '../bottomMenu/BottomMenu'

import { useEffect } from 'react'
import Cart from '../cart/Cart'
import Products from '../products/Products'



const Home = () => {

    useEffect(() => {
        const menuLi = document.querySelectorAll('.menu__link .menu-icon')
        function setMenuActive() {
            menuLi.forEach(elem => elem.classList.remove('active'))
            this.classList.add('active')
        }
        menuLi.forEach(elem => elem.addEventListener('click', setMenuActive))

    }, []);

  return (
    <>
        <main className="home">
            <div className="container">
                <Header />
                <Banner />
                <Category />
                <Products img={'https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0'} name={'Burger'} ratings={5} price={29.9} />
                <Cart />
                <Menu />
            </div>
        </main>
    </>
  )
}

export default Home