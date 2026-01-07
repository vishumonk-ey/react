import React from 'react'

export default function Card({company,img,text}) {
  return (
    <div className='w-full max-w-sm p-2'>
        <img src={img} alt={company} />
        <p className='px-2 mt-2'>
            <span className='text-[#605047] font-bold'>{company}</span> 
            {text}
        </p>
    </div>
  )
}
