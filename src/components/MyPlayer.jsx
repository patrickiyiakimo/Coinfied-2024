import React from 'react'
import video from '../video/stock-footage-financial-analyst-working-on-a-computer-with-multi-monitor-workstation-with-real-time-stocks.webm'

const MyPlayer = () => {
  return (
      <div className='flex justify-center'>
          <p>Video gotten from Shutterstock</p>
          <video width="750" height="500" controls className='rounded'> 
              <source src={ video } type="video/mp4" />
          </video>
    </div>
  )
}

export default MyPlayer