import { Send } from '@material-ui/icons'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex justify-center items-center flex-col  bg-[#c4a4f9] h-[350px] w-[100%] '>
      <h1 className='text-[50px] font-bold '>NEWSLETTER</h1>
      <h2 className='text-[20px] mt-2 mobile:text-center mobile:p-3'>
        Always in touch with us, for your favourite products
      </h2>
      <div className='flex justify-between mt-[3rem] items-center min-w-[30rem] min-h-[2rem] overflow-hidden bg-white rounded-[5px] border-[#cccccc] mobile:min-w-[15rem]'>
        <input type="email" placeholder='email' className='pl-[20px] flex-[7] outline-none border-none' />
        <button className='bg-[#4caf50] flex-1 h-[100%]'>
            <Send className='text-white'/>
            </button>
      </div>
    </div>

  )
}

export default Newsletter
