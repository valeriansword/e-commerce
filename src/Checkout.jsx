import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";


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
        <div className="container-fluid">
            <div className="row min-vh-100 mt-2">
                <div className="col-9">
                    <h4>Your shopping cart</h4>
                    <div className="col-lg-5">
                    <CheckoutProduct cart={cart} handleRemove={handleRemove} setCart={setCart} handleChange={handleChange} />
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
export default Checkout
