import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-black bg-blue-100 font-mono p-6'>Hello !</p>
    </>
  )
}

export default App
