import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  
  const navigateHandler = () => {
    setTimeout(()=>{
      navigate("/product");
    },3000);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateHandler}>Go to product page</button>
    </div>
  )
}

export default Home