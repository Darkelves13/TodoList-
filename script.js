const searchBar = document.querySelector("#searchBar")  //selecting the search bar by its Id
const outputSection = document.querySelector(".output")
let currentElementToEdit
const editBar = document.querySelector(".popBar")
const saveButton = document.querySelector(".saveBtn")
const popUpSection = document.querySelector(".popUpSection")


// taking the input from the search bar
searchBar.addEventListener("keypress", event =>{
    if(event.key == "Enter"){
        const inputText = event.target.value
        searchBar.value = ""
        if(inputText){
            addInput(inputText);
        }else{
            alert("Please enter a text!!!") //make an element later!!!
        }
    }
})

saveButton.addEventListener("click", () => {
    if(currentElementToEdit){
        currentElementToEdit.innerText = editBar.value
        currentElementToEdit = null
        popUpSection.style.display = "none"
    }
})

// adding the values to the to-do list
function addInput(inputText){
    const toDoList = document.createElement("li")   //creating the main li element to place the inputs 
    toDoList.className = "inputValues"

    const textSpan = document.createElement("span") //creating the text input
    textSpan.innerText = inputText //adding the input value

    const deleteButton = document.createElement("button")   //creating a delete button to delete the input
    deleteButton.innerText = "X"
    deleteButton.className = "deleteBtn"

    const checkBox = document.createElement("input") //creating the checkbox
    checkBox.type = "checkbox"
    checkBox.className = "tickBox"

    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.className = "editBtn"

    //adding the created elements
    outputSection.appendChild(toDoList)
    toDoList.prepend(checkBox)
    toDoList.appendChild(textSpan)
    toDoList.appendChild(editButton)
    toDoList.appendChild(deleteButton)
    outputSection.scrollTop = outputSection.scrollHeight

    // function for deletion of inputs
    deleteButton.addEventListener("click", () => deleteInput(toDoList, deleteButton))
    //function for checkbox animation
    checkBox.addEventListener("change", () => checkBoxFunc(checkBox, textSpan))
    //fucntion for edit button
    editButton.addEventListener("click", () => editButtonFunc(textSpan))
}

//function for deletion of inputs
function deleteInput(toDoList){
    //removing the added nodes
    toDoList.remove() 
}

//function for checkbox animation
function checkBoxFunc(checkBox, textSpan){
    if(checkBox.checked){ // if it is true then add the class name
        textSpan.classList.add("complete")
    }else{  // if it is false then remove the class name
        textSpan.classList.remove("complete")
    }
}

//fucntion for edit button
function editButtonFunc(textSpan){
    currentElementToEdit = textSpan
    editBar.value = textSpan.innerText
    popUpSection.style.display = "block"
}