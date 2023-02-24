
import { useState } from "react";
import AppContext from "./AppContext";
import { toast } from "react-hot-toast";

function AppProvider({children}){
    let [storeName,setStoreName] = useState("My ECommerce Store");

    let [brandName,setBrandName] = useState("My Brand Name");

    let [cart,setCart] = useState([]);

    function addProductToCart (product){
        setCart([...cart,product]);
        console.log(cart);
        toast.success("Product Added To Cart")

    }

    function consoleLog(){
        console.log("Console Loggin...")
    }

    function updateStoreName(){
        console.log("...")

        setStoreName("My New Store")
    }
    
    return(
    <AppContext.Provider value={{storeName,brandName,consoleLog,updateStoreName,cart,addProductToCart}}>
        {children}
    </AppContext.Provider>
    )
}

export default AppProvider