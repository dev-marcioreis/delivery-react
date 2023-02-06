import './main.css'
import Menu from './Menu'
import { AiFillHome as Home, AiFillHeart as Favorite, AiFillSetting as Setting } from 'react-icons/ai'
import { BsFillChatFill as Chat } from 'react-icons/bs'
import { FaUserAlt as Account } from 'react-icons/fa'
import { MdBorderColor as Sumarize } from 'react-icons/md'

const Main = () => {
  return (
    <>
        <main className="main">
            <div className="container">
                <div className="main__container">
                    <p>main container</p>
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
                <div className="indicato"></div>
            </ul>
        </div>
    </>
  )
}

export default Main