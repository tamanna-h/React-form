import React from 'react';

const ProductForm = () => {

    const handleProductSubmit = e => {
        e.preventDefault();
        // console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name, price, quantity);
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
        </div>
    );
};

export default ProductForm;