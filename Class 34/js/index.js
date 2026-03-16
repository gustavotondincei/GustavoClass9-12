const list = document.getElementById('list')

fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then(data => {
    data.forEach(character => {
        const createListItem = document.createElement('li')
        createListItem.innerText = character.name
        list.appendChild(createListItem)
    })
})
.catch(error => console.error(error))