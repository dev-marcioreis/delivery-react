import './banner.css'
import Img from './banner.png'

const Banner = () => {
  return (
    <>
        <div className="banner flex1">
          <div className="banner__text">
            <h3>Seja bem vindo!</h3>
            <p>Ganhe <strong>20%</strong> de desconto no seu primeiro pedido.</p>
            <button className='banner-btn'>saiba mais</button>
          </div>
          <div className='banner-image'>
            <img src={Img} alt="Banner img"/>
          </div>
        </div>
    </>
  )
}

export default Banner