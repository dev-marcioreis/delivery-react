import './products.css'
import { RiStarSFill as Stars } from 'react-icons/ri'
import { MdAddShoppingCart as AddCart } from 'react-icons/md'

const Products = ( {img, name, ratings, price } ) => {
  return (
    <>
        <section className='products__container'>
            <div className="products__card">
                <div className="products-image">
                    <img src={img} alt={name} />
                </div>
                <div className="product-content">
                    <h3 className='name'>{name}</h3>
                    <div className="bottom-content">
                        <div className="ratings">
                            {
                                Array.apply(null, {length: 5}).map((elem, index) => (
                                    <i className='rating' key={index}><Stars /></i>
                                ))
                            }
                        </div>
                        <h3 className="price"><span>R$</span> {price}</h3>
                        <div className="add-item">
                            <button className='add-cart'><i><AddCart /></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products__card">
                <div className="products-image">
                    <img src={img} alt={name} />
                </div>
                <div className="product-content">
                    <h3 className='name'>{name}</h3>
                    <div className="bottom-content">
                        <div className="ratings">
                            {
                                Array.apply(null, {length: 5}).map((elem, index) => (
                                    <i className='rating' key={index}><Stars /></i>
                                ))
                            }
                            <h3 className="price"><span>R$</span> {price}</h3>
                        </div>
                        <div className="add-item">
                            <button className='add-cart'><i><AddCart /></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Products