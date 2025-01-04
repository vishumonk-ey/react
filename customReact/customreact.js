const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click here to visit google'
}
const mainContainer=document.getElementById("root")
customRender(reactElement,mainContainer)

function customRender(obj,container){
    const element=document.createElement(obj.type)
    const attributes=Object.entries(obj.props)
    for (const [key,value] of attributes) {
        element.setAttribute(key,value)
    }
    element.innerHTML=obj.children
    container.appendChild(element)
}