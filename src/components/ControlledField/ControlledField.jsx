import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        
        // if (password.length < 6) {
        //     setError('Password must be at least 6 characters');
        // }
        // else {
        //     setError('');
        // }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handleNameChange = e => {
        setName(e.target.value);
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
                    type="text" 
                    onChange={handleNameChange}
                    defaultValue={name}
                    name='name' 
                    placeholder='Your name' 
                    required 
                />
                <br />
                <input 
                    type="email" 
                    defaultValue={email}
                    name='email' 
                    onChange={handleEmailChange}
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