import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (password.length < 6) {
        //     setError('Password must be at least 6 characters');
        // }
        // else {
        //     setError('');
        // }
    }

    const handlePasswordOnChange = e => {
        // console.log(e.target);
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
        }
        else {
            setError('');
        }
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name='email' 
                    placeholder='email' 
                    required 
                />
                <br />
                <input 
                    type="password" 
                    name="password" 
                    defaultValue={password} 
                    onChange={handlePasswordOnChange} 
                    required 
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>{error}</p>
        </div>
    );
};

export default ControlledField;