import './style.css'
import Menu from './Menu'
import { AiFillHome as Home, AiFillHeart as Favorite, AiFillSetting as Setting } from 'react-icons/ai'
import { BsFillChatFill as Chat } from 'react-icons/bs'
import { FaUserAlt as Account } from 'react-icons/fa'
import { MdBorderColor as Sumarize } from 'react-icons/md'

const BottomMenu = () => {
  return (
    <>
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

export default BottomMenu