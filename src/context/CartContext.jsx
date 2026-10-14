import { creteContext, useContext, useEffect,
     useMemo, useState } from "react";

// nitalizing the CartContext using createContext()
const CartContext = createContext(null);

// using brower local storage to store the information
// This hepls keep the cart data intact even during refreshes
const STORAGE_KEY = "shopkart_cart";

function loadCart(){
    try {
        // Trying to retrieve the stirage data, or return empty array
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }
    catch { 
        // Retun as empty array as cart in case Error in getting local storage
        return [];
    }
}

export function CartProvider({children}){
    const [cartItems, setCartItem ] = useState(loadCart);

    useEffect(() => {
        // Whenever cartItems tate in updated, overwrite the existing localStorage item for cart 
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    },[cartItems]);

    function addTOCart(products){
        
    }
}
