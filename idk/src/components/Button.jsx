import React, { Children } from 'react'

function Button({className , children,...props}) {
  return (
    <button className={`px-4 py-2 rounded-lg text-white bg-blue-600/80 ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button