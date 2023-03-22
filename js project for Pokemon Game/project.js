const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'blue', 'yellow', 'white', 'black', 'violet', 'green', 'indigo']

body.style.backgroundColor = "violet"
button.addEventListener('click', changeB)


function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}

// the addEventListener executes a function when a user clicks a button 
