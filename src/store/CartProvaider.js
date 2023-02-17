import { useReducer } from "react";
import CartContext from "./cart-context";

const defaulContext={
  items:[],
  totalAmount:0,
}
const cartReducer=(state,actions)=>{
if(actions.type==='ADD'){
const updatedToTotalAmount=state.totalAmount+actions.item.price*actions.item.amount;
const existingCartItemIndex=state.items.findIndex((e)=>e.id===actions.item.id);
const existingCartItem=state.items[existingCartItemIndex]
let updatedItems;
if(existingCartItem){
const updatedItem={
  ...existingCartItem,
  amount:existingCartItem.amount+actions.item.amount
}
updatedItems=[...state.items];
updatedItems[existingCartItemIndex]=updatedItem

}else{
  updatedItems=state.items.concat(actions.item)

}


// if(actions.type==="ADD"){
// const updatedToTotalAmount=state.totalAmount+actions.item.price*actions.item.amount;
// const existingCartItemIndex=state.items.findIndex((item)=>item.id===actions.item.id);
// const existingCartItem=state.items[existingCartItemIndex];
// let updatedItems;
// if(existingCartItem){
//   const updatedItem={
//     ...existingCartItem,
//     amount:existingCartItem.amount+actions.item.amount}

//  updatedItems=[...state.items];
//  updatedItems[existingCartItemIndex]=updatedItem

// }else{
// updatedItems=state.items.concat(actions.item)
// }
return{items:updatedItems,totalAmount:updatedToTotalAmount}

}
if(actions.type==="DEL"){

const existingCartItemIndex=state.items.findIndex(e=>e.id===actions.id)
const existingCartItem=state.items[existingCartItemIndex]
const updatedToTotalAmount=state.totalAmount-existingCartItem.amount;
let updatedItems;
if(existingCartItem.amount===1){
  updatedItems=state.items.filter(e=>e.id!==actions.id)
}else{
  const updatedItem={
    ...existingCartItem,
    amount:existingCartItem-1
  }
  updatedItems=[...state.items];
  updatedItems[existingCartItemIndex]=updatedItem
}








  







  // const existingCartItemIndex=state.items.findIndex((item)=>item.id===actions.id);
  // const existingCartItem=state.items[existingCartItemIndex];
  // const updatedToTotalAmount=state.totalAmount-existingCartItem.price
  // let updatedItems;
  // if(existingCartItem.amount===1){
  //   updatedItems=state.items.filter((item)=>item.id!==actions.id)
  // }else{
  //   const updatedItem={
  //     ...existingCartItem,
  //      amount:existingCartItem.amount-1
  //   }
  //   updatedItems=[...state.items];
  //   updatedItems[existingCartItemIndex]=updatedItem
  // }

  return{items:updatedItems,totalAmount:updatedToTotalAmount}

}
  return defaulContext;
}



const CartProvaider=(props)=>{
const[cartState,dispachCartAction]=useReducer(cartReducer,defaulContext);

const addToItemCart=(item)=>{
  dispachCartAction({type:"ADD",item:item})
}
const removeToCartItem=(id)=>{
  dispachCartAction({type:"DEL",id:id})
}
const cartContext={
items:cartState.items,
totalAmount:cartState.totalAmount,
addItem:addToItemCart,
removeItem:removeToCartItem
}
return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
export default CartProvaider













// import { useReducer } from "react";
// import CartContext from "./cart-context";
// const defaultCartState={
//     items:[],
//     totalAmount:0
// };
// const cartReduser=(state,action)=>{
// if(action.type==="ADD"){
//   const updatedItem=state.items.concat(action.item);
//   console.log(updatedItem)
//   const updateTotalAmount=state.totalAmount+action.item.price*action.item.amount;
//   return {
//     items:updatedItem,
//     totalAmount:updateTotalAmount
//   }
// }

// return defaultCartState;
// };
// const CartProvaider=(props)=>{
  
//      const[cartState,dispachCartAction]=useReducer(cartReduser,defaultCartState)
//     const addItemCart=(item)=>{
//       console.log(item)
//      dispachCartAction({type:'ADD',item:item})
//     }
//     const removeItemCart=(id)=>{
//      dispachCartAction({type:"DEL",id:id})
//     }

    // const cartContext={
    //     item:cartState.items,
    //     totalAmount:cartState.totalAmount,
    //     addItem:addItemCart ,
    //     removeItem:removeItemCart
    // };
//     console.log(cartContext,'ilo')
// return <CartContext.Provider value={cartContext}>
//     {props.children}
// </CartContext.Provider>
// };
// export default CartProvaider;