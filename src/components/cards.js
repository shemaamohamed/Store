import { useNavigate } from 'react-router-dom';
import '../Style/card.css'
import Card from './card';
import React, { useEffect} from 'react';

//extract
function Cards(props) {
   const {isUser ,cart}=props;
   const navigate =useNavigate();
       const deletecard=(cart)=>{
           console.log(cart);
           fetch(`http://localhost:3001/products/${cart.id}`,{
            method:"Delete",
        })
    }
       const showcard=(cart)=>{    
        localStorage.setItem("product",JSON.stringify(cart));
        const m=JSON.parse(localStorage.getItem("product"));
        console.log(m.id);
        navigate('/buy');
         }
        return(
            <>
             <div  className="card">
                <div onClick={()=>showcard(cart)}>
                <img tabindex="0"  src={require(`../assets/${cart.id}.jpg`)} alt="Red t-shirt with a logo" />
                <h6>{cart.title}<small>({cart.size})</small></h6>
                <h6 className="price">{cart.price}</h6></div>
                
                {isUser && <button >Add to cart</button>}
            {!isUser && <button onClick={()=>deletecard(cart)}>Delete cart</button>}  
            </div>
            </>
               

             
           
        );
}
export default Cards;