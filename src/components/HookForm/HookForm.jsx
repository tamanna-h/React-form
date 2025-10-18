import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange}/>
                <br />
                <input defaultValue={email} type="email" onChange={emailOnChange} />
                <br />
                <input defaultValue={password} type="password" onChange={passwordOnChange} />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;