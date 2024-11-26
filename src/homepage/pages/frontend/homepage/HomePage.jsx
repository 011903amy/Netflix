import React from 'react'
import Banner from './Banner'
import SliderMovie from './SliderMovie'
import Header from './Header'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <div className='py-24 mt-20 bg-dark'>
      <SliderMovie title="Top Picks"/>
      <SliderMovie title="International" filter='International'/>
      <SliderMovie title="Kdrama" filter='Kdrama'/>
      <SliderMovie title="Anime" filter='Anime'/>
      </div>
      
    </div>
  )
}

export default HomePage