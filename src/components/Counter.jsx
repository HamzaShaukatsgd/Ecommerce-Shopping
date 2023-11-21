import React from 'react'

const Counter = () => {
  return (
    <div className='flex'>
     <div className=" flex justify-center items-center w-8 rounded-l-md bg-[#8a4af3] text-2xl cursor-pointer">-</div>
     <div className="flex justify-center items-center w-8 text-2xl border-[1px] border-[#8a4af3]">1</div>
     <div className="flex justify-center items-center w-8 rounded-r-md bg-[#8a4af3] text-2xl cursor-pointer">+</div>
    </div>
  )
}

export default Counter
