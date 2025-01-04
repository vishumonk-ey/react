import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//app is basically a function so it can be called also and it will work finely inside the render
//bundlers behind the scene converts the jsx file into an object type file ---> example-
/*const reactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'click here to visit google'
}*/
// as we know that app.jsx is being converted into an object so can i directly use my customReact object as it will exclude the parsing step. yes, i can but i dont know what kind of parameter does the react's render method allows

// so instead of creating our own customReact object we can create an object which is allowed by react's render method by React.createElement method
const anotherUser='vishal'
const domElement=React.createElement(
  'a',//type
  {href:'https://google.com',target:'_blank'},//props
  'click here to visit google',//children
  // the order has to be maintained
  anotherUser
)
console.log(domElement);

const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)
// anotherElement is jsx
ReactDOM.createRoot(document.getElementById('root')).render(
    // domElement
    <App/>
)
