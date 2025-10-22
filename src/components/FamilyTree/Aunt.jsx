import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin asset={asset} name='Tom Tom' />
                <Cousin name='Jannatul' />
            </section>
        </div>
    );
};

export default Aunt;