// Описаний в документації
import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryImageContainer = document.querySelector('.gallery')

function createGalleryList(items) {
    return items.map(item =>
        `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}"/>
        </a>`
    ).join(" ")    
};

galleryImageContainer.innerHTML = createGalleryList(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: 'bottom',
    captionDelay: 250,
});

gallery.on('show.simplelightbox', function () {
	
});