import React, { useEffect, useState } from "react";
import axios from "axios";
function SearchedProduct(){
        const [searchedItem,setSearchedItem]=useState([])

        useEffect(()=>{
            axios.get("https://dummyjson.com/products/search",{
                params:{
                    q:"phone"
                }
            }).then((res)=>
            {
                setSearchedItem(res.data.products)
                console.log(searchedItem)
            }
            ).
            catch((err)=>console.log(err))
        },[])
    
   

    return (
        <div className="min-vh-100 row">
            { searchedItem.map((item)=>(
            
            <div key={item.id} className="card w-25 m-2 rounded-0  col-lg-3" >
                 <img src={item.thumbnail} id="image" className="card-img-top  rounded-0 " style={{height:"200px"}} alt="..." />
                 <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                     <button href="#" onClick={()=>{props.handleClick(item)}} className="btn btn-warning">Add to cart</button>
                 </div>
            </div> 
    
    ))}
        </div>
    )
}
export default SearchedProduct;