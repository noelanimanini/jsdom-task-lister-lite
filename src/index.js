// document.addEventListener("DOMContentLoaded", () => {
  
// });

// const myForm = document.getElementById("create-task-form")

// // create a select dropdown for level of importance
// const selectDropdown = document.createElement("select")

// // insert the select dropdown into the existing form
// myForm.children[1].insertAdjacentElement('afterend', selectDropdown)

// // create options for the select dropdown
// const highOption = document.createElement("option")
// highOption.innerText = "high"
// selectDropdown.append(highOption)
const myForm = document.getElementById("create-task-form")
const selectDropdown = document.createElement("select")

myForm.children[1].insertAdjacentElement('afterend', selectDropdown)
const highOption = document.createElement('option')
highOption.innerText = "high"
selectDropdown.append(highOption)

const mediumOption = document.createElement('option')
mediumOption.innerText = "medium"
selectDropdown.append(mediumOption)

const lowOption = document.createElement('option')
lowOption.innerText = "low"
selectDropdown.append(lowOption)

function handleDelete(event) {
    event.target.parentElement.remove()
}

function importanceColor(importance) {
    if (importance === 'high') {
        return "red"
    } else if (importance === 'medium') {
        return 'orange'
    } else {
        return 'blue'
    }
}
function handleFormSubmit(event) {
    event.preventDefault()
    const newTask = event.target['new-task-description'].value
    const importanceLevel = event.target.children[2].value 
    const color = importanceColor(importanceLevel)
    const taskUL = document.querySelector("#tasks")
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "X"
    deleteBtn.addEventListener('click', handleDelete)
    const LI = document.createElement('li')
    LI.style.color = color
    LI.innerText  = newTask
    LI.append(deleteBtn)
    taskUL.appendChild(LI)
    
    event.target.reset()
// As a user, I should be able to type a task into the input field. [x]
// As a user, I should be able to click some form of a submit button. [x]
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.[x]
}

myForm.addEventListener('submit', handleFormSubmit)

