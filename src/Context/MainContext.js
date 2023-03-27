import { createContext, useState } from 'react';
import React from 'react';

export const MainContext = createContext();

function MainContextProvider(props) {
 const [itemData, setItemData] = useState([]);
    return (
        <MainContext.Provider
            value={{
                itemData,
                setItemData,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}
export default MainContextProvider;
