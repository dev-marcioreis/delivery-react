import './home.css'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Menu from '../bottomMenu/BottomMenu'

import categoryItems from './category/categoryItems'

import { useEffect, useState } from 'react'
import Cart from '../cart/Cart'
import Products from '../products/Products'

import items from '../products/productsItems'


const Home = () => {

    const [productData, setProductData] = useState(
        items.filter(elem => elem.itemId === 'all')
    )

    useEffect(() => {
        const menuLi = document.querySelectorAll('.menu__link .menu-icon')
        function setMenuActive() {
            menuLi.forEach(elem => elem.classList.remove('active'))
            this.classList.add('active')
        }
        menuLi.forEach(elem => elem.addEventListener('click', setMenuActive))

    }, [productData]);


  return (
    <>
        <main className="home">
            <div className="container">
                <Header />
                <Banner />
                <div className="category">
                    <div className='category__container'>
                        {
                            categoryItems.map(value => (
                                <div className="row__content" key={value.id}>
                                    <div className="category__card">
                                        <div className="image-box">
                                            <img src={value.img} alt={value.name} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
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