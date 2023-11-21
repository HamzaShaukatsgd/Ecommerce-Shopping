import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, PhoneOutlined, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
const socialStyle="m-3 rounded-full cursor-pointer p-2 text-white"

  return (
    <div className='flex justify-around p-2 items-center bg-gray-500 text-white mobile:flex-col mobile:items-start'>
      <div className=' flex-1 flex flex-col flex-wrap p-2'>
        {/* Store Information */}
        <h1 className='text-[25px]'>Ali Express</h1>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Minus quos nam rem maiores velit modi libero accusamus provident facilis ea.</h2>
        <div className='flex justify-center items-center mt-3 self-start'>
            <div className={` bg-blue-700 ` +socialStyle}> <Facebook/> </div>
            <div className={` bg-orange-300 ` +socialStyle}><Instagram/></div>
            <div className={` bg-sky-400 ` +socialStyle}><Twitter/></div>
            <div className={` bg-red-600 ` +socialStyle}><Pinterest/></div>
        </div>
      </div>
      <div className='flex-1 flex flex-col p-2 '>
        {/* Contact Information*/}
        <div className='flex mt-3' >
            <LocationOnOutlined/>
            <p className='pl-3'>State Of Pakistan</p>
        </div>
        <div className='flex mt-3'>
            <LocalPhoneOutlined/>
            <p className='pl-3'>+92 342 7687567</p>
        </div>
        <div className='flex mt-3'>
             <EmailOutlined/>
            <p className='pl-3'>keepstravel@gmail.com</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
