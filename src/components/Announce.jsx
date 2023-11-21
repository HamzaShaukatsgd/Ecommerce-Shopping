import { Close } from '@material-ui/icons'
import { React, useState } from 'react'

const Announce = () => {
 
   const [announceStyle ,setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex justify-center items-center');
   const handlerclose=()=>{
    setAnnounceStyle(announceStyle + " hidden");
   
   }
  return (
    <div className={announceStyle}> 
        <h2 >Hurry up it's 40% off now </h2>
      <Close className='cursor-pointer' onClick={handlerclose}/>
    </div>
  )
}

export default Announce
