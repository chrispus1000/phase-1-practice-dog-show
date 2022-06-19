document.addEventListener('DOMContentLoaded', () => {
    fetchAllDogs()
})

function fetchAllDogs(){
    fetch(`http://localhost:3000/dogs/`)
    .then(res => res.json())
    .then(json => (json).forEach((user) => {
        renderDogTable(json)
    }))
}

function renderDogTable(data) {
    let table = document.querySelector("#table-body")
    data.forEach((dog) => {
        let row = table.insertRow();
        let cellName = row.insertCell()
        let textName = document.createTextNode(dog.name);
        let cellBreed = row.insertCell()
        let textBreed = document.createTextNode(dog.breed);
        let cellSex = row.insertCell()
        let textSex = document.createTextNode(dog.sex);
        let cellEdit = row.insertCell()
        let buttonEdit = document.createElement("button")
        buttonEdit.innerHTML = "Edit Info"
        cellName.appendChild(textName);
        cellBreed.appendChild(textBreed);
        cellSex.appendChild(textSex);
        cellEdit.appendChild(buttonEdit);

        buttonEdit.addEventListener('click', (e) => {
            e.preventDefault()
            let formEditDogs = document.querySelector("#dog-form")
            formEditDogs[0].value = dog.name
            formEditDogs[1].value = dog.breed
            formEditDogs[2].value = dog.sex
        })
    })
}
fetchAllDogs()