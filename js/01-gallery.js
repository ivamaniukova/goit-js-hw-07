import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const imageList = document.querySelector(".gallery");

imageList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
imageList.addEventListener("click", handleClick);

function createMarkup(array) {
    return array.map(({ preview, original, description}) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
    </li>`).join("");
};



function handleClick(event) {
event.preventDefault()

    if(event.target === event.currentTarget){
        return;
    }

    const modalImg = event.target.closest(".gallery__link").href

    const instance = basicLightbox.create(`<img class ="gallery__image" src="${modalImg}" alt="${modalImg.description}">`);

    instance.show()
}