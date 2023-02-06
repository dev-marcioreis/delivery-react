import './style.css'
import Img from './images/banner.png'

const Banner = () => {
  return (
    <>
        <div className="banner">
          <div className="banner__text">
            <h3>Seja bem vindo!</h3>
            <p>Ganhe <strong>20%</strong> de desconto no seu primeiro pedido.</p>
          </div>
          <img src={Img} alt="Banner img"/>
        </div>
    </>
  )
}

export default Banner