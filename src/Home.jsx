import React from "react";
import "./App.css";
function Home(props){
    return(
        <div className="row d-flex justify-content-center">
             { props.product.map((item)=>(
            
            <div key={item.data.id} className="card w-25 m-2 rounded-0  col-lg-3" >
                 <img src={item.data.thumbnail} id="image" className="card-img-top  rounded-0 " style={{height:"200px"}} alt="..." />
                 <div className="card-body">
                      <h5 className="card-title">{item.data.title}</h5>
                      <p className="card-text">{item.data.description}</p>
                     <button href="#" onClick={()=>{props.handleClick(item)}} className="btn btn-warning">Add to cart</button>
                 </div>
            </div> 
    
    ))}
        </div>
       
       
    )
}
export default Home;