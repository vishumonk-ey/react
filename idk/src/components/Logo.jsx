import React from 'react'
import  speakline from '../speak-line.svg'
function Logo() {
  return (
    <div>
        <img src={speakline} 
            height={32}
            width={32}
            className='bg-cover'
        />
    </div>
  )
}

export default Logo