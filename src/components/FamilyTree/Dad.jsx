import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <MySelf asset={asset}/>
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Dad;