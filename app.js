// get Id Function
function getId(val) {
    return document.getElementById(val)
}

// parseInt
function parseInteger(val) {
    return parseInt(val.value)
}
// multi
function multi(val1, val2) {
    return val1 * val2
}
// Function creation
function createElements(val){
    return document.createElement(val)
}

getId('calculateTri').addEventListener('click', () => {
    const li = createElements('li')
    li.style.color = "red"
    li.classList.add('list-decimal')
    console.log(li.classList)
    const input1 = parseInteger(getId('triangleInputB'))
    const input2 = parseInteger(getId('triangleInputH'))
    const ul = getId('ul')
    const triMult = 0.5 * multi(input1,input2)
    li.innerText = triMult
    console.log(li.innerText)
    ul.appendChild(li)
    getId('triangleInputB').value = ''
    getId('triangleInputH').value = ''
})
