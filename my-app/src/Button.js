import { Divider } from "@chakra-ui/react";

function Button(props) {
   const Click2buy = () =>{
    props.NameButtonData("Enjoy Summer")
   }
   return(
<div>
  <button onClick={()=>Click2buy()}>Click here</button>
</div>

   );
  }
  
  export default Button;
  