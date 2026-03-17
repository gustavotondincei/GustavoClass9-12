const charGrid = document.getElementById('charGrid')

fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then(data => {
    data.forEach(character => {
        const house = character.house
        if (character.image !== '') {
            const createCharCard = document.createElement('div')
            createCharCard.innerHTML = `    
                <img src="${character.image}" alt="${character.name}">
                <span class="${house}"></span>
                <div class="char__info">
                    <h4>${character.name}</h4>
                </div>
            `
            createCharCard.classList.add('char__card')
            charGrid.appendChild(createCharCard)
        }
    })
})
.catch(error => console.error(error))