import './category.css'
import categoryItems from './categoryItems'

const Category = () => {
  return (
    <>
        <div className="category">
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