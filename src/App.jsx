import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Header";
import Home from "./Home";
import axios from "axios";
import Footer from "./Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Checkout from "./Checkout";
function App(){


  const [product,setProduct]=useState([]);
  const [loading,setLoading]=useState(false);
  const[cart,setCart]=useState([]);
  const[warning,setWarning]=useState(false);


  useEffect(()=>{
    Promise.all([
      axios.put("https://dummyjson.com/products/1",{
        rating:1
      }),
      axios.put("https://dummyjson.com/products/2",{
        rating:2
      })
    ])
   .
    then((res)=>{
      setProduct(res)
        
    }).catch(err=>console.log(err))
  },[])

  // useEffect(()=>{
  //   setLoading(true);
  //   axios.get("https://dummyjson.com/products").
  //   then((res)=>{
  //   //  console.log(res);
  //     setProduct(res.data.products);
  //     console.log(res.data.products);
  //     setLoading(false);
      
  //   }).catch(err=>{console.log(err)})
  // },[])
  

  const handleClick= (item)=>{
    let isPresent=false;
    cart.forEach((product)=>{
      if (product.id===item.id)
        isPresent=true;
      });
      if(isPresent){
        setWarning(true);
        setTimeout(()=>{ 
          setWarning(false);
        },1000)
        return;
          
      }
        
      setCart([...cart,item]);
      
 }
  const handleChange=(item,d,amount)=>{
    let ind=-1;
    cart.forEach((data,index)=>{
      if(data.id===item.id)
        ind=index;
    });
    const tempArr=cart;
    tempArr[ind].amount+=d;
    if(tempArr[ind].amount===0)
        tempArr[ind].amount=1;
    setCart([...tempArr])
  }
  return(
    
      <BrowserRouter>
     
     <Header size={cart.length}/>
      {
        loading &&(<p>Loading ..</p>)
        
      }
      {
        warning &&(<p >already added</p>)
      }
      <Routes>
        <Route path="/e-commerce/" element={<Home product={product} handleClick={handleClick} />}></Route>
        <Route path="/e-commerce/checkout" element={<Checkout cart={cart} setCart={setCart} handleChange={handleChange} />}></Route>
        
      </Routes>
      <Footer />
      </BrowserRouter>
      
      
      
    
     
  
  )
}
export default App;