import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-2'>{children}</div>
  )
}

export default Container