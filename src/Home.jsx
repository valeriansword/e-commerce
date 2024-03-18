import React from "react";
import "./App.css";
function Home(props){
    return(
        <div className="min-vh-100 row d-flex justify-content-center">
             { props.product.map((item)=>(
            
            <div key={item.id} id="homeCard" className="card  m-2 rounded-0  col-lg-3 col-sm-6" >
                 <img src={item.thumbnail} id="image" className="card-img-top  rounded-0 " style={{height:"200px"}} alt="..." />
                 <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description.substring(0,20)}...</p> 
                     <button href="#" onClick={()=>{props.handleClick(item)}} className="btn btn-warning w-100 rounded-0 btn-sm">Add to cart</button>
                 </div>
            </div> 
    
    ))}
        </div>
       
       
    )
}
export default Home;