const images = ['media/img1.png', 'media/img2.png', 'media/img3.png']
let imageIndex = 0
let timeStamp = 300
const imgRotation = document.getElementById('imagen-rotativa')

function imageChange() {
    imgRotation.style.opacity = 0
    setTimeout(() => {
        imageIndex++


        if (imageIndex >= images.length) {
            imageIndex = 0
        }
        imgRotation.src = images[imageIndex]
        imgRotation.style.opacity = 1
    }, timeStamp)
    
}

function startRotation() {
    rotation = setInterval(() => {
        imageChange()
    }, timeStamp * images.length)
}

function stopRotation() {
    clearInterval(rotation)
}
imgRotation.addEventListener('mouseenter', () => {
    stopRotation()
})
imgRotation.addEventListener('mouseleave', () => {
    startRotation()
})

window.addEventListener('load', startRotation)






const imageInput = document.getElementById('url');
const uploadImage = document.getElementById('uploadImage');


uploadImage.addEventListener('click', (e) => {
    e.preventDefault();

    if (imageInput.value !== '') {
        images.push(imageInput.value);
        imageInput.value = '';
    } else {
        alert('Pon un enlace ahí, amigo!');
    }
});