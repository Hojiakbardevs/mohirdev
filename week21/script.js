// const paragraph = document.createElement('p')
// const text = document.createTextNode('My name is John nowadays writing paragraph')
// paragraph.appendChild(text)
// document.body.appendChild(paragraph)
// console.log(paragraph)

// const box = document.getElementById('box')
// box.appendChild(text)
// document.body.appendChild(text)
// console.log(box)



const paragraph = document.createElement('p')

const text = document.createTextNode("My brother name is John")

paragraph.appendChild(text)


const box = document.getElementById('box')

box.appendChild(paragraph)

console.log(box)
console.log(paragraph)

// box.remove()


// Hodisalar event learning 

function myFunction(){
    const heading = document.getElementById('heading')

    heading.style.color = "red"
    heading.style.backgroundColor = "black"
    heading.textContent = 'Javascript o\'rganildi'
}