import './home.css'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Category from './category/Category'
import Products from '../products/Products'
import InfoCard from './infoCard/InfoCard'
import Menu from '../bottomMenu/BottomMenu'

import { useEffect, useState } from 'react'
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
                <Category />
                <div className='products__container'>
                    {
                        productData && productData.map(product => (
                            <Products itemId={product.id} img={product.imgSrc} name={product.name} price={product.price} key={product.id} />
                        ))
                    }
                </div>
                <div className="right-menu">
                    <div className="info-container">
                        <div className="card">
                            <InfoCard />
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </main>
    </>
  )
}

export default Home