import React, { Children } from 'react'

function Button({className , children,...props}) {
  return (
    <button className={`px-6 py-2.5 rounded-lg cursor-pointer text-white bg-blue-600/80 ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button