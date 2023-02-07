import './category.css'
import { AiOutlineArrowRight as Arrow } from 'react-icons/ai'
import categoryItems from './categoryItems'

const Category = () => {
  return (
    <>
        <div className="category">
            <div className="category__content">
                <h3>opções</h3>
                    <div className="view-all">
                        <p>todos</p>
                        <i><Arrow /></i>
                    </div>
            </div>
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
    </>
  )
}

export default Category