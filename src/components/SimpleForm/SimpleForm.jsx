import React from 'react';

const SimpleForm = () => {
    
    const handleSubmit = (e) => {
            e.preventDefault();
            // console.log('form submitted');
            // console.log(e);
            // console.log(e.target);
            // console.log(e.target.name);
            console.log(e.target.name.value);
            console.log(e.target.email.value);
        }

    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name='name' 
                placeholder='Your name'/>
                <br />
                <input type="email" 
                name='email'
                placeholder='email'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
        </div>
    );
};

export default SimpleForm;