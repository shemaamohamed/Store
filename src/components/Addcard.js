import { useState } from 'react';
import '../Style/card.css'
import { useNavigate } from 'react-router-dom';




function AddCard(){
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        size: '',
        price: '',
        brand: '',
        type: '',
        image: null
      });
      const handleChange=(e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value });

      }
      const navigate =useNavigate()
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:3001/products', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
          }).then((data) => {
              alert('Success Add');
              navigate('/content')

            })
            .catch((error) => {
                alert('Failed to Add');
            });

        
         
        
    }

    return(
        <form onSubmit={handleSubmit} className='add-card-form'>
            <h2>Add product</h2>
            <div className='form-group'>
                <label htmlFor='id'>Id</label>
                <input
                    type="text"
                    id="id"
                    value={formData.id}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='author'>Author</label>
                <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='size'>Size</label>
                <input
                    type="text"
                    id="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='price'>Price</label>
                <input
                    type="text"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='brand'>Brand</label>
                <input
                    type="text"
                    id="Brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='type'>Type</label>
                <input
                    type="text"
                    id="Type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type='submit' className='submit-btn'>AddProduct</button>
        </form>
    );
}
 export default  AddCard;