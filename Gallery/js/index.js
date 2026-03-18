const imageInput = document.getElementById('url');
const uploadImage = document.getElementById('uploadImage');
const galleryGrid = document.getElementById('galleryGrid');
const testBtn = document.getElementById('test');
let galleryLocal = localStorage.getItem('gallery');
let gallery;

if (galleryLocal != '') {
    gallery = JSON.parse(galleryLocal)
} else {
    gallery = []
};

function renderGallery() {
    galleryGrid.innerHTML = '';
    gallery.forEach((image) => {
        let gridCard = document.createElement('img');
        gridCard.classList.add('gallery__card');
        gridCard.src = image;
        galleryGrid.appendChild(gridCard);
    });
};

uploadImage.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (imageInput.value !== '') {
        gallery.push(imageInput.value);
        localStorage.setItem('gallery', JSON.stringify(gallery))
        imageInput.value = '';
        renderGallery();
    } else {
        alert('Pon un enlace ahí, amigo!');
    }
});

if (gallery.length === 0) {
    testBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        gallery = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDer3AHwDQ5t5k8meBYeyXVpwClXiUxddSQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp365HC6gRWmjuWxvF4fyUl2ds-TADD6skPA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjrAC_AwxmJIaQeGI-68-fSoXmQYZmjJQNA&s',
            'https://i.pinimg.com/564x/98/2d/4b/982d4b383ed2cd2a6a965f3c00e95f90.jpg',
            'https://cdn.shopify.com/s/files/1/0775/9413/2783/files/Funny_Cat_Memes.png?v=1764917944',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnczTa-dENlJBTIziOKgOPG3BEB69cyVxFg&s',
            'https://i.pinimg.com/736x/b4/bb/b2/b4bbb2198b036fe1024571ec6b60f8b8.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnY7g20JvfbslDtWtAQze3jo2birmr3WeOo3W2j4EclVKERgJGejo4E31brV97T0mmzgk&usqp=CAU',
            'https://i.pinimg.com/736x/e9/f6/36/e9f63675fa85770c13c3d726f3313a37.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_iJ0hDHRx0YhaUqvcqC1cExS4SRCCgcP5g&s',
            'https://cdn.shopify.com/s/files/1/0344/6469/files/melted12_4e189508-0c43-406c-a76a-d6f05053163f.jpg?v=1574822154',
            'https://m.media-amazon.com/images/I/51fxxfxSpXL._AC_UF1000,1000_QL80_.jpg',
            'https://i.pinimg.com/474x/02/c6/1c/02c61ce2a4179a682bbe24e22ebbcb84.jpg',
            'https://media.tenor.com/wOSXqQeC7BIAAAAM/black-cat.gif',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhAfgyzhdSdzk03Fw_hTOV-rfukkpTX0qmhwdwKF6Lbve0NhaZB2Jbgsl67txdioQUg4&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJWXjwJLONrO-g6LRAMCvheeuDI5XtMobVO9tQBzxEC6Ml-tU3kN4rh4aBUlY2DxKeZs&usqp=CAU',
            'https://i.scdn.co/image/ab67616d00001e0256d2e24534150f6919d85325'
        ];

        localStorage.setItem('gallery', JSON.stringify(gallery))
        testBtn.hidden = true;
        renderGallery();
    });
} else {
    testBtn.hidden = true;
};

window.addEventListener("load", () => {
    renderGallery()
});