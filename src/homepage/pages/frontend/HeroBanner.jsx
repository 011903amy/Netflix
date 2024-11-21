import { imgPath } from '@/helpers/functions-general'
import { Play } from 'lucide-react'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='relative  '>
    <img src={`${imgPath}/series-6.jpg`}alt="" className='w-full max-h-[calc(100vh-83.95px)] object-cover'/>
      <div className="container">
        
        <div className='flex gap-6 text-white absolute top-[20rem] left-[10rem] opacity-60'>
          <p>2007</p>
          <p>Historical drama</p>
          <p>1h 50min</p>
          <small className='border p-[2px]'>HD</small>
        </div>
        <div className='absolute top-[25rem] left-[10rem] text-white'>
          <h1 className='text-[5rem] mb-5'>The Tudors</h1>
          <p className='opacity-60 mb-5'>adsadsasdasd</p>
          <p className='opacity-60 mb-5'>asdasdasd</p>

          <div className='text-white flex gap-3'>
            <button className='bg-red-600 flex gap-2 p-2 items-center rounded-md w-[5rem]text-center'><Play size={20}/>Play</button>
            <button className='bg-black flex gap-2 p-2 items-center rounded-md w-[6rem] text-center bg-opacity-60'>More Info</button>
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default HeroBanner