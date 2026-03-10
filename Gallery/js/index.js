const imageInput = document.getElementById('url');
const uploadImage = document.getElementById('uploadImage');
const galleryGrid = document.getElementById('galleryGrid');
const testBtn = document.getElementById('test');

let gallery = [];

function renderGallery() {
    galleryGrid.innerHTML = '';
    gallery.forEach((image) => {
        let gridCard = document.createElement('img');
        gridCard.classList.add('gallery__card');
        gridCard.src = image;
        galleryGrid.appendChild(gridCard);
    });
}

uploadImage.addEventListener('click', (e) => {
    e.preventDefault();

    if (imageInput.value !== '') {
        gallery.push(imageInput.value);
        imageInput.value = '';
        renderGallery();
    } else {
        alert('Ponle un link ahí amigo!');
    }
});

testBtn.addEventListener('click', (e) => {
    e.preventDefault();

    gallery = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDer3AHwDQ5t5k8meBYeyXVpwClXiUxddSQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp365HC6gRWmjuWxvF4fyUl2ds-TADD6skPA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjrAC_AwxmJIaQeGI-68-fSoXmQYZmjJQNA&s',
        'https://i.pinimg.com/564x/98/2d/4b/982d4b383ed2cd2a6a965f3c00e95f90.jpg',
        'https://cdn.shopify.com/s/files/1/0775/9413/2783/files/Funny_Cat_Memes.png?v=1764917944',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnczTa-dENlJBTIziOKgOPG3BEB69cyVxFg&s'
    ];

    renderGallery();
});