import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function SearchedProduct(props){
        const [searchedItem,setSearchedItem]=useState([]);
        const [loading,setLoading]=useState(false);
        const {searchValue}=useParams();

        useEffect(()=>{
            
            axios.get("https://dummyjson.com/products/search?q="+searchValue)
            .then((res)=>
            {
                setSearchedItem(res.data.products);
                console.log(searchValue);
              
            }
            ).
            catch((err)=>console.log(err))
        },[searchValue])
        
            searchedItem.map((item)=>{
                    if(item.rating>1){
                        return item.rating=1
                    }
                })
            
        
   

    return (
        <div className="min-vh-100 row">
            { loading&& (<p>Loading...</p>)}
            { searchedItem.map((item)=>(
            
            <div key={item.id} id="card" className="card w-25 h-25 m-2 rounded-0  col-lg-3" >
                 <img src={item.thumbnail} id="image" className="card-img-top  rounded-0 " style={{height:"200px"}} alt="..." />
                 <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      
                     <button href="#" onClick={()=>{props.handleClick(item)}} className="btn btn-warning">Add to cart</button>
                 </div>
            </div> 
    
    ))}
        </div>
    )
}
export default SearchedProduct;