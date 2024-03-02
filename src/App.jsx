import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Header";
import Home from "./Home";
import "./App.css";
import axios from "axios";
function App(){
  const [product,setProduct]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    axios.get("https://dummyjson.com/products").
    then((res)=>{
    //  console.log(res);
      setProduct(res.data.products);
      console.log(res.data.products);
      setLoading(false);
      
    }).catch(err=>{console.log(err)})
  },[])
  
  return(
    <div>
      <Header />
      <Home product={product} />
      
    </div>
  )
}
export default App;