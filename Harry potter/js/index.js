const charGrid = document.getElementById('charGrid')

fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then(data => {
    data.forEach(character => {
        if (character.image !== '') {
            const createCharCard = document.createElement('div')
            createCharCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h4 style="display: none;">${character.name}</h4>
            `
            createCharCard.classList.add('char__card')
            charGrid.appendChild(createCharCard)
        }
    })
})
.catch(error => console.error(error))