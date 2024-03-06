import React, { useEffect, useState } from "react";
import "./App.css"
function Checkout({cart,setCart,handleChange}){

    
    

    const [totalAmount,setTotalAmount]=useState(0);
    
 

    const handleAmount=()=>{
        let ans=0;
        cart.map((item)=>(
            ans+=item.data.price*item.data.rating
        ))
        setTotalAmount(ans)
    }
    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.data.id !== id);
        setCart(arr);
        handleAmount()
    }
    useEffect(()=>{
        handleAmount();
    })

    return(
        <div className="min-vh-100 row   ">
        
            
        <div  className="d-flex justify-content-end sticky-top "  >
            <div className="card w-100" >
            <div className="card-body">
            <span>Total price:</span>
                <span>€{totalAmount}</span>
            </div>
                
            </div>
            </div>
           
             
          
            
               {
                cart?.map((item)=>(
                    <div key={item.data.id} className="card w-25 m-2 rounded-0  col-lg-3" >
                 <img src={item.data.thumbnail} id="image" className="card-img-top  rounded-0 " style={{height:"200px"}} alt="..." />
                 <div className="card-body">
                      <h5 className="card-title">{item.data.title}</h5>
                      <p className="card-text">{item.data.description}</p>
                      <p className="card-text">€{item.data.price}</p>
                      <div className="d-flex justify-content-center">
                        <button id="increament" href="#" className="btn btn-light " 
                        onClick={()=>{handleChange(item.data,+1)}}>+</button>
                        <span >{item.data.rating}</span>
                        <button href="#" className="btn btn-light"
                         onClick={()=>{handleChange(item.data,-1)}}>-</button>
                        </div>
                     <button  onClick={()=>handleRemove(item.data.id)} className="btn btn-warning">Remove</button>
                 </div>
            </div>
                ))
               }
              
                
                  
        </div>
    )
}
export default Checkout