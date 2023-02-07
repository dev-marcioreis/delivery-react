import './style.css'
import Menu from './Menu'
import Banner from './banner/Banner'
import { AiFillHome as Home, AiFillHeart as Favorite, AiFillSetting as Setting } from 'react-icons/ai'
import { BsFillChatFill as Chat } from 'react-icons/bs'
import { FaUserAlt as Account } from 'react-icons/fa'
import { MdBorderColor as Sumarize } from 'react-icons/md'
import { useEffect } from 'react'
import { AiOutlineArrowRight as Arrow } from 'react-icons/ai'
import categoryItems from './categoryItems'

const Main = () => {

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
        <main className="main">
            <div className="container">
                <Banner />
                <div className="main__container">
                    <div className="category">
                        <div className="category__container">
                            <h3>opções</h3>
                            <div className="view-all">
                                <p>todos</p>
                                <i><Arrow /></i>
                            </div>
                        </div>
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
                <div className="right__menu">
                    <p>Right Menu</p>
                </div>
            </div>
        </main>
        <div className="bottom__menu">
            <ul className='bottom__menu-list' id="menu">
                <Menu link={'#'} icon={<Home />} />
                <Menu link={'#'} icon={<Chat />} />
                <Menu link={'#'} icon={<Account />} />
                <Menu link={'#'} icon={<Favorite />} />
                <Menu link={'#'} icon={<Sumarize />} />
                <Menu link={'#'} icon={<Setting />} />
            </ul>
        </div>
    </>
  )
}

export default Main