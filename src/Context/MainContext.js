import { createContext, useState } from 'react';
import React from 'react';

export const MainContext = createContext();

function MainContextProvider(props) {
    const [itemData, setItemData] = useState([]);
    const [foundItem, setFoundItem] = useState([]);
    const [cart, setCart] = useState([]);
    return (
        <MainContext.Provider
            value={{
                itemData,
                setItemData,
                foundItem,
                setFoundItem,
                cart,
                setCart,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}
export default MainContextProvider;
