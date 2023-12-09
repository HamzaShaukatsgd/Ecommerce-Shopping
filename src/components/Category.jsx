import React from 'react'
import { useNavigate } from "react-router-dom";


const Category = ({item}) => {
  const navigate =useNavigate();
  return (
  <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
  <img src={item.src} className="w-[100%]" alt='category_img'/>
  <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
      <h2 className='text-white font-medium text-[1rem]'>{item.title}</h2>
      <buttton  className='btn'  onClick={()=>navigate("/CategoryPage")} >See more</buttton>
  </div>
</div>
)
}

export default Category
