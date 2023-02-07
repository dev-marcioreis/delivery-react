const Menu = ( {link, icon} ) => {
  return (
    <>
        <div className="container menu">
            <li className='menu__link'>
                <a href={link}><span className="menu-icon">{icon}</span></a>
            </li>
        </div>
    </>
  )
}

export default Menu