import './ItemDetail.css'

const ItemDetail = ({ id, name, price, img, description }) => {
    return (
        <div className='ProductDetail'>
            <img src={img} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>${price}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ItemDetail