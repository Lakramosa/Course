const heading = document.getElementById('fio')
// const heading2 = document.getElementsByTagName('h2') [0]
// const heading2 = document.getElementsByClassName('h2-class')
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello')  // Всегда 1 элемент
console.dir(heading2);

const h2List = document.querySelectorAll('h2')
console.log(h2List);
const heading3 = h2List[1]

setTimeout(() => {
    addStylesTo(heading, 'JS')
}, 1500)

setTimeout(() => {
    addStylesTo(heading3, 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2, 'И всё получится!', 'yellow', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'white'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor ='#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'white'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor ='#000'
    }
})

heading3.addEventListener('mouseenter', () => {
    if (heading3.style.color === 'blue') {
        heading3.style.color = 'black'
        heading3.style.backgroundColor = 'white'
    } else {
        heading3.style.color = 'blue'
        heading3.style.backgroundColor ='#000'
    }
})
