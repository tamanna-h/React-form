import React from 'react';
import Special from './Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h3>MySelf</h3>
            <Special asset={asset}/>
        </div>
    );
};

export default MySelf;