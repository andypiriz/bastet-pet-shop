import './Item.css'

const Item = ({ name, img }) => {
    return (
        <li>
            <img src={img} alt={name} />
            {name}
            <button className='ver-mas-btn'>Ver más</button>
        </li>
    )
}

export default Item