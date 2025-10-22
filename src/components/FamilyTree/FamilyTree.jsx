import React, { createContext, use, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css';

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money, setMoney] = useState(0);

    const asset = 'diamond';
    const newAsset = 'gold';

    return (
        <div className='family-tree'>
            <h1>Family Tree</h1>
            <h4>Total Family Money: {money}</h4>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}/>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;