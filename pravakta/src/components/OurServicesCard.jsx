import React from 'react'

export default function OurServicesCard({title , text }) {
  return (
    <div className='w-full max-w-sm'>
        <h1 className='text-[#303030] text-2xl font-semibold text-center'>{title}</h1>
        <p className="mt-2">{text}</p>
    </div>
  )
}
