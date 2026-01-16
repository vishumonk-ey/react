import React from 'react'

function input({value , setValue , placeholder , label , id , isError = false }) {
  return (
    <div className='w-full'>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} placeholder={placeholder} aria-label={id} className='rounded-md bg-[#F9FAFB]' value={value} onChange={(e)=>setValue(e.target.value)} />
        {isError && (<p className='text-sm text-red-600'>Enter valid {id.toLowerCase()}</p>)}
        
    </div>
  )
}

export default input