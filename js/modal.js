let imagenes = document.querySelectorAll('.gallery_img')
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal_img');
let boton = document.querySelector('#modal_boton');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function (e) {
        modal.classList.toggle("modal_open");
        img.setAttribute("src", e.target.src)
    })
}

boton.addEventListener('click', function () { modal.classList.toggle("modal_open") })