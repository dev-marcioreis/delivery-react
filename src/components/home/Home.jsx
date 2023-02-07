import './home.css'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Category from '../category/Category'
import Menu from '../bottomMenu/BottomMenu'

import { useEffect, useState } from 'react'
import Cart from '../cart/Cart'
import Products from '../products/Products'

import items from '../products/productsItems'


const Home = () => {

    const [productData, setProductData] = useState(
        items.filter(elem => elem.itemId === 'buger')
    )

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
                <div className='products__container'>
                    {
                        productData && productData.map(product => (
                            <Products itemId={product.id} img={product.imgSrc} name={product.name} price={product.price} key={product.id} />
                        ))
                    }
                </div>
                <Cart />
                <Menu />
            </div>
        </main>
    </>
  )
}

export default Home