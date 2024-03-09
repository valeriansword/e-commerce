import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Header";
import Home from "./Home";
import axios from "axios";
import Footer from "./Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage";
import SearchedProduct from "./SearchedProduct";
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
        rating:1
      }),
      axios.put("https://dummyjson.com/products/3",{
        rating:1
      }),axios.put("https://dummyjson.com/products/4",{
        rating:1
      }),axios.put("https://dummyjson.com/products/5",{
        rating:1
      }),axios.put("https://dummyjson.com/products/6",{
        rating:1
      }),axios.put("https://dummyjson.com/products/7",{
        rating:1
      }),axios.put("https://dummyjson.com/products/8",{
        rating:1
      }),axios.put("https://dummyjson.com/products/9",{
        rating:1
      }),axios.put("https://dummyjson.com/products/10",{
        rating:1
      }),axios.put("https://dummyjson.com/products/11",{
        rating:1
      }),axios.put("https://dummyjson.com/products/12",{
        rating:1
      }),axios.put("https://dummyjson.com/products/13",{
        rating:1
      }),axios.put("https://dummyjson.com/products/14",{
        rating:1
      }),axios.put("https://dummyjson.com/products/15",{
        rating:1
      }),axios.put("https://dummyjson.com/products/16",{
        rating:1
      }),axios.put("https://dummyjson.com/products/17",{
        rating:1
      }),axios.put("https://dummyjson.com/products/18",{
        rating:1
      }),axios.put("https://dummyjson.com/products/19",{
        rating:1
      }),axios.put("https://dummyjson.com/products/20",{
        rating:1
      }),
      axios.put("https://dummyjson.com/products/21",{
        rating:1
      })
    ])
   .
    then((res)=>{
      const response=res.map((item)=>(item.data));
      
      setProduct(response)
        
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
  const handleChange=(item,d)=>{
    let ind=-1;
    cart.forEach((data,index)=>{
      if(data.id===item.id)
        ind=index;
    });
    const tempArr=cart;
    tempArr[ind].rating+=d;
    if(tempArr[ind].rating===0)
        tempArr[ind],rating=1;
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
        <Route path="/e-commerce/login" element={<LoginPage />}></Route>
        <Route path="/e-commerce/SearchedProduct/:searchValue" element={<SearchedProduct handleClick={handleClick} />}></Route>
        
      </Routes>
      <Footer />
      </BrowserRouter>
      
      
      
    
     
  
  )
}
export default App;