import React from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css';

const FamilyTree = () => {

    const asset = 'diamond';

    return (
        <div className='family-tree'>
            <h1>Family Tree</h1>
            <Grandpa asset={asset}/>
        </div>
    );
};

export default FamilyTree;