import './home.css'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Category from '../category/Category'
import Menu from '../bottomMenu/BottomMenu'

import { useEffect } from 'react'
import Cart from '../cart/Cart'



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
            <Header />
            <div className="container">
                <Banner />
                <div className="main__container">
                    <Category />
                </div>
                <div className="right__menu">
                    <Cart />
                </div>
                <Menu />
            </div>
        </main>
    </>
  )
}

export default Home