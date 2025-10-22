import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error, setError] = useState('');

    const handleProductSubmit = e => {
        e.preventDefault();
        // console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity);
        
        if(name.length === 0){
            setError('Product name is required');
            return;
        }
        else if(price.length === 0){
            setError('Product price is required');
            return;
        }
        else if(quantity.length === 0){
            setError('Product quantity is required');
            return;
        }
        else if (price < 0){
            setError('Product price should be greater than 0');
            return;
        }
        else if (quantity < 0){
            setError('Product quantity should be greater than 0');
            return;
        }
        else{
            setError('');
        }

        const newProduct = {
            name, 
            price, 
            quantity
        };
        // console.log(product);
        if(!error){
            handleAddProduct(newProduct);
        }
    }

    return (
        <div>
            <h2>Add a Product</h2>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product Price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;