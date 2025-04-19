/*
const root = document.getElementById("root");
const reactElement = {
    type: 'a',
    children: 'visit google',
    props: {
        href: 'https://google.com/',
        target: '_blank'
    }
}


const customRender = (() => {
    // const elem = document.createElement(reactElement.type)
    // elem.innerText = reactElement.children

    // const attr = document.createAttribute('href')
    // attr.value = reactElement.props.href

    // elem.setAttributeNode(attr)
    // root.appendChild(elem)

    // const elem2 = document.createElement(reactElement.type)
    // elem2.innerText = reactElement.children

    // elem2.setAttribute('href', reactElement.props.href)
    // root.appendChild(elem2)

    const elem3 = document.createElement(reactElement.type)
    elem3.innerText = reactElement.children

    for(const attribute in reactElement.props){
        elem3.setAttribute(attribute, reactElement.props[attribute])
    }

    root.appendChild(elem3)

    // console.log(elem, elem2, elem3)
})()
*/

function render(reactElement, container){
    const element = document.createElement(reactElement.type)
    element.innerText = reactElement.children

    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        element.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(element)
}

const container = document.getElementById("root");
const reactElement = {
    type: 'a',
    children: 'visit google',
    props: {
        href: 'https://google.com/',
        target: '_blank'
    }
}
render(reactElement, container)