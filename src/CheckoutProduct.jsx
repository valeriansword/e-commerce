import React, { useEffect, useState } from "react";

function CheckoutProduct({cart,setCart,handleChange,handleRemove}){
    

        return(
            <div className="d-flex" >
                
               {
                cart?.map((item)=>(
                    <div key={item.data.id} className="card w-25 m-2 rounded-0"  >
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
export default CheckoutProduct;