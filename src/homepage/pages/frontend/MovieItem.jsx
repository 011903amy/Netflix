import { imgPath } from '@/helpers/functions-general'
import React from 'react'

const MovieItem = ({item,key}) => {
  return (
    <div>
      <div className='relative'>
        
        <img src={`${imgPath}/${item.img}`} alt="" className='h-[400px] w-[300px] object-cover' />

        
       
       <div className='bg-black z-50 absolute top-0 h-[400px] w-[300px] bg-opacity-60'>
        <span>
          <div className='flex gap-2 text-white absolute top-[15rem] left-[1rem] opacity-60'>
          <p>{item.year}</p>
          <p className='whitespace-nowrap'>{item.genre}</p>
          <p className='whitespace-nowrap' >{item.duration}</p>
          <small className='flex items-center border px-[1px]'>HD</small>
        </div>
        <div className='absolute top-[16rem] left-[1rem] text-white'>
          <h3 className='text-[2rem] mb-1 whitespace-pre-line'>{item.title}</h3>
          <p className='opacity-60 mb-1'>adsadsasdasd</p>
          <p className='opacity-60 mb-5'>asdasdasd</p>
          </div>
        </span>
      </div> 
      </div>
      
      
    </div>
  )
}

export default MovieItem