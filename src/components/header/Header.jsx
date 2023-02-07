import './header.css'
import { RiRestaurant2Fill as LogoIcon } from 'react-icons/ri'
import { MdDeliveryDining as Delivery } from 'react-icons/md'
import { BsFillArrowLeftSquareFill as Menu } from 'react-icons/bs'

const Header = () => {
  return (
    <>
        <header className='header'>
            <div className="container flex1">
                <i className="logo"><LogoIcon /></i>
                <div className="header__cart">
                    <i className='delivery-icon'><Delivery /></i>
                    <div className="cart__content">
                        <small>0</small>
                    </div>
                </div>
            </div>
            <div className="toggle-menu">
                <i className='toggle-icon'><Menu /></i>
            </div>
        </header>
    </>
  )
}

export default Header