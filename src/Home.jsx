import React from "react";

function Home(props){
    return(
        <div className="row d-flex justify-content-evenly ">
             { props.product.map((item)=>(
            
            <div key={item.id} className="card w-25 m-2 rounded-0  col-lg-3" >
                 <img src={item.thumbnail} className="card-img-top  rounded-0 " style={{height:"200px",width:"100%"}} alt="..." />
                 <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                     <a href="#" className="btn btn-warning">Add to cart</a>
                 </div>
            </div>
    
    ))}
        </div>
       
       
    )
}
export default Home;