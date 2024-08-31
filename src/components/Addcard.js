import { useState } from 'react';
import '../Style/card.css'




function AddCard(){
    const[id,setId]=useState('');
    const[title,setTitle]=useState('');
    const[size,setSize]=useState('');
    const[price,setPrice]=useState('');
    const[brand,setBrand]=useState('');
    const[type,setType]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        const product = { id, title, size, price, brand, type };
         
        setId('')
        setTitle('')
        setSize('')
        setPrice('')
        setBrand('')
        setType('')
    }

    return(
        <form onSubmit={handleSubmit} className='add-card-form'>
            <h2>Add product</h2>
            <div className='form-group'>
                <label htmlFor='id'>Id</label>
                <input
                    type="text"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='author'>Author</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='size'>Size</label>
                <input
                    type="text"
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='price'>Price</label>
                <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='brand'>Brand</label>
                <input
                    type="text"
                    id="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='type'>Type</label>
                <input
                    type="text"
                    id="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </div>
            <button type='submit' className='submit-btn'>AddProduct</button>
        </form>
    );
}
 export default  AddCard;