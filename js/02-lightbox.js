import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
const itemsMarkup = createGalleryImagesMarkup (galleryItems)

// Створюємо галерею картинок з масиву обєктів
function createGalleryImagesMarkup (galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`;
})
.join('');
}

gallery.insertAdjacentHTML('beforeend', itemsMarkup)

// Підключаємо бібліотеку Lightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})

console.log(galleryItems);
