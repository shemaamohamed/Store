import { useNavigate } from 'react-router-dom';
import '../Style/card.css'
import Card from './card';
import React, { useEffect, useState } from 'react';

//extract
function Cards(props) {
   const {isUser ,cart}=props;
   const navigate =useNavigate();
   useEffect(() => {
    const triggerChange = setInterval(() => {
        localStorage.getItem("product");
    }, 100);
    // cleanup function clear the interval
    return () => {
      // clear the interval for performance and memory and avoid memory leak
      clearInterval(triggerChange);
    };
  }, []);

       const deletecard=(cart)=>{
           console.log(cart);
           fetch(`http://localhost:3001/products/${cart.id}`,{
            method:"Delete",
        })
    }
       const addcard=(cart)=>{    
        localStorage.setItem("product",JSON.stringify(cart));
         navigate('/buy');
        // <Card cart={cart}/>
        
         }
        //    setShowCard(true);
        return(
            <>
             <div className="card">
                <img src={require(`../assets/${cart.id}.jpg`)} alt="Red t-shirt with a logo" />
                <h6>{cart.title}<small>({cart.size})</small></h6>
                <h6 className="price">{cart.price}</h6>
                {isUser && <button onClick={()=>addcard(cart)}>Add to cart</button>}
                {!isUser && <button onClick={()=>deletecard(cart)}>Delete cart</button>}
            </div>
                {/* {showCard && <Card cart={cart} />} */}
            </>
               

             
           
        );
}
export default Cards;