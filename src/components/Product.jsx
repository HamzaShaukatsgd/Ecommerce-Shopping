import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React, { useState } from 'react'

const Product = ({item}) => {
    const styleIcon='h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center m-3 cursor-pointer  hover:bg-[#894af3] hover:text-white hover:scale-[1.1] hover:ease-in hover:duration-100 hover:cursor-pointer';
    
    const [hoverEffect,setHoverEffect] =useState('opacity-0')
    
    const handleHoverEnter=()=>{
        setHoverEffect('opacity-1 bg-[rgba(0,0,0,0.2)]');
    }
    const handleHoverLeave =()=>{
      setHoverEffect('opacity-0 ');


      let a=[2,3,4,5,6,10,67,7,9];
        const b= Math.max(a);
        console.log(b);
  }

  return (
    <div className=' flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden shadow-lg rounded-md m-2 relative ' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
      <img src={item.src} alt="Images" />
    {/* Icons */}
    <div className={`flex  items-center   justify-center w-[100%] h-[100%] absolute ease-in duration-300 `+hoverEffect} >
    <div className={styleIcon}>
      <ShoppingCartOutlined/>
    </div>
    <div className={styleIcon}>
      <FavoriteBorderOutlined/>
    </div>
    <div  className={styleIcon}>
      <SearchOutlined/>
    </div>
    </div>
    </div>
  )
}

export default Product

