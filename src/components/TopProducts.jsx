import React from 'react'
import {ApiTopPropducts} from "../apifolder/TopProductApi"
import Product from './Product'

const TopProducts = () => {
    console.log(ApiTopPropducts);
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
      {
        ApiTopPropducts.map((product,index)=>{
          return(
            <Product item={product} key={index}/>
            )
        })
      }
    </div>
  )
}

export default TopProducts
