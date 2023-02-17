import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Card/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'


const Cart=(props)=>{
    const ctx=useContext(CartContext);
    console.log(ctx.items)
    const totalAmount=`$${ctx.totalAmount.toFixed(2)}`;
    const hesItems=ctx.items.length>0;

    const cartItemRemove=(id)=>{
ctx.removeItem(id)
    }
    const cartItemAdd=(item)=>{
     ctx.addItem({...item,amount:1})
    }
    const cartItems=(
    <ul className={classes['cart-items']}>
    {ctx.items.map((item)=>(
    <CartItem 
    key={item.id}
    name={item.name}
    amount={item.amount}
    price={item.price}
    pro={item.pro}
    onRemove={cartItemRemove.bind(null,item.id)} 
    onAdd={cartItemAdd.bind(null,item)}/>))}
    </ul>)

    return<Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span className={classes.total}>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
         <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
         {hesItems&&<button className={classes.button}>Order</button>}
           </div> 
        </Modal>

}
export default Cart