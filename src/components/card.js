import '../Style/card.css'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Card(props){
    const {cart}=props
    // const {id,title,size,brand,type,price}=cart
    return(
        <div className="yourcard">
            <div className="image">
                <img src={require(`../assets/${cart.id}.jpg`)}></img>
            </div>
            <div className='details'>
                <h3>{cart.title} <small>{cart.size}</small></h3>
                <p><FontAwesomeIcon icon={faHeart} /> your daily routine and you feel fresh and ready for the day and every day.</p>
                <h4>Brand: {cart.brand}</h4>
                <h4>Type:{cart.type}</h4>
                <h4 className='card-price'>{cart.price}</h4>
                <h6>All prices include VAT.</h6>
                <button>Add To Cart</button>

                
            </div>

        </div>
    );
}
 export default  Card;