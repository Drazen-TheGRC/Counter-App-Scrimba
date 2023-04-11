let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let peopleEl = document.getElementById("people-el")

let count = 0
let people = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = "(" + count + ")" + ">"
    saveEl.textContent += countStr
    
    people += count
    peopleEl.textContent = "People inside: " + people
    
    count = 0
    countEl.textContent = count
}
