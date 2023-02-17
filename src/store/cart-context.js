import React from "react";

const CartContext=React.createContext({
items:[],
totalAmount:0,
addItem:()=>{},
removeItem:()=>{}
})
export default CartContext;


// import React from "react";

// const CartContext=React.createContext({
//     items:[],
//     totalAmount:0,
//     addItem:()=>{},
//     removeItem:()=>{}
// });
// export default CartContext;