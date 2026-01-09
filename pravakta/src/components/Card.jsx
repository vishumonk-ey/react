import React from 'react'

export default function Card({company,img,text}) {
  return (
    <div className='w-full max-w-sm p-2'>
        <img src={img} alt={company} className='rounded-sm h-40 w-60 mx-auto' />
        <p className='px-2 mt-3.5 text-center'>
            <span className='text-[#605047] font-bold'>{company}</span> 
            {" "}
            {text}
        </p>
    </div>
  )
}
