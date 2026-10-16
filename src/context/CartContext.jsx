import { createContext, useEffect,
     useMemo, useState } from "react";

// initalizing the CartContext using createContext()
export const CartContext = createContext(null);

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

    function addTOCart(product){
        setCartItem((currentItems) => {
            // Dealing with the case of item already in cart
            const existingItem = currentItems.fine((item) => item.id == product.id);

                if (existingItem){
                    // increase quantity of that item and updata cart context
                    return currentItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
                }

            //In case the item was not in cart already,I'll return the existing array of items added with the new item
                return[
                    ...currentItems,
                    {
                        id : product.id,
                        title : product.title,
                        price : product.price,
                        thumbnail : product.thumbnail,
                        quantity : 1
                    }
                ];
        })
    }
    // Remove Cart
    function removeFromCart(productId){
        setCartItem((currentItems) => currentItems.filter((item) => item.id !== productId));
    }

    // update CArt Quantity
    function updateQuantity(productId, Quantity){
        if (quantity <= 0){
            removeFromCart(productId);
            return; // exiting the function
        }

        setCartItem((currentItems) => currntItem.map((item) => item.id === productId ?{...item, quantity} : item));
    }

    // clear Cart
    function clearCart(){
        setCartItem([]);
    }

    // cartCount, cartTotal
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartToal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Set the values for context, use useMemo
    const value = useMemo( //useMemo is short for
        () => ({
           cartItems,
           cartCount,
           cartTotal,
           addToCart,
           removeFromCart,
           updateQuantity,
           clearCart
        }), [cartItems, cartCount, cartTotal]
    )

    // Return the CartContext Provider
    return (
        <CartContext.Provider value = {value}>
             {children}
        </CartContext.Provider>
    );
}