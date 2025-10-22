import React, { createContext } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css';

export const AssetContext = createContext('');

const FamilyTree = () => {

    const asset = 'diamond';
    const newAsset = 'gold';

    return (
        <div className='family-tree'>
            <h1>Family Tree</h1>
            <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}/>
            </AssetContext.Provider>
            
        </div>
    );
};

export default FamilyTree;