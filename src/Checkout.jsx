import React, { useEffect, useState } from "react";

import "./css/Checkout.css"

function Checkout({cart,setCart,handleChange}){

    const [totalAmount,setTotalAmount]=useState(0);
    const handleAmount=()=>{
        let ans=0;
        cart.map((item)=>(
            ans+=item.price*item.rating
        ))
        setTotalAmount(ans)
    }

    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id !== id);
        setCart(arr);
        handleAmount()
    }
    useEffect(()=>{
        handleAmount();
    })
    

    
    return(
        <div className="container-fluid min-vh-100">
            <div className="row  mt-2">
                <div className="col-9">
                    <h4>Your shopping cart</h4>
                    <div className="row">
                    {
                cart?.map((item)=>(
                    <div key={item.id} className="col-lg-4" id="card"   >
                 <img src={item.thumbnail} id="image" className="card-img-top  rounded-0 " style={{height:"200px"}} alt="..." />
                 <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                       
                      <p className="card-text" id="price">€{item.price}</p>
                      <div className="d-flex justify-content-center">
                      <button id="decrement"href="#" className="btn btn-light"
                         onClick={()=>{handleChange(item,-1)}}>-</button>
                         <span >{item.rating}</span>
                      
                          <button id="increment" href="#" className="btn btn-light " 
                        onClick={()=>{handleChange(item,+1)}}>+</button>
                      
                        </div>
                     <button  onClick={()=>handleRemove(item.id)} id="removeButton" >Remove</button>
                 </div>
            </div>
                ))
               }
                    </div>
                       

                </div>
                <div className="col-3">
                    <p className="fw-normal">Total price:</p><p><b>€{totalAmount}</b></p>
                    <button className="btn btn-warning rounded-0">Proceed to Checkout</button>
                </div>

            </div>

        </div>
    )
}
export default Checkout;
