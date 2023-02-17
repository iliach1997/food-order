import { useRef ,useState} from 'react';
import Input from '../../UI/Card/Input';
import classes from './MealItemForm.module.css';


const MealItemForm=(props)=>{
   const [isValid,setvalid]=useState(true)
   const amountInputRef=useRef()
   const submitHendler=(event)=>{
      event.preventDefault();
      const enterdAmount=amountInputRef.current.value;
      const enteredAmountNumber=+enterdAmount;
      if(enterdAmount.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>5){
         setvalid(false)
          return 
       } 
       props.onAddToCart(enteredAmountNumber)
   }
return<form className={classes.form} onSubmit={submitHendler}>
   <Input ref={amountInputRef}label='Amount' input={{id:'amount',type:'number',min:'1',max:'5',step:'1',defaultValue:'1'}}/> 
   <button>+ADD</button>
   {!isValid&&<p>invalid input </p>}
</form>
}
export default MealItemForm