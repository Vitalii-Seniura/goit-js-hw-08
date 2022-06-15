import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox/";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems.map((
    { preview, original, description }) =>
    `<a class="gallery__item" href='${original}'>
    <img class='gallery__image' src='${preview}' 
    alt='${description}' data-caption='${description}'>
    </a>`).join("");

gallery.insertAdjacentHTML("beforeend", galleryItem);

gallery.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
};

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'data-caption', 
    captionPosition: 'bottom', captionDelay: '250',  });


