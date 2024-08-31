import '../Style/card.css'
import Card from './card';
import React, { useState } from 'react';

//extract
function Cards(props) {
        const [showCard, setShowCard] = useState(false); // State to control Card rendering
        // const clearAllCards = () => {
        //         // Access all elements with the class 'card'
        //         const cardElements = document.getElementsByClassName('card');
        //         // Loop through each element and clear its innerHTML
        //         for (let i = 0; i < cardElements.length; i++) {
        //             cardElements[i].innerHTML = ''; // Clear the content of each card element
        //         }
        //     };
        

       const yourcard=(cart)=>{
           console.log(cart);
           setShowCard(true);
        //    clearAllCards();
        }
        const {cart}=props
        return(
            <>
             <div className="card">
                <img src={require(`../assets/${cart.id}.jpg`)} alt="Red t-shirt with a logo" />
                <h6>{cart.title}<small>({cart.size})</small></h6>
                <h6 className="price">{cart.price}</h6>
                <button onClick={()=>yourcard(cart)}>Add to cart</button>
            </div>
                {showCard && <Card cart={cart} />}
            </>
               

             
           
        );
}
export default Cards;