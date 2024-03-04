import React, { useEffect, useState } from "react";
function Checkout({cart,setCart,handleChange}){

    let [pieces,setPieces]=useState(1);
    
    const [totalAmount,setTotalAmount]=useState(0);
    
 

    const handleAmount=()=>{
        let ans=0;
        cart.map((item)=>(
            ans+=item.price*pieces
        ))
        setTotalAmount(ans)
    }
    useEffect(()=>{
        handleAmount();
    })

    return(
        <div className="min-vh-100 row d-flex ">
               {
                cart?.map((item)=>(
                    <div key={item.id} className="card w-25 m-2 rounded-0  col-lg-3" >
                 <img src={item.thumbnail} id="image" className="card-img-top  rounded-0 " style={{height:"200px"}} alt="..." />
                 <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">€{item.price}</p>
                      <div className="d-flex justify-content-center">
                        <button id="increament" href="#" className="btn btn-light " 
                        onClick={()=>{
                            setPieces(pieces+=1)
                            
                            handleChange(item,+1,pieces)
                            }}>+</button>
                        <span >{pieces}</span>
                        <button href="#" className="btn btn-light"
                         onClick={()=>{
                            setPieces(pieces-=1)
                            handleSubtract(item,-1,pieces)}}>-</button>
                        </div>
                     <button href="#" className="btn btn-warning">Remove</button>
                 </div>
            </div>
                ))
               }
               <div>
                <span>Total price:</span>
                <span>€{totalAmount}</span>
               </div>
                
                
        </div>
    )
}
export default Checkout