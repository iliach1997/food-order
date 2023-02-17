import React, {useState} from 'react';
import CartProvaider from './store/CartProvaider';
import Meals from './components/Meals/Meals'
import Header from './components/Layout/Header'
import Cart from './components/Cart/Cart';
function App() {
  const[open,setOpen]=useState(false);

  const showCartHendler=()=>{
   setOpen(true)
  }
  const hideCarthendler=()=>{
   setOpen(false)
  }
  return (
 <CartProvaider>
 {open&& <Cart onClose={hideCarthendler}/>}
     <Header onOpen={showCartHendler}/>
     <main>
     <Meals/>
     </main>
</CartProvaider>
  );
}

export default App;
