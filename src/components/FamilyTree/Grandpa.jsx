import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({asset}) => {
    return (
        <div>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Dad asset={asset}/>
                <Uncle />
                <Aunt asset={asset}/>
            </section>
        </div>
    );
};

export default Grandpa;