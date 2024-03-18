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
            <div className="row ">
                <div className="col-9">
                    <h4>Your shopping cart</h4>
                    <div className="row">
                    {
                cart?.map((item)=>(
                    <div key={item.id} className="col-lg-4" id="card"   >
                 <img src={item.thumbnail} id="image" className="card-img-top  rounded-0 "  alt="..." />
                 <div className="card-body">
                      <h5 id="cardTitle" className="card-title">{item.title}</h5>
                       
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
                <div className="col-3" id="totalPrice" >
                    <p className="fw-normal pb-0">Total price:</p><p className=""><b id="price1" className="">€{totalAmount}</b></p>
                    <div className="d-flex" ><input type="checkbox" className="pt-0"/>
                    <p className="mt-2 ms-2">this order contains gift</p></div>
                    <button className="btn btn-warning rounded-0">Proceed to Checkout</button>
                </div>

            </div>

        </div>
    )
}
export default Checkout;
